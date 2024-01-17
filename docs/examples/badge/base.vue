<template>
  <ABadge :content="123">1</ABadge>
</template>

<script setup lang="ts">
import ABadge from '@afe1-ui/components/badge'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-button {
  margin-right: 6px;
}
</style>
