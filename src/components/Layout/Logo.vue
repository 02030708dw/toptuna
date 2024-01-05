<script setup>
// import logo from '@/assets/images/sac/logo.png'
import {getSrc} from "@/utils/image.js";
defineProps({
  logo:{type:String,default:'sac'}
})
console.log(getSrc('asc'))
</script>

<template>
  <div class="bank_logo">
    <img
        :src="getSrc(logo)"
        width="200"
        height="80"
        alt="logo"
    />
  </div>
</template>

<style scoped lang="less">

</style>