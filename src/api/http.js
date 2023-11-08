import request from './service.js'
export const get=(url)=>{
    return request.get(url)
}
export const post=(url)=>{
    return request.post(url)
}
