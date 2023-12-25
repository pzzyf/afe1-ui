import { UPDATE_MODEL_EVENT } from '@afe1-ui/constants'
import { isString } from '@afe1-ui/utils'
import type { PropType } from 'vue'

export const inputProps = {
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  disabled: Boolean,
  readonly: {
    type: Boolean,
    default: false,
  },
} as const

export const inputEmit = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
}
