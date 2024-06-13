import type { PropType } from 'vue'

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
} as const
