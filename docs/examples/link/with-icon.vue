<template>
  <div>
    <a-link :icon="Edit">Edit</a-link>
    <a-link>
      Check<a-icon><icon-view /></a-icon>
    </a-link>
  </div>
</template>

<script setup lang="ts">
import ALink from '@afe1-ui/components/link'
import AIcon from '@afe1-ui/components/icon'
import '@afe1-ui/theme-chalk/src/link.scss'
import { Edit, View as IconView } from '@element-plus/icons-vue'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-link {
  margin-right: 8px;
}
</style>
