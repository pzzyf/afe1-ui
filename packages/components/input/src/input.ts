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
  minlength: [String, Number] as PropType<string | number>,
  maxlength: [String, Number] as PropType<string | number>,
  autocomplete: String,
  tabindex: [String, Number] as PropType<string | number>,
  label: String,
  autofocus: Boolean,
  prefixIcon: [String, Object, Function] as PropType<string | object>,
} as const

export const inputEmit = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  clear: () => true,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
