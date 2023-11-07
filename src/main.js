import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "@/store";
import router from "@/router/guard.js";
import i18n from "@/tools/lang";
const app=createApp(App)
app.use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
