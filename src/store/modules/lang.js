import {getStorage} from "@/utils/storage.js";

export default {
    namespaced: true,
    actions: {

    },
    state: {
        langStr:localStorage.getItem('selectedLanguage')
    },
    mutations: {
        changeStr(s,i){
            s.langStr=i
        }
    },
    getters: {

    }
}