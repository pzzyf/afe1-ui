<template>
  <div>
    <upload-content>
      <slot />
    </upload-content>
    <slot v-if="$slots.trigger" />
    <slot name="tip" />
    <uploadList :files="fileList" />
  </div>
</template>

<script setup lang="ts">
import uploadList from './upload-list.vue'
import uploadContent from './upload-content.vue'
import { uploadProps } from './upload'

const props = defineProps(uploadProps)
console.log(props)

defineOptions({
  name: 'AUpload',
})
</script>

<style scoped></style>
