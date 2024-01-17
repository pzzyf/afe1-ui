<template>
  <ABadge :content="123">1</ABadge>
</template>

<script setup lang="ts">
import ABadge from '@afe1-ui/components/badge'
import '@afe1-ui/theme-chalk/src/badge.scss'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-button {
  margin-right: 6px;
}
</style>
