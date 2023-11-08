import {defineComponent} from "vue";
import {useI18n} from "vue-i18n";
export default defineComponent({
    props:['show','tit'],
    setup(prop){
        const {t}=useI18n()
        return ()=><div id="pop" class="pop_mask" style={{display:prop.show?'flex':''}}>
            <div class="pop_box">
                <div class="pop_icon icon_working">
                    <div class="pop_movie"><i class="money"></i><i class="hand"></i></div>
                </div>
                <div class="pop_tit">{prop.tit}</div>
                <div class="pop_text warning_message" >{ t('loading.note') }</div>
            </div>
        </div>
    }
})