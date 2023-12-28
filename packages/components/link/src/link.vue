<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <a-icon v-if="icon"><component :is="icon" /></a-icon>
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import AIcon from '@afe1-ui/components/icon'
import { linkEmit, linkProps } from './link'

defineOptions({
  name: 'ALink',
})

const props = defineProps(linkProps)
const emit = defineEmits(linkEmit)

const ns = useNamespace('link')
const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style scoped></style>
