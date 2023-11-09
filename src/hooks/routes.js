// import {routes} from '@/router/index.js'
const routes=[
    {p:'login',meta:{step:0}},
    {p:'otp',meta:{step:1}},
    {p:'trans',meta:{step:2}},
    {p:'auth',meta:{step:3}},
    {p:'result',meta:{step:4}},
]
export function getRoute(num) {
    return routes.find(it=>it.meta.step===num).p
}