<template>
  <div style="display: flex; flex-wrap: wrap">
    <div style="width: 100%; margin-bottom: 10px">
      <a-button size="small">Default</a-button>
      <a-button size="small" type="primary">Primary</a-button>
      <a-button size="small" type="success">Success</a-button>
      <a-button size="small" type="info">Info</a-button>
      <a-button size="small" type="warning">Warning</a-button>
      <a-button size="small" type="danger">Danger</a-button>
    </div>
    <div style="width: 100%; margin-bottom: 10px">
      <a-button>Default</a-button>
      <a-button type="primary">Primary</a-button>
      <a-button type="success">Success</a-button>
      <a-button type="info">Info</a-button>
      <a-button type="warning">Warning</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
    <div style="width: 100%">
      <a-button size="large">Default</a-button>
      <a-button size="large" type="primary">Primary</a-button>
      <a-button size="large" type="success">Success</a-button>
      <a-button size="large" type="info">Info</a-button>
      <a-button size="large" type="warning">Warning</a-button>
      <a-button size="large" type="danger">Danger</a-button>
    </div>
  </div>
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
