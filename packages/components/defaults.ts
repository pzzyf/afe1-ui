import type { App } from "vue";
import * as components from "./components";
import type { AppInstallInterface } from "./types";
/**
 * 注册组件
 * @param app 应用实例
 * @returns { App } 应用实例
 */
const install: AppInstallInterface = (app: App): App => {
  /**
   * 注册组件
   *
   * https://cn.vuejs.org/guide/components/registration.html
   */
  Object.entries(components).forEach(([key, value]): void => {
    app.component(key, value);
  });
  /**
   * 注册能够被应用内所有组件实例访问到的全局组件
   *
   * https://cn.vuejs.org/api/application.html#app-config-globalproperties
   */

  /**
   * 注册自定义指令组件
   *
   * https://cn.vuejs.org/api/application.html#app-directive
   */

  return app;
};

export default {
  install,
};
