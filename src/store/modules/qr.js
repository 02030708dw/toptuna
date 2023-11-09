export default {
    namespaced: true,
    actions: {
        async getInitData(){

        }
    },
    state: {
        step:0,
        countdownTime:180,
        amount:'00.00',
        initData:{
            logo:'sac',
            currency:'VND',
            lang:'en',
            codeUrl:''
        }
    },
    mutations: {
        cgInitData(s,i){
            s.step=i.step||0
            s.countdownTime=i.countdownTime||0
            s.initData=i
        }
    },
    getters: {

    }
}