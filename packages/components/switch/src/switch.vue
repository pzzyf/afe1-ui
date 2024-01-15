<template>
  <div :class="switchKls">
    <input
      ref="input"
      :class="ns.e('input')"
      type="checkbox"
      role="switch"
      :aria-checked="checked"
      :aria-label="label"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :tabindex="tabindex"
      @change="handleChange"
    />
    <span v-if="!inlinePrompt && (inactiveIcon || inactiveText)">
      <a-icon v-if="inactiveIcon">
        <component :is="inactiveIcon" />
      </a-icon>
      <span v-if="!inactiveIcon">{{ inactiveText }}</span>
    </span>
    <span :class="ns.e('core')">
      <div v-if="inlinePrompt" :class="ns.e('inner')">
        <template v-if="activeIcon || inactiveIcon">
          <a-icon :class="ns.is('icon')">
            <component :is="true ? activeIcon : inactiveIcon" />
          </a-icon>
        </template>
        <template v-else-if="activeText || inactiveText">
          <span :class="ns.is('text')">
            {{ true ? activeText : inactiveText }}
          </span>
        </template>
      </div>
      <div :class="ns.e('action')">
        <a-icon v-if="loading" :class="ns.is('loading')">
          <loading />
        </a-icon>
        <slot v-else-if="true" name="active-action">
          <a-icon v-if="activeActionIcon">
            <component :is="activeActionIcon" />
          </a-icon>
        </slot>
        <slot v-else-if="false" name="inactive-action">
          <a-icon v-if="inactiveActionIcon">
            <component :is="inactiveActionIcon" />
          </a-icon>
        </slot>
      </div>
    </span>
    <span v-if="!inlinePrompt && (activeIcon || activeText)">
      <a-icon v-if="activeIcon">
        <component :is="activeIcon" />
      </a-icon>
      <span v-if="!activeIcon">{{ activeText }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AIcon from '@afe1-ui/components/icon'
import { useNamespace } from '@afe1-ui/hooks'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@afe1-ui/constants'
import { Loading } from '@element-plus/icons-vue'

import { switchEmits, switchProps } from './switch'
const COMPONENT_NAME = 'ASwitch'
defineOptions({
  name: COMPONENT_NAME,
})
const ns = useNamespace('switch')
const switchKls = computed(() => [ns.b()])
const props = defineProps(switchProps)

const emit = defineEmits(switchEmits)

const isControlled = ref(props.modelValue !== false)

const actualValue = computed(() => {
  return isControlled.value ? props.modelValue : props.value
})

const checked = computed(() => actualValue.value === props.activeValue)

const handleChange = () => {
  const val = checked.value ? props.inactiveValue : props.activeValue
  emit(UPDATE_MODEL_EVENT, val)
  emit(CHANGE_EVENT, val)
  emit(INPUT_EVENT, val)
}
</script>

<style scoped></style>
