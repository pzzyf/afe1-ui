<template>
  <div :class="buttonKls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { buttonProps } from './button'
const props = defineProps(buttonProps)
const ns = useNamespace('button')
const buttonKls = computed(() => [ns.b(), ns.m(props.type)])
</script>

<style scoped></style>
