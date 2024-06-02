<template>
  <div
    :class="[ns.b(), ns.m(listType)]"
    tabindex="0"
    @click="handleClick"
    @keydown.self.enter.space="handleKeydown"
  >
    <slot />
    <input
      ref="inputRef"
      :class="ns.e('input')"
      :name="name"
      :multiple="multiple"
      type="file"
      @change="handleChange"
      @click.stop
    />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { isPlainObject } from '@vue/shared'
import { useNamespace } from '@afe1-ui/hooks'
import { isFunction } from '@afe1-ui/utils'
import { cloneDeep, isEqual } from 'lodash-unified'
import { uploadContentProps } from './upload-content'
import { genFileId } from './upload'
import type { UploadContentProps } from './upload-content'
import type { UploadHooks, UploadRawFile, UploadRequestOptions } from './upload'

const props = defineProps(uploadContentProps)
const ns = useNamespace('upload')

const requests = shallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>(
  {}
)

const inputRef = ref()

const uploadFiles = (files: File[]) => {
  if (files.length === 0) return
  const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props

  if (limit && fileList.length + files.length > limit) {
    onExceed(files, fileList)
    return
  }

  if (!multiple) {
    files = files.slice(0, 1)
  }

  for (const file of files) {
    const rawFile = file as UploadRawFile
    rawFile.uid = genFileId()
    onStart(rawFile)
    if (autoUpload) upload(rawFile)
  }
}

const upload = async (rawFile: UploadRawFile): Promise<void> => {
  inputRef.value!.value = ''

  if (!props.beforeUpload) {
    return doUpload(rawFile)
  }

  let hookResult: Exclude<ReturnType<UploadHooks['beforeUpload']>, Promise<any>>
  let beforeData: UploadContentProps['data'] = {}

  try {
    // origin data: Handle data changes after synchronization tasks are executed
    const originData = props.data
    const beforeUploadPromise = props.beforeUpload(rawFile)
    beforeData = isPlainObject(props.data) ? cloneDeep(props.data) : props.data
    hookResult = await beforeUploadPromise
    if (isPlainObject(props.data) && isEqual(originData, beforeData)) {
      beforeData = cloneDeep(props.data)
    }
  } catch {
    hookResult = false
  }

  if (hookResult === false) {
    props.onRemove(rawFile)
    return
  }

  let file: File = rawFile
  if (hookResult instanceof Blob) {
    if (hookResult instanceof File) {
      file = hookResult
    } else {
      file = new File([hookResult], rawFile.name, {
        type: rawFile.type,
      })
    }
  }

  doUpload(
    Object.assign(file, {
      uid: rawFile.uid,
    }),
    beforeData
  )
}

const resolveData = async (
  data: UploadContentProps['data'],
  rawFile: UploadRawFile
): Promise<Record<string, any>> => {
  if (isFunction(data)) {
    return data(rawFile)
  }

  return data
}

const doUpload = async (
  rawFile: UploadRawFile,
  beforeData?: UploadContentProps['data']
) => {
  const {
    headers,
    data,
    method,
    withCredentials,
    name: filename,
    action,
    onProgress,
    onSuccess,
    onError,
    httpRequest,
  } = props

  try {
    beforeData = await resolveData(beforeData ?? data, rawFile)
  } catch {
    props.onRemove(rawFile)
    return
  }

  const { uid } = rawFile
  const options: UploadRequestOptions = {
    headers: headers || {},
    withCredentials,
    file: rawFile,
    data: beforeData,
    method,
    filename,
    action,
    onProgress: (evt) => {
      onProgress(evt, rawFile)
    },
    onSuccess: (res) => {
      onSuccess(res, rawFile)
      delete requests.value[uid]
    },
    onError: (err) => {
      onError(err, rawFile)
      delete requests.value[uid]
    },
  }
  const request = httpRequest(options)
  requests.value[uid] = request
  if (request instanceof Promise) {
    request.then(options.onSuccess, options.onError)
  }
}

const handleClick = () => {
  inputRef.value!.value = ''
  inputRef.value!.click()
}

const handleKeydown = () => {
  handleClick()
}

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  uploadFiles(Array.from(files))
}

defineExpose({
  upload,
})
</script>
