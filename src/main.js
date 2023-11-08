import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
// element plus
import ElementPlus from "element-plus";
import ko from "element-plus/dist/locale/ko.mjs";
import "element-plus/dist/index.css";

//global css
import "@/styles/main.css";
const app = createApp(App);
app.use(VueCookies, {
  expireTimes: "14d",
  secure: true,
});
app.use(ElementPlus, { locale: ko });
// app.config.globalProperties.JobList = [
//   "개발자",
//   "디자이너",
//   "기획자",
//   "마케터",
//   "기타",
// ];
app.mount("#app");
