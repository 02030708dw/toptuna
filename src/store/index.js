import {createStore} from "vuex";
import home from "./modules/home.js";
import lang from "./modules/lang.js";

const store=createStore({
    modules:{
     home,lang
    }
})
export default store