<template>
  <a-link type="default">default</a-link>
  <a-link type="primary">primary</a-link>
  <a-link type="success">success</a-link>
  <a-link type="warning">warning</a-link>
  <a-link type="danger">danger</a-link>
  <a-link type="info">info</a-link>
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
