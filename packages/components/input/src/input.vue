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
          :minlength="minlength"
          :maxlength="maxlength"
          type="text"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
        />

        <span v-if="suffixVisible" :class="nsInput.e('suffix')">
          <span :class="nsInput.e('suffix-inner')">
            <a-icon
              v-if="showClear"
              :class="[nsInput.e('icon'), nsInput.e('clear')]"
              @click="clear"
            >
              <circle-close />
            </a-icon>
          </span>
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
import { computed, nextTick, onMounted, ref, shallowRef, useSlots } from 'vue'
// import { NOOP } from '@vue/shared'
import { isNil } from 'lodash-unified'
import AIcon from '@afe1-ui/components/icon'

import { useNamespace } from '@afe1-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@afe1-ui/constants'
import { CircleClose } from '@element-plus/icons-vue'
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
  isNil(props.modelValue) ? '' : String(props.modelValue)
)

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const isComposing = ref(false)

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement
  if (isComposing.value) return

  if (value === nativeInputValue.value) {
    setNativeInputValue()
    return
  }

  emit(UPDATE_MODEL_EVENT, value)

  emit('input', value)

  await nextTick()
  // 等待 DOM 更新后设置 input 表单的值
  setNativeInputValue()
}

const slots = useSlots()

const suffixVisible = computed(() => [!!slots.suffix])

const showClear = computed(() => props.clearable && !!nativeInputValue.value)

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

onMounted(() => {
  setNativeInputValue()
})
</script>

<style scoped></style>
