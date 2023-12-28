import { buildProps } from '@afe1-ui/utils'
import type { PropType } from 'vue'

export type buttonTypes =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export const buttonProps = buildProps({
  type: String as PropType<buttonTypes>,
} as const)
