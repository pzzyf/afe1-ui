<template>
  <div>
    <upload-content>
      <slot />
    </upload-content>
  </div>
</template>

<script setup lang="ts">
import uploadContent from './upload-content.vue'

defineOptions({
  name: 'AUpload',
})

const props = defineProps(uploadProps)
</script>

<style scoped></style>
