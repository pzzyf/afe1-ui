import { definePropType } from '@afe1-ui/utils'
import { mutable } from '@afe1-ui/utils/typescript'
import { uploadListTypes } from './upload'
import type { UploadFiles } from './upload'

export const uploadListProps = {
  files: {
    type: definePropType<UploadFiles>(Array),
    default: () => mutable([]),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: 'text',
  },
} as const
