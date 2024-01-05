import axios from 'axios';
import {ElMessage, ElLoading, ElMessageBox} from 'element-plus';
import {h} from 'vue'
import store from "@/store/index.js";
import {login, otp} from "@/api/url.js";
const timeout=29000
const sendWhiteList=[login,otp]
const service = axios.create({
    baseURL: import.meta.env.VITE_URL+'/toptuna',
    timeout,
    // headers:{'Content-Type':'application/json;charset=utf-8'}
})
const showLoading = () => {
    store.commit('custom/chStatus',true)
}
const hideLoading = () => {
    store.commit('custom/chStatus',false)
}
service.interceptors.request.use(config => {
    showLoading()
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(response => {
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error(response.status)
        }
    },
    error => {
        // hideLoading()
        if (process.env.NODE_ENV === 'development') {
            console.log(error)
        }
        // console.log(error.response)
        return Promise.reject({ code: 500, msg: '服务器异常，请稍后重试…' })
})
export function http({url,data,method='get',headers,time=timeout,beforeRequest,afterRequest}){
    const successHandler = res => {
        if (res.resCode === '000000') {
            if (!sendWhiteList.includes(url)) hideLoading()
            return res.data
        }
        else if(res.resCode==='000108'){
            throw new Error(res.resCode)
        }
        throw new Error(res.resDesc || '请求失败，未知异常')
    }
    const failHandler = error => {
        afterRequest && afterRequest()
        throw new Error(error.msg || '请求失败，未知异常')
    }
    beforeRequest && beforeRequest()
    return method === 'GET' ? service.get(url, {params: data}).then(successHandler, failHandler) :
        method === 'POST' ?
            service.post(url, data, {headers,timeout:time}).then(successHandler, failHandler) :
            service.put(url, data, {headers}).then(successHandler, failHandler)
}
export default service;
