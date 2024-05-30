import { mutable } from '@afe1-ui/utils/typescript'

export const uploadListProps = {
  files: {
    type: Array,
    default: () => mutable([]),
  },
} as const
