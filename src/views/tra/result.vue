<script setup>

import Button from "@/components/Layout/common/Button.jsx";
const onClose = () => {

}
</script>

<template>
  <h1 class="page_title result_title">{{$t('step.result')}}</h1>
  <div class="form_status">
    <div class="icon_status icon_error"></div>
    <div class="error_message padding_b_05">{{$t('result.failed')}}</div>
    <div class="gray_message">
      <p id="xy_code">TimeOut.</p>
    </div>
  </div>
  <div class="foot">
    <Button @btn="onClose">{{$t('btn.close')}}</Button>
  </div>
</template>

<style scoped lang="less">

</style>