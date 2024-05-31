import { uploadBaseProps } from './upload'
import type { ExtractPropTypes } from 'vue'

export const uploadContentProps = {
  ...uploadBaseProps,
} as const

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
