import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@afe1-ui/constants'
import { isBoolean, isNumber, isString } from '@afe1-ui/utils'
import type { PropType } from 'vue'

export const switchProps = {
  modelValue: [Boolean, String, Number] as PropType<boolean | string | number>,
  inlinePrompt: Boolean,
  inactiveIcon: Object,
  inactiveText: String,
  inactiveValue: [Boolean, String, Number] as PropType<
    boolean | string | number
  >,
  activeIcon: Object,
  activeText: String,
  activeValue: [Boolean, String, Number] as PropType<boolean | string | number>,
  loading: Boolean,
  activeActionIcon: Object,
  inactiveActionIcon: Object,
  label: String,
  name: String,
  tabindex: [String, Number] as PropType<string | number>,
  value: [Boolean, String, Number] as PropType<boolean | string | number>,
}

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val: boolean | string | number) =>
    isBoolean(val) || isString(val) || isNumber(val),
}
