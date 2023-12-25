<!-- <template>
  <Base />
</template>

<script setup lang="ts">
import Base from '../../docs/examples/icon'
</script>

<style scoped></style> -->

<template>
  <input ref="input" :value="state" type="text" />
  <button @click="handleClk">提交</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref()
const state = ref(666)
const handleClk = () => {
  console.log(input.value.value)
}
</script>

<style scoped></style>
