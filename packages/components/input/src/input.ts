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
  readonly: Boolean,
  clearable: {
    type: Boolean,
    default: false,
  },
} as const

export const inputEmit = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  clear: () => true,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
