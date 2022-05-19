import { App } from "vue";
import VxButtonSearch from "./src/VxButtonSearch.vue";

VxButtonSearch.install = (app: App): void => {
  app.component(VxButtonSearch.name, VxButtonSearch);
};

export { VxButtonSearch };
