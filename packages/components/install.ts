import { App } from "vue"
import { components } from "./components"

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

const Afe1UI = {
  install(app: App, options?: Afe1UIOption) {
    components.forEach(component => {
      installComponent(app, component, options)
    })
  }
}

export default Afe1UI

