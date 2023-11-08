<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {useLikeSearch} from "@/hooks/index.js";
const {t,locale}=useI18n()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "form.bank",
    type: "input",
    name: "username",
    value: "",
    maxLength: 50,
    inputType: "text",
    span:20,
  },
  {
    label: "form.amount",
    type: "input",
    name: "password",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },{
    label: "form.clew",
    type: "input",
    name: "password",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },{
    label: "ref.VTB",
    type: "input",
    name: "password",
    value: "",
    maxLength: 50,
    span:20,
    showPass:true
  },
].map(it=>({...it,disabled:true,validator: ({ value = "", placeholder = "" }) => {
    if (!value) {
      ElMessage.error(t("result.field_required"));
      return false;
    }
    return true;
  },})));
const onSubmit = () => {
  if (baseForm.value.checkParams()){
    console.log(getSearchParams())
  }
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
          <span>{{$t('smartnote.info1')}} </span> DFH48HS <span>{{$t('smartnote.info2')}}</span>
        </div>

        <div class="smartnote-info-2" i18n="smartnote.info3"> </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <Button @btn="onSubmit">{{$t('btn.confirm')}}</Button>
    <Alarm :start-time="11110" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>