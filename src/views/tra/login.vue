<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {useLikeSearch} from "@/hooks/index.js";
import {useRoute, useRouter} from "vue-router";
import {post} from "@/api/http.js";
import {login, loginInterval} from "@/api/url.js";
import useMapState from "@/hooks/store/useMapState.js";
import {useStore} from "vuex";
import {getRoute} from "@/hooks/routes.js";
import {checkHeart} from "@/utils/check.js";
import useRouteF from "@/hooks/useRouteF.js";
import useRouterClose from "@/hooks/useRouterClose.js";
const {t,locale}=useI18n()
const router=useRouter()
const {token}=useRouteF()
const store=useStore()
const {failRouter,nextRouter}=useRouterClose()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "form.username",
    type: "input",
    name: "username",
    value: "",
    maxLength: 50,
    inputType: "text",
    span:20,
  },
  {
    label: "form.password",
    type: "input",
    name: "password",
    value: "",
    maxLength: 50,
    inputType: "password",
    span:20,
    showPass:true
  },
].map(it=>({...it,validator: ({ value = "", placeholder = "" }) => {
    if (!value) {
      ElMessage.error(t("result.field_required"));
      return false;
    }
    return true;
  },})));
const rules={
  username: [
    { required: true, message: t("result.field_required"), trigger: "blur" },
  ],
  password: [
    { required: true, message: t("result.field_required"), trigger: "blur" },
  ],
}
const onSubmit = () => {
  if (baseForm.value.checkParams()){
    post(login, {...getSearchParams(),token}).catch(r=>failRouter(r.message))
    checkHeart(loginInterval,token).then(v=>{
     store.commit('privacy/cgPrivacy',{accountBalance:v.accountBalance})
     nextRouter(getRoute(v.step),()=>({
       token,
       countdownTime:v.countdownTime
     }))
    }).catch(r=>{
      console.log(r)
    })
   /* Promise.all([post(login, {...getSearchParams(),token}),
      checkHeart(loginInterval,token)]).then(v=>{
      router.push({name:getRoute(v[1].step),query:{
          token,
        countdownTime:v[1].countdownTime,
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
  labelWidth: 220,
  size: "default",
  labelPosition: "right",
}
const {amount,currency,countdownTime}=useMapState('tra',{
  amount:s=>s.amount,
  currency:s=>s.initData.currency,
  countdownTime:s=>+s.countdownTime
})
</script>

<template>
  <div class="form">
    <div class="form_style">
      <div class="item deposit">
        <div class="item_tit">{{ $t("login.deposit") }}</div>
        <div class="item_txt">
          {{ currency }}<span class="num">{{ amount }}</span>
        </div>
      </div>
      <BaseForm
          ref="baseForm"
          :configRules="rules"
          :form-items="likeSearchModel.conditionItems"
          :config="formConfig"
      />
    </div>
  </div>
  <div class="footer">
    <Button @btn="onSubmit">{{$t('btn.confirm')}}</Button>
    <Alarm :start-time="countdownTime" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>