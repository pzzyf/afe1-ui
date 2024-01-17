<template>
  <div :class="ns.b()">
    <slot />
    <sup v-text="content" />
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { badgeProps } from './badge'
defineOptions({
  name: 'ABadge',
})
defineProps(badgeProps)
const ns = useNamespace('badge')
</script>

<style scoped></style>
