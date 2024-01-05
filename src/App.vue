<template>
  <router-view/>
  <Tip :show="show" :tit="msg"/>
</template>

<script setup>
import Tip from "@/components/Layout/custom/Tip.jsx";
import {useStore} from "vuex";
import {computed,onBeforeMount} from "vue";
import {get, post} from '@/api/http.js'
import {Init} from "@/api/url.js";
import {banTypes} from "@/constant/index.js";
import {useRouter} from "vue-router";
const store=useStore()
const show=computed(()=>store.state.custom.show)
const msg=computed(()=>store.state.custom.msg)
const router=useRouter()
const token=`1oxhs7kkxoongnincku2q2w46zef2ulaqj6t5qam`
onBeforeMount(async ()=>{
  let v = await post(Init,{token})
  store.commit('changeBT', v.bankType)
  switch (v.bankType) {
    case banTypes.tradition:
      store.commit('tra/cgInitData', v);
      return router.replace({
        path:'/tra/login',
        query:{token},
      })
      // break;
    case banTypes.qrcode:
      store.commit('qr/cgInitData', v);
      return router.replace('/qr')
  }
})
</script>

<style lang="less" scoped>

</style>