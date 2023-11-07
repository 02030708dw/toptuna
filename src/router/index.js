import {createRouter, createWebHistory} from "vue-router";
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login.vue')
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export {
    router
}