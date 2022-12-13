import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from 'vue-axios'
import VirtualList from 'vue3-virtual-scroll-list'

// axios.defaults.baseURL = 'http://localhost:8080/'

createApp(App).use(store).use(router).use(VueAxios, axios).use('virtual-list',VirtualList).mount('#app')
