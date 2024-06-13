import type { PropType } from 'vue'
import type { ComponentSize } from '@afe1-ui/constants/size'

export const textTypes = [
  '',
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
] as const

export type TextTypes = (typeof textTypes)[number]

export const textProps = {
  type: {
    type: String as PropType<TextTypes>,
    default: '',
  },
  tag: {
    type: String,
    default: 'span',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default',
  },
} as const
