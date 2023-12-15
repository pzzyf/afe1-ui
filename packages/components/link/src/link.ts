export const linkProps = {
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default',
  },
  underLine: {
    type: Boolean,
    default: true,
  },
} as const
