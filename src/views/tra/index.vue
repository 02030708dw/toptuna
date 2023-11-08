<script setup>
import {ref,reactive,watch,computed} from "vue";
import {useStore} from "vuex";
import Logo from "@/components/Layout/Logo.vue";
import Lang from "@/components/Layout/Lang.vue";
import Steps from "@/components/Layout/custom/Steps.jsx";
const stepTypeArr=['login','login_otp','transfer_acc','authorization','result']
const stepIndex=ref(0)
const store=useStore()
</script>

<template>
  <div class="drop-area">
    <div class="header">
      <div class="logo"></div>
      <Steps :Arr="stepTypeArr" :Index="stepIndex"/>
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
</style>