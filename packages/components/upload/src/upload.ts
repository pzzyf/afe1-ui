import { definePropType, mutable } from '@afe1-ui/utils'

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

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

export const uploadBaseProps = {
  fileList: {
    type: definePropType(Array),
    default: () => mutable([] as const),
  },
} as const

export const uploadProps = {
  ...uploadBaseProps,
} as const
