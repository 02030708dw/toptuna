export default function() {
    function checkParams(innerFormItems) {
        return innerFormItems.every(it => {
            return it.validator ? it.validator(it,
                innerFormItems.find((item) => it.associatedOption === item.name)) : true
        })
    }
    function generatorParams(innerFormItems) {
        if (innerFormItems && innerFormItems.length !== 0) {
            return innerFormItems.reduce((pre, cur) => {
                pre[cur.name] = cur.value
                return pre
            }, {})
        }
        return {}
    }
    function resetParams(innerFormItems) {
        innerFormItems.forEach(it => {
            it.reset ? it.reset() : (it.value = '')
        })
    }
    return {
        checkParams,
        generatorParams,
        resetParams
    }
}