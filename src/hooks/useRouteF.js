import {useRoute} from "vue-router";
export default function (arr=['token']) {
    const route=useRoute()
    return Object.keys(route.query).reduce((pre,cur)=>{
        pre[cur]=route.query[cur]
        return pre
    },{})
}