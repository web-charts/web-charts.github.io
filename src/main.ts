import { createApp } from "vue";
import App from "./views/Layout/index.vue";
import directives from "./plugins/directives";
import router from "./plugins/router";

createApp(App)
  .use(directives)
  .use(router)
  .mount("#app");
