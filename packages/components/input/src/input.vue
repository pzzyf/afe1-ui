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

        <input
          type="text"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
        />

        <span v-if="$slots.suffix">
          <slot name="suffix" />
        </span>
      </div>
      <div v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <textarea />
    </template>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { inputProps } from './input'
const props = defineProps(inputProps)
console.log(props)
</script>

<style scoped></style>
