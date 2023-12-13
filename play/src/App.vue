<template>
  <AButton :class="[ns.b()]"> 123 </AButton>
</template>

<script setup lang="ts">
import { useNamespace } from '@afe1-ui/hooks'
// 创建 classname 命名空间实例
const ns = useNamespace('button')
import '@afe1-ui/theme-chalk/src/index.scss'
</script>

<style scoped></style>
