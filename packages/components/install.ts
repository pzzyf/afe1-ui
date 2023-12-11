import type { App } from "vue";
import { components } from "./components";

const Afe1Ui = {
  install(app: App) {
    // 注册所有组件
    components.forEach((component) => {
      app.component(`a-${component.name}`, component);
    });
  },
};

export default Afe1Ui;
