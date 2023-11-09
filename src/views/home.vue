<script setup>
import {ElLoading} from "element-plus";
import {onMounted,watch,computed} from 'vue'
import {useStore} from "vuex";
const store = useStore()
let loading = null
onMounted(() => {
  loading=ElLoading.service({
    lock: true,
    text: 'Loading',
    // background: 'rgba(0, 0, 0, 0.7)',
  })
})
watch(()=>computed(()=>store.state.bankType),(n,i)=>{
  loading.close()
})
</script>

<template>

</template>

<style scoped lang="less">

</style>