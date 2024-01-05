export default {
    namespaced: true,
    actions: {

    },
    state: {
        privacyData:{}
    },
    mutations:{
        cgPrivacy(s,p){
            s.privacyData=p
        }
    }
}