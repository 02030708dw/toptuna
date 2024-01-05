<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import Logo from "@/components/Layout/Logo.vue";
import Lang from "@/components/Layout/Lang.vue";
import Steps from "@/components/Layout/custom/Steps.jsx";
import {useRoute} from "vue-router";
import useMapState from "@/hooks/store/useMapState.js";
// const stepTypeArr=['login','login_otp','transfer_acc','authorization','result']
const route=useRoute()
/*onBeforeMount(()=>{
  route.meta.total=stepTypeArrTra.length
})*/
const store=useStore()
const {logo,langs,lang}=useMapState('tra',{
  logo:s=>s.initData.logo,
  langs:s=>s.initData.langs,
  lang:s=>s.initData.lang,
})
const stepTypeArrTra=computed(()=>store.state.tra.initData.steps)
const stepIndex=computed(()=>route.meta.index)
</script>

<template>
  <div class="drop-area">
    <div class="header">
      <div class="logo"></div>
      <Steps :Arr="stepTypeArrTra" :Index="stepIndex"/>
    </div>
    <div class="content">
      <Lang :lang="lang" :langs="langs"/>
      <Logo :logo="logo.toLocaleLowerCase()"/>
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