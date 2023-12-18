import type { ExtractPropTypes, PropType } from 'vue'
import type Icon from './icon.vue'

export const iconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>
