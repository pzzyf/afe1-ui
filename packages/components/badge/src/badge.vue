<template>
  <div>
    <slot />
    <sup>{{ content }}</sup>
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { badgeProps } from './badge'
defineOptions({
  name: 'ABadge',
})
defineProps(badgeProps)
</script>

<style scoped></style>
