import {defineComponent} from "vue";
export default defineComponent({
    emits:['btn'],
    setup(props,{emit,slots}){
        return ()=><>
        <div class="btn_block"  style="margin-bottom: 30px">
            <el-button class="btn" onClick={()=>emit('btn')} type="success">{slots.default?.()}</el-button>
        </div>
        </>
    }
})