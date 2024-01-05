import {post} from "@/api/http.js";
function checkHeart(url,token) {
    return new Promise((resolve) => {
        post(url, {token}).then(v=>{
            return resolve(v)
        }).catch(r=>{
            // if(r.code === 'ECONNABORTED' || r.message === "Network Error" || r.message.includes("timeout")) {
            if(r.message==='000108') {
                setTimeout(() => checkHeart(url,token), 3000)
            }else throw r
        })
    })
}
export {
    checkHeart
}