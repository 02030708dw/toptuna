import {useRouter} from "vue-router";
export default function () {
    const router=useRouter()
    const failRouter=(msg)=> {
        router.replace({
            path: '/tra/result',
            query: {
                msg
            }
        })
    }
    const nextRouter=(name,callback)=>{
        router.push({
            name,
            query:callback()
        })
    }
    return {
        failRouter,nextRouter
    }
}