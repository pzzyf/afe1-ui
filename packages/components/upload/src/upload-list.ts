import { definePropType } from '@afe1-ui/utils'
import { mutable } from '@afe1-ui/utils/typescript'
import type { UploadFiles } from './upload'

export const uploadListProps = {
  files: {
    type: definePropType<UploadFiles>(Array),
    default: () => mutable([]),
  },
} as const
