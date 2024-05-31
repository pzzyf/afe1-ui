<template>
  <div>
    <upload-content ref="uploadRef" v-bind="uploadContentProps">
      <slot />
    </upload-content>
    <slot v-if="$slots.trigger" />
    <slot name="tip" />
    <upload-list :files="uploadFiles" />
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import uploadList from './upload-list.vue'
import uploadContent from './upload-content.vue'
import { uploadProps } from './upload'
import { useHandlers } from './use-handlers'
import type { UploadContentProps } from './upload-content'

defineOptions({
  name: 'AUpload',
})

const props = defineProps(uploadProps)
const uploadRef = shallowRef()

const { uploadFiles } = useHandlers(props, uploadRef)

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  fileList: uploadFiles.value,
}))
</script>

<style scoped></style>
