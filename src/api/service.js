import axios from 'axios';
import {ElMessage, ElLoading, ElMessageBox} from 'element-plus';
import {h} from 'vue'
import store from "@/store/index.js";
// 创建axios实例
const service = axios.create({
    // 服务接口请求
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时设置
    timeout: 5000,
    // headers:{'Content-Type':'application/json;charset=utf-8'}
})
/*let loading;
//正在请求的数量
let requestCount = 0
//显示loading*/
const showLoading = () => {
    /*if (requestCount === 0 && !loading) {
        loading = ElMessageBox({
            showConfirmButton:false,
            showClose:false,
            title: 'Message',
            message: h('p', null, [
                h('span', null, 'Message can be '),
                h('i', { style: 'color: teal' }, 'VNode'),
            ]),
        })
    }
    requestCount++;*/
    store.commit('custom/chStatus',true)
}
//隐藏loading
const hideLoading = () => {
   /* requestCount--
    if (requestCount === 0) {
        // loading.close()
    }*/
    store.commit('custom/chStatus',false)
}
service.interceptors.request.use(config => {
    showLoading()
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(res => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(res.data);hideLoading()},1000)
    })
}, error => {
    hideLoading()
    if (error.message === "timeout of 5000ms exceeded") {
        ElMessage.error("请求超时！")
        return Promise.reject(error)
    }
    if (error.response.status === 404) {
        ElMessage.error("找不到请求接口")
        return Promise.reject(error)
    }
})
export default service;
