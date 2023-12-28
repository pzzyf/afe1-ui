import type Link from './link.vue'
import type { PropType } from 'vue'

export const linkType = [
  '',
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
] as const

export type LinkType = (typeof linkType)[number]

export const linkProps = {
  type: String as PropType<LinkType>,
  underLine: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type LinkInstance = InstanceType<typeof Link>
