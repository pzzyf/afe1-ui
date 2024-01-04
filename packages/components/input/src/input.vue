<template>
  <div
    v-show="type !== 'hidden'"
    :class="containerKls"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" :class="nsInput.be('group', 'prepend')">
        <slot name="prepend" />
      </div>
      <div :class="wrapperKls">
        <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
          <span :class="nsInput.e('prefix-inner')">
            <slot name="prefix" />
            <a-icon v-if="prefixIcon" :class="nsInput.b('icon')">
              <component :is="prefixIcon" />
            </a-icon>
          </span>
        </span>

        <input
          ref="input"
          :class="nsInput.e('inner')"
          v-bind="attrs"
          :minlength="minlength"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :tabindex="tabindex"
          :aria-label="label"
          :placeholder="placeholder"
          :autofocus="autofocus"
          type="text"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
          @change="handleChange"
          @keydown="handleKeydown"
        />

        <span v-if="suffixVisible" :class="nsInput.e('suffix')">
          <span :class="nsInput.e('suffix-inner')">
            <template v-if="!showClear">
              <slot name="suffix" />
              <a-icon v-if="suffixIcon" :class="nsInput.e('icon')">
                <component :is="suffixIcon" />
              </a-icon>
            </template>
            <a-icon
              v-if="showClear"
              :class="[nsInput.e('icon'), nsInput.e('clear')]"
              @mousedown.prevent="NOOP"
              @click="clear"
            >
              <circle-close />
            </a-icon>
            <a-icon
              v-if="showPwdVisible"
              :class="[nsInput.e('icon'), nsInput.e('password')]"
              @click="handlePasswordVisible"
            >
              <component :is="passwordIcon" />
            </a-icon>
            <span v-if="isWordLimitVisible" :class="nsInput.e('count')">
              <span :class="nsInput.e('count-inner')">
                {{ textLength }} / {{ maxlength }}
              </span>
            </span>
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
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  useAttrs,
  useSlots,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import { isNil } from 'lodash-unified'
import AIcon from '@afe1-ui/components/icon'

import { useNamespace } from '@afe1-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@afe1-ui/constants'
import {
  CircleClose,
  Hide as IconHide,
  View as IconView,
} from '@element-plus/icons-vue'
import { inputEmit, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'AInput',
})

const attrs = useAttrs()
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

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const handleKeydown = (evt: KeyboardEvent) => {
  emit('keydown', evt)
}

const hovering = ref(false)

const handleMouseEnter = (evt: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', evt)
}

const handleMouseLeave = (evt: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', evt)
}

const slots = useSlots()

const suffixVisible = computed(() => [
  !!slots.suffix || !!props.prefixIcon || showClear.value,
])

const showClear = computed(
  () => props.clearable && !!nativeInputValue.value && hovering.value
)

const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !props.readonly &&
    !!nativeInputValue.value &&
    !!nativeInputValue.value
)

const passwordVisible = ref(false)

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

const passwordIcon = computed(() =>
  passwordVisible.value ? IconView : IconHide
)

const textLength = computed(() => nativeInputValue.value.length)

const isWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!props.maxlength &&
    (props.type === 'text' || props.type === 'textarea') &&
    !props.readonly &&
    !props.showPassword
)

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

watch(nativeInputValue, () => setNativeInputValue())

onMounted(() => {
  setNativeInputValue()
})
</script>

<style scoped></style>
