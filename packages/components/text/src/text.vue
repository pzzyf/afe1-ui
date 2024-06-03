<template>
  <component :is="tag" :class="textKls"> 123 </component>
</template>

<script setup lang="ts">
import { computed, defineOptions } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'

defineOptions({
  name: 'AText',
  inheritAttrs: false,
})

const tag = 'div'

const ns = useNamespace('text')

const textKls = computed(() => [ns.b()])
</script>

<style scoped></style>
