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
  underline: Boolean,
  disabled: Boolean,
  href: String,
  icon: Object,
} as const

export const linkEmit = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type LinkInstance = InstanceType<typeof Link>
