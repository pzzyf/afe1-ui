<template>
  <div v-show="type !== 'hidden'" style="display: flex">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <div>
        <span v-if="$slots.prefix">
          <slot name="prefix" />
        </span>
        <input type="text" />
        <span v-if="$slots.suffix">
          <slot name="suffix" />
        </span>
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
