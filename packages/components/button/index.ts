import { App } from "vue";
import Button from "./src/button.vue";

// 具名导出
export { Button };

interface Afe1UIOption {
  classPrefix?: string;
  componentPrefix?: string;
}

const CLASS_PREFIX = "a"
const GLOBAL_CONFIG_NAME = "_Vue3UI"

// 注入全局app属性
const setGlobalConfig = (
  app: App,
  options: Afe1UIOption = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

// 注册插件
const installComponent = (
  app: App,
  component: any,
  options?: Afe1UIOption
) => {
  setGlobalConfig(app, options)
  app.component(component.name, component)
}

// 导出插件
export default {
  install(app: App, options?: Afe1UIOption) {
    installComponent(app, Button, options);
  },
};
