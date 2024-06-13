<template>
  <div style="display: flex; flex-wrap: wrap">
    <div style="width: 100%; margin-bottom: 10px">
      <a-text size="small">Default</a-text>
      <a-text size="small" type="primary">Primary</a-text>
      <a-text size="small" type="success">Success</a-text>
      <a-text size="small" type="info">Info</a-text>
      <a-text size="small" type="warning">Warning</a-text>
      <a-text size="small" type="danger">Danger</a-text>
    </div>
    <div style="width: 100%; margin-bottom: 10px">
      <a-text>Default</a-text>
      <a-text type="primary">Primary</a-text>
      <a-text type="success">Success</a-text>
      <a-text type="info">Info</a-text>
      <a-text type="warning">Warning</a-text>
      <a-text type="danger">Danger</a-text>
    </div>
    <div style="width: 100%">
      <a-text size="large">Default</a-text>
      <a-text size="large" type="primary">Primary</a-text>
      <a-text size="large" type="success">Success</a-text>
      <a-text size="large" type="info">Info</a-text>
      <a-text size="large" type="warning">Warning</a-text>
      <a-text size="large" type="danger">Danger</a-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import AText from '@afe1-ui/components/text'
import '@afe1-ui/theme-chalk/src/text.scss'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-text {
  margin-right: 6px;
}
</style>
