// import { buildProps } from '@afe1-ui/utils'
import type { PropType } from 'vue'
import type { ComponentSize } from '@afe1-ui/constants/size'

export type ButtonTypes =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'text'
  | ''

export const buttonProps = {
  type: String as PropType<ButtonTypes>,
  size: String as PropType<ComponentSize>,
} as const
