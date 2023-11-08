<script setup>
import {onBeforeMount,computed} from "vue";
import {useStore} from "vuex";
import Logo from "@/components/Layout/Logo.vue";
import Lang from "@/components/Layout/Lang.vue";
import Steps from "@/components/Layout/custom/Steps.jsx";
import {useRoute} from "vue-router";
// const stepTypeArr=['login','login_otp','transfer_acc','authorization','result']
const stepTypeArrTra=['login','login_otp','authorization','result']
const route=useRoute()
/*onBeforeMount(()=>{
  route.meta.total=stepTypeArrTra.length
})*/
const stepIndex=computed(()=>route.meta.index)
const store=useStore()
</script>

<template>
  <div class="drop-area">
    <div class="header">
      <div class="logo"></div>
      <Steps :Arr="stepTypeArrTra" :Index="stepIndex"/>
    </div>
    <div class="content">
      <Lang/>
      <Logo/>
      <router-view/>
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
.content:deep(.foot){
  padding-top: 1.5em;
  padding-bottom: 2em;
}
</style>