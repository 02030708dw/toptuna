import {
    ElButton, ElInput, ElSelect,
    ElRadioGroup, ElCheckboxGroup, ElForm, ElFormItem,
    ElCol, ElRow, ElMessageBox
} from 'element-plus'
const components=[
    ElButton, ElInput, ElSelect,
    ElRadioGroup, ElCheckboxGroup, ElForm, ElFormItem,
    ElCol, ElRow, ElMessageBox
]
export function registerElement(app) { //导出一个函数，遍历数组，批量注册组件
    for (const component of components) {
        app.component(component.name, component); //全局注册组件
    }
}