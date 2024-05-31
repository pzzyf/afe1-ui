<template>
  <div :class="[ns.b]" @click="handleClick">
    <slot />
    <input
      ref="inputRef"
      :class="ns.e('input')"
      type="file"
      @change="handleChange"
      @click.stop
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { uploadContentProps } from './upload-content'

const props = defineProps(uploadContentProps)

const ns = useNamespace('upload')

const inputRef = ref()

const uploadFiles = (files: File[]) => {
  if (files.length === 0) return
  console.log('files :>>', files)
}
const handleClick = () => {
  inputRef.value!.value = ''
  inputRef.value!.click()
}

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  uploadFiles(Array.from(files))
}
</script>

<style scoped></style>
