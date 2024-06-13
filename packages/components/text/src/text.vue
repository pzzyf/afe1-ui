<template>
  <component
    :is="tag"
    :class="textKls"
    :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { isUndefined } from '@afe1-ui/utils'
import { textProps } from './text'

defineOptions({
  name: 'AText',
  inheritAttrs: false,
})

const props = defineProps(textProps)

const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('truncated', props.truncated),
  ns.is('line-clamp', !isUndefined(props.lineClamp)),
])
</script>

<style scoped></style>
