<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref} from "vue";
import {useLikeSearch} from "@/hooks/index.js";
import {useRouter} from 'vue-router'
import {post} from "@/api/http.js";
import {trans} from "@/api/url.js";
import {getRoute} from "@/hooks/routes.js";
const {t,locale}=useI18n()
const router=useRouter()
const baseForm = ref();
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "form.bank",
    type: "select",
    name: "bank",
    value: "",
    maxLength: 50,
    span:20,
    selectOptions:[
      {value:1,label:'1314520',balance:'9'.padEnd(9,'9')},
      {value:2,label:'666666',balance:'6'.padEnd(4,'6')},
      {value:3,label:'222222',balance:'9'.padEnd(2,'2')},
    ]
  },
]);
const onSubmit = () => {
  post(trans,getSearchParams()).then(v=>{
    console.log(v.data)
    router.push({name:getRoute(v.data.step)})
  }).catch(r=>{
    router.replace({name:getRoute(4)})
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
  <h1 class="page_title">{{$t('title.transfer_acc')}}</h1>
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
    <Alarm :start-time="60" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>