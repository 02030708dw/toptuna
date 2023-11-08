import {defineComponent} from "vue";
import {useI18n} from "vue-i18n";
import classNames from "classnames";

export default defineComponent({
    props: {
        Index: {
            type: Number,
            required: true
        },
        Arr: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const {t} = useI18n()
        return () => <>
            <div class="content_step">
                <ul class="step_icon">
                    {props.Arr.map((it, i) => <li class={classNames({
                        item:true,
                        take:props.Index===i,
                        active:props.Index===i
                    })}>
                        <p class="icon"><span>{i + 1}</span></p>
                        <span class="txt">{t(`step.${it}`)}</span>
                    </li>)}
                </ul>
            </div>
        </>
    }
})