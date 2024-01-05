import {http} from './service.js'
export const get=(url,data)=>{
    return http({
        url,
        data,
    })
}
export const post=(url,data)=>{
    return http({
        url,
        data,
        method:'POST'
    })
}
export const postH=(url,data)=>{
    return http({
        url,
        data,
        time:3000,
        method:'POST'
    })
}
