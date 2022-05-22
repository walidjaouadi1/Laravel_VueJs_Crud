require("./bootstrap");
import { createApp } from "vue";
import router from "./router/routes.js";
import app from "./app.vue";

createApp(app).use(router).mount("#app");
