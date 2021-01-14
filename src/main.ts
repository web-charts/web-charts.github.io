import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import directives from "./plugins/directives";
import router from "./plugins/router";

const app = createApp(App);

app.use(i18n)
  .use(router)
  .use(directives)
  .mount("#app");
