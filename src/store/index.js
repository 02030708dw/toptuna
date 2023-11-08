import {createStore} from "vuex";
import custom from "./modules/custom.js";
import lang from "./modules/lang.js";

const store=createStore({
    modules:{
     custom,lang
    }
})
export default store