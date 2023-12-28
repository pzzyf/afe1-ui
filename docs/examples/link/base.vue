<template>
  <a-link href="https://afe1-ui.netlify.app/" target="_blank" :icon="Edit">
    default</a-link
  >
  <a-link type="primary">primary</a-link>
  <a-link type="success">success</a-link>
  <a-link type="warning">warning</a-link>
  <a-link type="danger">danger</a-link>
  <a-link type="info">info</a-link>
</template>

<script setup lang="ts">
import ALink from '@afe1-ui/components/link'
import '@afe1-ui/theme-chalk/src/link.scss'
import { Edit } from '@element-plus/icons-vue'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-link {
  margin-right: 10px;
}
</style>
