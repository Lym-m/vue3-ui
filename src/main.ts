import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VxUi from "../packages";

const app = createApp(App);
app.use(Antd);
app.use(store);
app.use(router);
app.use(VxUi);
app.mount("#app");
