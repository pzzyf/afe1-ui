export const inputProps = {
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  disabled: Boolean,
  readonly: {
    type: Boolean,
    default: false,
  },
} as const
