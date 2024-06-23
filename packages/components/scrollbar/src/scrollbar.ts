import type { PropType } from 'vue'

export const scrollbarProps = {
  tag: {
    type: String,
    default: 'div',
  },
  height: {
    type: String,
    default: '',
  },
  maxHeight: {
    type: String,
    default: '',
  },
  wrapStyle: {
    type: [String, Object, Array] as PropType<string | object>,
    default: '',
  },
  wrapClass: {
    type: [String, Array] as PropType<string | object>,
  },
  viewClass: {
    type: [String, Array] as PropType<string | object>,
  },
  viewStyle: {
    type: [String, Array, Object] as PropType<string | object>,
  },
  id: String,
} as const
