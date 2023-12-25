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
          ref="input"
          :class="nsInput.e('inner')"
          type="text"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
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
import { computed, nextTick, onMounted, shallowRef } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@afe1-ui/constants'
import { inputEmit, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'AInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmit)
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')

const containerKls = computed(() => [
  props.type == 'textarea' ? nsTextarea.b() : nsInput.b(),
])

const wrapperKls = computed(() => [nsInput.e('wrapper')])

const input = shallowRef<HTMLInputElement>()
const _ref = computed(() => input.value)

const nativeInputValue = computed(() =>
  !props.modelValue ? '' : String(props.modelValue)
)

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  // 等待 DOM 更新后设置 input 表单的值
  setNativeInputValue()
}

onMounted(() => {
  setNativeInputValue()
})
</script>

<style scoped></style>
