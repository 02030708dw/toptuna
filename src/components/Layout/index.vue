<script setup>
import {ref,reactive,watch,computed} from "vue";
import {useStore} from "vuex";
import Logo from "@/components/Layout/Logo.vue";
import Lang from "@/components/Layout/Lang.vue";
import Steps from "@/components/Layout/custom/Steps.jsx";
import {useLikeSearch} from "@/hooks/index.js";
import {useI18n} from "vue-i18n";
import {ElMessage} from "element-plus";
import Button from "@/components/Layout/common/Button.jsx";
import Alarm from "@/components/Layout/common/Alarm.jsx";
import useMapState from "@/hooks/store/useMapState.js";
const store=useStore()
// const stepTypeArr=['login','login_otp','transfer_acc','authorization','result']
const sData=useMapState({
  stepTypeArr:s=>s.initData.steps,
  currency:s=>s.currency,
  amount:s=>s.amount
})
const stepIndex=ref(0)
const {getSearchParams, likeSearchModel} = useLikeSearch();
/*const priceProps=reactive({
  currency:'VND',
  amount: "99999",
})*/
const baseForm = ref();
const {t,locale}=useI18n()
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
    console.log(getSearchParams())
  }
}
const formConfig={
  labelWidth: 220,
  size: "default",
  labelPosition: "right",
}
</script>

<template>
  <div class="drop-area">
  <div class="header">
    <div class="logo"></div>
    <Steps :Arr="sData.stepTypeArr" :Index="stepIndex"/>
  </div>
    <div class="content">
      <Lang/>
      <Logo/>
      <div class="form">
        <div class="form_style">
        <div class="item deposit">
          <div class="item_tit">{{ $t("login.deposit") }}</div>
          <div class="item_txt">
            {{ sData.currency }}<span class="num">{{ sData.amount }}</span>
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
        <Alarm :start-time="5" @time-end="args => {
          console.log(1111111)
        }"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.form{
  display: grid;
  place-items: center;
  form{
    width: 100%;
  }
}
</style>