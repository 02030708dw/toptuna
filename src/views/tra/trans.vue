<script setup>
import Alarm from "@/components/Layout/common/Alarm.jsx";
import Button from "@/components/Layout/common/Button.jsx";
import {useI18n} from "vue-i18n";
import {reactive, ref,computed} from "vue";
import {useLikeSearch} from "@/hooks/index.js";
import {useRoute, useRouter} from 'vue-router'
import {post} from "@/api/http.js";
import {sendTransactionCard, trans} from "@/api/url.js";
import {getRoute} from "@/hooks/routes.js";
import {useStore} from "vuex";
const {t,locale}=useI18n()
const router=useRouter()
const route=useRoute()
const baseForm = ref();
const store=useStore()
const {getSearchParams, likeSearchModel} = useLikeSearch();
likeSearchModel.conditionItems = reactive([
  {
    label: "form.bank",
    type: "select",
    name: "transId",
    value: "",
    maxLength: 50,
    span:20,
    selectOptions:computed(()=>store.state.privacy.privacyData.accountBalance).value
  },
]);
const onSubmit = () => {
  post(sendTransactionCard,getSearchParams()).then(v=>{
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
    <Alarm :start-time="Number(route.query.countdownTime)" @time-end="args => $router.replace('/tra/result')"/>
  </div>
</template>

<style scoped lang="less">
/*root:deep(.btn_block){
  margin-bottom: 10px !important;
}*/
</style>