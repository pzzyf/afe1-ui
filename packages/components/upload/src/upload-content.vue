<template>
  <div :class="[ns.b]" @click="handleClick">
    <slot />
    <input ref="inputRef" :class="ns.e('input')" type="file" @click.stop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'

const ns = useNamespace('upload')

const inputRef = ref()

const handleClick = () => {
  inputRef.value!.value = ''
  inputRef.value!.click()
}
</script>

<style scoped></style>
