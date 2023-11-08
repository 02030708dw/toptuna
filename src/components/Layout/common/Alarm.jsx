import {defineComponent,onUnmounted, onMounted, ref} from "vue";

export default defineComponent({
    props: {
        startTime: {
            type: Number,
            default: 300
        },
        msg:{
            type:String
        }
    },
    emits:['timeEnd'],
    setup(prop, {emit}) {
        let time = ref(prop.startTime)
        let timer = null
        onMounted(() => {
            timer = setInterval(() => {
                time.value -= 1
                if (time.value <= 0) {
                    emit('timeEnd')
                    clearTimeout(timer)
                }
            }, 1000)
        })
        onUnmounted(()=>{
            clearTimeout(timer)
        })
        return () => <>
            <div class="countdown_block">
                <p class="countdown_message">{prop.msg}<span id="countdown_time"
                                                   class="warning_message fw_b">{time.value}</span></p>
            </div>
        </>
    }
})