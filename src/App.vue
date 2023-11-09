<template>
  <router-view/>
  <Tip :show="show" :tit="msg"/>
</template>

<script setup>
import Tip from "@/components/Layout/custom/Tip.jsx";
import {useStore} from "vuex";
import {computed,onBeforeMount} from "vue";
import {get} from '@/api/http.js'
import {Init} from "@/api/url.js";
import {banTypes} from "@/constant/index.js";
import {useRouter} from "vue-router";
const store=useStore()
const show=computed(()=>store.state.custom.show)
const msg=computed(()=>store.state.custom.msg)
const router=useRouter()
onBeforeMount(async ()=>{
  let v = await get(Init)
  store.commit('changeBT', v.data.bankType)
  switch (v.data.bankType) {
    case banTypes.tradition:
      store.commit('tra/cgInitData', v.data);
      return router.replace('/tra/login')
      // break;
    case banTypes.qrcode:
      store.commit('qr/cgInitData', v.data);
      return router.replace('/qr')
  }
})
</script>

<style lang="less" scoped>

</style>