import {createRouter, createWebHistory} from "vue-router";
const routes=[
    {
        path:'/',
        redirect:'/tra'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue')
    },
    {
        path:'/tra',
        name:'tra',
        component:()=>import('@/views/tra/index.vue'),
        redirect:'/tra/login',
        children:[
            {
                path:'login',
                name:'login',
                component:()=>import('@/views/tra/login.vue')
            },
            {
                path:'result',
                name:'result',
                component:()=>import('@/views/tra/result.vue')
            },
        ]
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export {
    router
}