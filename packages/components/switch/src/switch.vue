<template>
  <div :class="switchKls">
    <input :class="ns.e('input')" />
    <span v-if="!inlinePrompt">
      <a-icon v-if="inactiveIcon">
        <component :is="inactiveIcon" />
      </a-icon>
      <span v-if="!inactiveIcon">{{ inactiveText }}</span>
    </span>
    <span>main</span>
    <span>suf</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AIcon from '@afe1-ui/components/icon'
import { useNamespace } from '@afe1-ui/hooks'
import { switchProps } from './switch'
const ns = useNamespace('switch')
const switchKls = computed(() => [ns.b()])
const props = defineProps(switchProps)
console.log(props)
</script>

<style scoped></style>
