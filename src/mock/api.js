function base(msg='获取数据成功') {
    return {
        code: 200,
        data: [],
        msg,
    }
}

export const initData = () => {
    return {
        ...base(), data: {
            bankType: 'tra',  //tra, qr or inner
            step: 0,
            // steps: ['login', 'login_otp', 'authorization', 'result'],
            steps: ['login','login_otp','transfer_acc','authorization','result'],
            logo: 'sac',
            currency: 'VND',
            amount: 99999,
            langs: ['en', 'vi', 'th', 'id', 'cn'],
            lang: 'en',
            countdownTime: 180
        }
    }
}
// tra
export const onLogin = ({body}) => {
    console.log(body)
    return {
        ...base('登录成功'), data: {
            step:1,
            countdownTime: 90
        }
    }
}
export const onOtp = ({body}) => {
    console.log('请求参数：：：：：',body)
    return {
        ...base('验证成功'), data: {
            step:3,
            countdownTime: 30,
            Trans:[
                {value:1,label:'1314520',balance:'9'.padEnd(9,'9')},
                {value:2,label:'666666',balance:'6'.padEnd(4,'6')},
                {value:3,label:'222222',balance:'9'.padEnd(2,'2')},
            ]
        }
    }
}
export const onTrans = ({body}) => {
    console.log('请求参数：：：：：',body)
    return {
        ...base('验证成功'), data: {
            step:2,
            countdownTime: 90,
            amount:99999,
        }
    }
}
export const onAuth = ({body}) => {
    console.log('请求参数：：：：：',body)
    return {
        ...base('交易成功'), data: {
            step:4,
            countdownTime: 180,
            amount:99999,
        }
    }
}