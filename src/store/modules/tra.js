export default {
    namespaced: true,
    actions: {
        async getInitData(){

        }
    },
    state: {
        step:0,
        countdownTime:360,
        amount:'00.00',
        initData:{
            steps:['login','login_otp','authorization','result'],
            logo:'sac',
            currency:'VND',
            langs:['en','vi','th','id','cn'],
            lang:'en',
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