import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VirtualList from "vue3-virtual-scroll-list";


// cors 이슈에 대응하는 방법 1)
// 참고 : https://rkaehdaos.github.io/dev/frontend/Vue-js/vue-use-proxy/
// axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use("virtual-list", VirtualList)
  .mount("#app");
