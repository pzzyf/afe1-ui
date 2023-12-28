<template>
  <a-link :underline="false">Without Underline</a-link>
  <a-link>With Underline</a-link>
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
