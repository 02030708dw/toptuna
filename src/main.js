import { createApp } from 'vue'
import './style.css'
import "@/style/css/default/view/new_layout.css"
import "@/style/css/default/view/style_01.css"
import "@/style/css/app.css"
import App from './App.vue'
import store from "@/store";
import router from "@/router/guard.js";
import i18n from "@/tools/lang";
import 'element-plus/dist/index.css'
import {
    ElButton, ElInput, ElSelect,
    ElRadioGroup, ElCheckboxGroup, ElForm, ElFormItem,
    ElCol, ElRow, ElMessageBox
} from 'element-plus'

const app=createApp(App)
app.use(ElButton).use(ElInput).use(ElSelect)
    .use(ElRadioGroup).use(ElCheckboxGroup)
    .use(ElForm).use(ElFormItem).use(ElRow)
    .use(ElCol).use(ElMessageBox)

app.use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
