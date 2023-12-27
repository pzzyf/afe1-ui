<template>
  <a-button>Default</a-button>
  <a-button type="primary">Primary</a-button>
  <a-button type="success">Success</a-button>
  <a-button type="info">Info</a-button>
  <a-button type="warning">Warning</a-button>
  <a-button type="danger">Danger</a-button>
</template>

<script setup lang="ts">
import AButton from '@afe1-ui/components/button'
import '@afe1-ui/theme-chalk/src/button.scss'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-button {
  margin-right: 6px;
}
</style>
