import { App } from "vue";
import { VxButtonSearch } from "./button";

const components = [VxButtonSearch];

const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { VxButtonSearch };

export default {
  install,
};
