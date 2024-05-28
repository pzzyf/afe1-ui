<template>
  <a-upload v-model:file-list="fileList">
    <a-button>123</a-button>
  </a-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AUpload from '@afe1-ui/components/upload'
import AButton from '@afe1-ui/components/button'

const fileList = ref<object[]>([
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
