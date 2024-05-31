import { NOOP } from '@vue/shared'
import { definePropType } from '@afe1-ui/utils'
import { uploadBaseProps } from './upload'
import type {
  UploadFile,
  UploadHooks,
  UploadProgressEvent,
  UploadRawFile,
} from './upload'
import type { UploadAjaxError } from './ajax'
import type { ExtractPropTypes } from 'vue'

export const uploadContentProps = {
  ...uploadBaseProps,

  beforeUpload: {
    type: definePropType<UploadHooks['beforeUpload']>(Function),
    default: NOOP,
  },
  onRemove: {
    type: definePropType<
      (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onStart: {
    type: definePropType<(rawFile: UploadRawFile) => void>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<(response: any, rawFile: UploadRawFile) => unknown>(
      Function
    ),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<
      (evt: UploadProgressEvent, rawFile: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onError: {
    type: definePropType<
      (err: UploadAjaxError, rawFile: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<UploadHooks['onExceed']>(Function),
    default: NOOP,
  },
} as const

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
