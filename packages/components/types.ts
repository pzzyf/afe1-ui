import type { App } from "vue";

export interface AppInstallInterface {
  (app: App): App;
}
