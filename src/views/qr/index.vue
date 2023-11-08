<script setup>
import {onBeforeMount} from 'vue'
import logo from '@/assets/images/vnpay/momo.png'
import Button from "@/components/Layout/common/Button.jsx";
import Alarm from "@/components/Layout/common/Alarm.jsx";
import {useI18n} from "vue-i18n";
import {get} from "@/api/http.js";
const {locale}=useI18n()
const onClose = () => {

}
onBeforeMount(()=>{
  locale.value='vi'
})
const onTest = () => {

}
</script>

<template>
  <div class="header">
    <div class="logo"></div>
  </div>
  <div class="qrpay_content">
    <div class="pay_logo"><img :src=logo alt="logo"></div>
    <div class="qr_box vn_pay">
      <div class="qr_info">
        <div class="item deposit">
          <div class="item_tit">{{$t('login.deposit')}}</div>
          <div class="item_txt">VND<span class="num">13,000</span></div>
        </div>
        <div class="item">
          <div class="item_tit">{{$t('form.Remark')}}</div>
          <div class="item_txt">96888<span class="icon_copy" onclick="copyText(this,'96888')"><i i18n="COPIED">{{$t('COPIED')}}</i></span></div>
        </div>
        <div class="item warning_message no_line">Vui lòng điền chính xác nội dung trên vào phần tin nhắn</div>
        <div class="item">
          <div class="item_tit"><span>{{$t('form.orderId')}}</span></div>
<!--          copyText(this,'TEST-BAY-Deposit-80808787')-->
          <div class="item_txt">TEST-BAY-Deposit-80808787<span class="icon_copy" @click="onTest"><i i18n="COPIED">Đã sao chép</i></span></div>
        </div>
        <div class="qr_img">
          <div class="qrcode_mask">
            <p class="qr_name">WORK789779</p>
            <p id="qrcode" class="pic" title=""><canvas></canvas><img alt="Scan me!" style="display: none;"></p>
          </div>
          <div class="qrinfo_message">
            <a id="qrDownload" class="qr_download" href="" download="TEST-BAY-Deposit-80808787_qrCode">{{$t('qr.download')}}</a>
            <div>{{$t('form.qr_code_once')}}</div>
          </div>
        </div>
        <div class="item no_line margin_t_1">
          <div class="item_tit">GHI CHÚ QUAN TRỌNG</div>
          <div class="item_txt fz_14">
            <p class="padding_b_05">1. Để tiền được cập nhật nhanh chóng, quý khách vui lòng điền chính xác mã hiển thị có 5 chữ số ở bên trái.</p>
            <p class="padding_b_05">2. Không được điền thêm bất kỳ chữ cái hoặc ký tự nào ngoài 5 chữ số có sẵn.</p>
            <p class="padding_b_05">3. Không được sửa đổi số tiền.</p>
            <p>4. Quý khách có thể thanh toán qua mã QR hoặc chuyển tiền qua số điện thoại trên</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer qr_footer no_mar_t">
      <Button @btn="onClose">{{$t('btn.close')}}</Button>
      <Alarm msg="THỜI GIAN THANH TOÁN CÒN LẠI " :start-time="120" @time-end="args => {

        }"/>
    </div>
  </div>
</template>

<style
} scoped lang="less">

</style>