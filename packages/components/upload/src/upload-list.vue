<template>
  <div>{{ props.files }}</div>
</template>

<script setup lang="ts">
import { uploadListProps } from './upload-list'

defineOptions({
  name: 'AUploadList',
})

const props = defineProps(uploadListProps)
</script>

<style scoped></style>
