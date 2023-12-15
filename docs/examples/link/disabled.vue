<template>
  <a-link type="default" disabled>default</a-link>
  <a-link type="primary" disabled>primary</a-link>
  <a-link type="success" disabled>success</a-link>
  <a-link type="warning" disabled>warning</a-link>
  <a-link type="danger" disabled>danger</a-link>
  <a-link type="info" disabled>info</a-link>
</template>

<script setup lang="ts">
import ALink from '@afe1-ui/components/link'
import '@afe1-ui/theme-chalk/src/link.scss'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-link {
  margin-right: 10px;
}
</style>
