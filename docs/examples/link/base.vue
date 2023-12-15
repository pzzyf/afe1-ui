<template>
  <ALink type="default">default</ALink>
  <ALink type="primary">primary</ALink>
  <ALink type="success">success</ALink>
  <ALink type="warning">warning</ALink>
  <ALink type="danger">danger</ALink>
  <ALink type="info">info</ALink>
</template>

<script setup lang="ts">
import ALink from '@afe1-ui/components/link'
import '@afe1-ui/theme-chalk/src/link.scss'
</script>

<style scoped>
.a-link {
  margin-right: 10px;
}
</style>
