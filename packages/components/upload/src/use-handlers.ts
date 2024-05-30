import { useVModel } from '@vueuse/core'
import type { ShallowRef } from 'vue'

import type { UploadFiles, UploadProps } from './upload'
export const useHandlers = (
  props: UploadProps,
  uploadRef: ShallowRef<undefined>
) => {
  const uploadFiles = useVModel(
    props as Omit<UploadProps, 'fileList'> & { fileList: UploadFiles },
    'fileList',
    undefined,
    { passive: true }
  )
  console.log(uploadRef)
  return {
    uploadFiles,
  }
}
