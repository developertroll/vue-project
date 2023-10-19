import { createApp } from "vue";
import App from "./App.vue";

// element plus
import ElementPlus from "element-plus";
import ko from "element-plus/dist/locale/ko.mjs";
import "element-plus/dist/index.css";

//global css
import "@/styles/main.css";
const app = createApp(App);

app.use(ElementPlus, { locale: ko });

app.mount("#app");
