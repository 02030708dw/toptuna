import {createStore} from "vuex";
import custom from "./modules/custom.js";
import lang from "./modules/lang.js";
import type from "@/store/modules/type.js";
import tra from "@/store/modules/tra.js";
import qr from "@/store/modules/qr.js";
import privacy from "@/store/modules/private.js";

const store=createStore({
    actions:{

    },
    state:{
        bankType:'' // qr or inner
    },
    mutations:{
        changeBT(s,i){
            s.bankType=i
        }
    },
    modules:{
     custom,lang,type,tra,qr,privacy
    }
})
export default store