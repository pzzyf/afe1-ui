import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import replace from '@rollup/plugin-replace'
import VueMacros from 'unplugin-vue-macros/rollup'

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = dirname(__filenameNew);
// 确定根目录，目前执行目录是在 ./internal/build，所以需要跳出两层
const projRoot = resolve(__dirnameNew, "..", "..");
// 拼接 ./packages 目录路径
const pkgRoot = resolve(projRoot, "packages");
// 拼接 ./packages/afe1-ui 目录路径
const auRoot = resolve(pkgRoot, "afe1-ui");

// 拼接打包根目录
const buildOutput = resolve(projRoot, "dist");
// 拼接包目录
const auOutput = resolve(buildOutput, "afe1-ui");

// 全量打包任务函数
const buildFullEntry = async () => {
  const bundle = await rollup({
    input: resolve(auRoot, "index.ts"), // 配置入口文件
    plugins: [
      // 配置插件
      VueMacros({
        plugins: {
          vue: vue(),
        },
      }),

      nodeResolve({
        extensions: [".ts"],
      }),
      replace({
        'process.env.NODE_ENV': '"production"',
        preventAssignment: true, // 这个选项用于防止在字符串后面紧跟一个等号时进行替换。可以用于避免错误的赋值操作
      }),
      esbuild(),
    ],
    // 排除不进行打包的 npm 包，例如 Vue，以便减少包的体积
    external: ["vue"],
  });
  // 配置输出文件格式
  bundle.write({
    format: "umd",
    file: resolve(auOutput, "dist", "index.full.js"),
    name: "Afe1Ui",
    globals: {
      vue: "Vue",
    },
  });
};
buildFullEntry();
