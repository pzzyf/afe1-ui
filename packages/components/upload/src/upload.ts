import { NOOP } from '@vue/shared'
import { definePropType, mutable } from '@afe1-ui/utils'
import type { Awaitable, Mutable } from '@afe1-ui/utils'
import type { UploadAjaxError } from './ajax'
import type { ExtractPropTypes } from 'vue'

export const uploadListTypes = ['text', 'picture', 'picture-card'] as const

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob | [string | Blob, string]>
  filename: string
  file: UploadRawFile
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}

export interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}

export type UploadFiles = UploadFile[]
export declare type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

export interface UploadRawFile extends File {
  uid: number
}

export interface UploadHooks {
  beforeUpload: (
    rawFile: UploadRawFile
  ) => Awaitable<void | undefined | null | boolean | File | Blob>
  beforeRemove: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => Awaitable<boolean>
  onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onPreview: (uploadFile: UploadFile) => void
  onSuccess: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onProgress: (
    evt: UploadProgressEvent,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onError: (
    error: Error,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void
}

export type UploadRequestHandler = (
  options: UploadRequestOptions
) => XMLHttpRequest | Promise<unknown>

export type UploadData = Mutable<Record<string, any>>

export const uploadBaseProps = {
  action: {
    type: String,
    default: '#',
  },
  headers: {
    type: definePropType<Headers | Record<string, any>>(Object),
  },
  method: {
    type: String,
    default: 'post',
  },
  data: {
    type: definePropType<
      | Awaitable<UploadData>
      | ((rawFile: UploadRawFile) => Awaitable<UploadData>)
    >([Object, Function, Promise]),
    default: () => mutable({} as const),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'file',
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },

  accept: {
    type: String,
    default: '',
  },

  fileList: {
    type: definePropType<UploadUserFile[]>(Array),
    default: () => mutable([] as const),
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: 'text',
  },
  httpRequest: {
    type: definePropType<UploadRequestHandler>(Function),
  },
  disabled: Boolean,
  limit: Number,
} as const

export const uploadProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType<UploadHooks['beforeUpload']>(Function),
    default: NOOP,
  },
  beforeRemove: {
    type: definePropType<UploadHooks['beforeRemove']>(Function),
  },
  onRemove: {
    type: definePropType<UploadHooks['onRemove']>(Function),
    default: NOOP,
  },
  onChange: {
    type: definePropType<UploadHooks['onChange']>(Function),
    default: NOOP,
  },
  onPreview: {
    type: definePropType<UploadHooks['onPreview']>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<UploadHooks['onSuccess']>(Function),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<UploadHooks['onProgress']>(Function),
    default: NOOP,
  },
  onError: {
    type: definePropType<UploadHooks['onError']>(Function),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<UploadHooks['onExceed']>(Function),
    default: NOOP,
  },
  crossorigin: {
    type: definePropType<'anonymous' | 'use-credentials' | ''>(String),
  },
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>
