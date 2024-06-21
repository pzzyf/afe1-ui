<template>
  <div :class="ns.b()">
    <div :class="wrapKls" :style="wrapStyle">
      <component :is="tag" :id="id">
        <slot />
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { scrollbarProps } from './scrollbar'
import type { CSSProperties, StyleValue } from 'vue'

defineOptions({
  name: 'AScrollbar',
})

const props = defineProps(scrollbarProps)

const ns = useNamespace('scrollbar')

const wrapStyle = computed<StyleValue>(() => {
  const style: CSSProperties = {}
  if (props.height) style.height = props.height
  if (props.maxHeight) style.maxHeight = props.maxHeight
  return [props.wrapStyle as any, style]
})

const wrapKls = computed(() => {
  return [props.wrapClass, ns.e('wrap')]
})
</script>

<style scoped></style>
