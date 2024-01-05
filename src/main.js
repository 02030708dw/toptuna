import { createApp } from 'vue'
import './style.css'
import "@/style/css/default/view/new_layout.css"
import "@/style/css/default/view/style_01.css"
import "@/style/css/app.css"
import App from './App.vue'
import store from "@/store";
import router from "@/router/guard.js";
import i18n from "@/tools/lang";
// import '@/mock'
import {registerElement} from "@/plugins.js";
import 'element-plus/dist/index.css'
const app=createApp(App)
registerElement(app)
app.use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
