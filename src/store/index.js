import {createStore} from "vuex";
import home from "@/store/modules/home.js";

const store=createStore({
    modules:{
     home
    }
})
export default store