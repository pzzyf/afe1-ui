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

defineOptions({
  name: 'AScrollbar',
})

const props = defineProps(scrollbarProps)

console.log(props)

const ns = useNamespace('scrollbar')

const wrapKls = computed(() => {
  return [ns.b('wrap')]
})

const wrapStyle = computed(() => {
  return []
})
</script>

<style scoped></style>
