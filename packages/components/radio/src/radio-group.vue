<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@afe1-ui/hooks'

defineOptions({
  name: 'ARadioGroup',
})

const ns = useNamespace('radio')
</script>

<style scoped></style>
