<!-- <template>
  <Base />
</template>

<script setup lang="ts">
import Base from '../../docs/examples/icon'
</script>

<style scoped></style> -->

<template>
  <AInput v-model="state"></AInput>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import AInput from '@afe1-ui/components/input'

const state = ref<HTMLInputElement>()
watch(
  () => state.value,
  (newVal) => {
    console.log('state值：', newVal)
  }
)
</script>

<style scoped></style>
