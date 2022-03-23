import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import i18n from "./config/i18n";

const app = createApp(App);

app.use(i18n);
app.use(store, key);

app.use(router).mount("#app");
