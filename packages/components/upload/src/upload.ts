import { definePropType, mutable } from '@afe1-ui/utils'

export const uploadBaseProps = {
  fileList: {
    type: definePropType(Array),
    default: () => mutable([] as const),
  },
} as const

export const uploadProps = {
  ...uploadBaseProps,
} as const
