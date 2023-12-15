<template>
  <a :class="linkCls">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { linkProps } from './link'

const props = defineProps(linkProps)

const ns = useNamespace('link')
const linkCls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('underline', props.underLine),
])
</script>

<style scoped></style>
