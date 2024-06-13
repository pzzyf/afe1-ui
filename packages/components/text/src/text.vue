<template>
  <component :is="tag" :class="textKls">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { textProps } from './text'

defineOptions({
  name: 'AText',
  inheritAttrs: false,
})

const props = defineProps(textProps)

const ns = useNamespace('text')

const textKls = computed(() => [ns.b(), ns.m(props.type)])
</script>

<style scoped></style>
