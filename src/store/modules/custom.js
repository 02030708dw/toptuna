export default {
    namespaced: true,
    actions: {

    },
    state: {
        show:false,
        msg:'111111'
    },
    mutations: {
        chStatus(s,i){
            s.show=i
        },
        chMsg(s,i){
            s.msg=i
        },
    },
    getters: {

    }
}