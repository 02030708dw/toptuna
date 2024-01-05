<template>
  <el-form
      class="base-form-container"
      ref="form"
      :rules="configRules"
      :label-position="config.labelPosition || 'right'"
      :label-width="(config.labelWidth || 80) + 'px'"
      :size="config.size || 'default'"
  >
    <slot name="prefix"></slot>
    <el-form-item
        :prop="!item.value?item.name:''"
        v-for="(item, i) of innerFormItems"
        :key="i"
        :label="$t(item.label)"
        :class="{ 'form-item__require': item.validator || item.required }"
    >
      <el-row style="width: 100%">
        <el-col :span="item.span || 24">
            <el-input
                v-if="item.type === 'input' && !item.hidden"
                v-model="item.value"
                :placeholder="item.placeholder || ''"
                :size="config.size || 'default'"
                clearable
                :disabled="item.disabled || false"
                :type="item.inputType || ''"
                :maxlength="item.maxLength"
                :show-password="item.showPass||false"
                :rows="item.rows || 5"
                class="form-item"
                @keyup="
                item.onChange
                  ? item.onChange(item.value, item.associatedOption || '')
                  : () => {}
              "
            />
            <el-select
                v-else-if="item.type === 'select' && !item.hidden"
                v-model="item.value"
                :placeholder="item.placeholder || '请选择条目'"
                :size="config.size || 'default'"
                :filterable="item.filterable ? true : false"
                clearable
                :disabled="item.disabled || false"
                style="width: 100%"
                class="form-item"
                @change="
                item.onChange
                  ? item.onChange(item.value, item.associatedOption || '')
                  : () => {}
              "
            >
              <el-option
                  v-for="optionItem in item.selectOptions"
                  :key="optionItem.number"
                  :value="optionItem.number"
                  :label="optionItem.balance"
              />
            </el-select>
<!--            <el-date-picker
                v-else-if="item.type === 'date-range' && !item.hidden"
                v-model="item.value"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                class="form-item"
                :disabled="item.disabled || false"
                style="width: 100%"
                :size="config.size || 'default'"
            />
            <el-date-picker
                v-else-if="item.type === 'date' && !item.hidden"
                v-model="item.value"
                type="date"
                :disabled="item.disabled || false"
                range-separator="-"
                :placeholder="item.placeholder || '请选择日期'"
                class="form-item"
                :size="config.size || 'default'"
            />
            <el-date-picker
                v-else-if="item.type === 'datetime' && !item.hidden"
                v-model="item.value"
                type="datetime"
                :disabled="item.disabled || false"
                :placeholder="item.placeholder || '请选择日期'"
                class="form-item"
                :size="config.size || 'default'"
            />
            <el-time-picker
                v-else-if="item.type === 'time' && !item.hidden"
                v-model="item.value"
                arrow-control
                :picker-options="{
                selectableRange: '00:00:00 - 23:59:59',
              }"
                :disabled="item.disabled || false"
                :placeholder="item.placeholder || '请选择时间'"
                class="form-item"
                :size="config.size || 'default'"
            />-->
            <el-radio-group
                v-if="item.type === 'radio-group' && !item.hidden"
                v-model="item.value"
                :disabled="item.disabled || false"
                :size="config.size || 'default'"
                @change="
                item.onChange
                  ? item.onChange(item.value, item.associatedOption || '')
                  : () => {}
              "
            >
              <component
                  :is="item.style === 'button' ? 'el-radio-button' : 'el-radio'"
                  v-for="optionItem of item.radioOptions"
                  :key="optionItem.value"
                  :label="optionItem.value"
              >{{ optionItem.label }}</component>
            </el-radio-group>
            <el-checkbox-group
                v-if="item.type === 'check-group' && !item.hidden"
                v-model="item.value"
                :disabled="item.disabled || false"
                :size="config.size || 'default'"
                @change="
                item.onChange
                  ? item.onChange(item.value, item.associatedOption || '')
                  : () => {}
              "
            >
              <component
                  :is="
                  item.style === 'button' ? 'el-checkbox-button' : 'el-checkbox'
                "
                  v-for="optionItem of item.checkOptions"
                  :key="optionItem.value"
                  :label="optionItem.value"
              >{{ optionItem.label }}</component>
            </el-checkbox-group>
<!--            <el-switch
                v-if="item.type === 'switch' && !item.hidden"
                v-model="item.value"
                :disabled="item.disabled || false"
                :size="config.size || 'default'"
                @change="
                item.onChange
                  ? item.onChange(item.value, item.associatedOption || '')
                  : () => {}
              "
            >
            </el-switch>-->
        </el-col>
      </el-row>
    </el-form-item>
    <slot name="extra"></slot>
  </el-form>
</template>

<script>
import { useForm } from "@/hooks";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  watch,
} from "vue";
export default defineComponent({
  name: "BaseForm",
  props: {
    configRules:{
      type:Object,
    },
    config: {
      type: Object,
      default: () => {
        return {
          size: "default",
          labelWidth: "80",
          labelPosition: "right",
        };
      },
    },
    formItems: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props, { expose }) {
    const { checkParams, resetParams, generatorParams } = useForm();
    const innerFormItems = computed(() => {
      return props.formItems;
    });
    function mCheckParams() {
      return checkParams(innerFormItems.value);
    }
    function mResetParams() {
      return resetParams(innerFormItems.value);
    }
    function mGeneratorParams() {
      return generatorParams(innerFormItems.value);
    }
    expose({
      checkParams: mCheckParams,
      resetParams: mResetParams,
      generatorParams: mGeneratorParams,
    });
    return {
      innerFormItems,
    };
  },
});
</script>
<style lang="less" scoped>
.form-item {
  width: 100%;
}
/*.el-form-item{
  &.form-item__require::before {
    content: "*";
    color: var(--el-color-danger);
    margin-right: 4px;
  }
}*/
</style>
