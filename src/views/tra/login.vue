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
const priceProps=reactive({
  currency:'VND',
  amount: "99999",
})
</script>

<template>
  <div class="form">
    <div class="form_style">
      <div class="item deposit">
        <div class="item_tit">{{ $t("login.deposit") }}</div>
        <div class="item_txt">
          {{ priceProps.currency }}<span class="num">{{ priceProps.amount }}</span>
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
    <Alarm :start-time="5" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">

</style>