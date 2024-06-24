import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/base.css";

const app = createApp(App);

app.use(router);
app.use(bootstrap);

app.mount("#app");
