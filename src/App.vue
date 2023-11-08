<template>
  <router-view/>
  <Tip :show="show" :tit="msg"/>
</template>

<script setup>
import Tip from "@/components/Layout/custom/Tip.jsx";
import {useStore} from "vuex";
import {computed} from "vue";
const store=useStore()
const show=computed(()=>store.state.custom.show)
const msg=computed(()=>store.state.custom.msg)
</script>

<style lang="less" scoped>

</style>