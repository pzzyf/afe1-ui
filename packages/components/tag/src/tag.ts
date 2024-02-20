import type { PropType } from 'vue'

export const tagTypes = [
  '',
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
] as const

export type TagTypes = (typeof tagTypes)[number]

export const tagProps = {
  type: String as PropType<TagTypes>,
}
