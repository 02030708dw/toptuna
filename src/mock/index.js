import Mock from 'mockjs'
import {auth, Init, login, otp, trans} from "@/api/url.js";
import {initData, onAuth, onLogin, onOtp, onTrans} from "@/mock/api.js";

Mock.mock(Init,initData())
Mock.mock(login,'post',onLogin)
Mock.mock(otp,'post',onOtp)
Mock.mock(trans,'post',onTrans)
Mock.mock(auth,'post',onAuth)

