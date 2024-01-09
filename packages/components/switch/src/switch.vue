<template>
  <div :class="switchKls">
    <input :class="ns.e('input')" />
    <span v-if="!inlinePrompt && (inactiveIcon || inactiveText)">
      <a-icon v-if="inactiveIcon">
        <component :is="inactiveIcon" />
      </a-icon>
      <span v-if="!inactiveIcon">{{ inactiveText }}</span>
    </span>
    <span>
      <div>active</div>
      <div>notactive</div>
    </span>
    <span v-if="!inlinePrompt && (activeIcon || activeText)">
      <a-icon v-if="activeIcon">
        <component :is="activeIcon" />
      </a-icon>
      <span v-if="!activeIcon">{{ activeText }}</span>
    </span>
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
