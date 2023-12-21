<template>
  <div v-show="type !== 'hidden'" :class="containerKls">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <div :class="wrapperKls">
        <span v-if="$slots.prefix" :class="nsInput.e('prefix')">
          <slot name="prefix" />
        </span>

        <input
          :class="nsInput.e('inner')"
          type="text"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
        />

        <span v-if="$slots.suffix" :class="nsInput.e('suffix')">
          <slot name="suffix" />
        </span>
      </div>
      <div v-if="$slots.append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <textarea
        :class="nsTextarea.e('inner')"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { inputProps } from './input'
const props = defineProps(inputProps)
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')

const containerKls = computed(() => [
  props.type == 'textarea' ? nsTextarea.b() : nsInput.b(),
])

const wrapperKls = computed(() => [nsInput.e('wrapper')])
</script>

<style scoped></style>
