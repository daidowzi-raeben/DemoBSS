import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vuex
import store from '../store'

// axios
import axios from 'axios';

// ag-grid
import { AgGridVue } from "ag-grid-vue3";

// bootstrap
import { BootstrapVue } from 'bootstrap'

// 전역 scss list
import './config/scssList'

const app = createApp(App)
app.use(store)
app.use(router, axios, AgGridVue, BootstrapVue)
app.mount('#app')
