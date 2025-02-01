import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/routers/router.js";
import components from "@/components/IU";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);

app.mount("#app");
