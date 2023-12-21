<template>
  <div v-show="type !== 'hidden'" style="display: flex">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <div style="display: flex">
        <div>input1</div>
        <input type="text" />
        <div>input3</div>
      </div>
      <div v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <div>input</div>
    </template>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { inputProp } from './input'
const { type } = defineProps(inputProp)
</script>

<style scoped></style>
