<template>
  <a-upload v-model:file-list="fileList">
    <a-button type="primary">Click to upload</a-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </a-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AUpload from '@afe1-ui/components/upload'
import AButton from '@afe1-ui/components/button'
import type { UploadUserFile } from '@afe1-ui/components/upload/src/upload'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
</script>

<style scoped></style>
