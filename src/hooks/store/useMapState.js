import { computed } from "vue";
import { useStore, mapState, createNamespacedHelpers } from "vuex";
export default (nameSpace,mapper) => {
    let mapObj = null;
    const computedObj = {};
    const currentStore = useStore();
    if(nameSpace && typeof nameSpace === 'string') {
        mapObj = createNamespacedHelpers(nameSpace).mapState(mapper)
    }else {
        mapper = nameSpace;
        mapObj = mapState(mapper);
    }
    Object.keys(mapObj).forEach(key =>{
        computedObj[key] =  computed(mapObj[key].bind({$store: currentStore}))
    })
    return computedObj
}