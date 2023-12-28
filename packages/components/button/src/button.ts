// import { buildProps } from '@afe1-ui/utils'
import type { PropType } from 'vue'
import type { ComponentSize } from '@afe1-ui/constants/size'

export const buttonTypes = [
  '',
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
] as const

export type ButtonTypes = (typeof buttonTypes)[number]

export const buttonProps = {
  /**
   * @description button type
   */
  type: String as PropType<ButtonTypes>,
  size: String as PropType<ComponentSize>,
} as const
