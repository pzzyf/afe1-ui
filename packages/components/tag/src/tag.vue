<template>
  <span :class="containerKls">tag</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { tagProps } from './tag'

defineOptions({
  name: 'ATag',
})
const props = defineProps(tagProps)

const ns = useNamespace('tag')

const containerKls = computed(() => {
  const { type } = props
  return [ns.b(), ns.m(type || 'primary')]
})
</script>

<style scoped></style>
