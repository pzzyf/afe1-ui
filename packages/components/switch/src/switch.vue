<template>
  <div :class="switchKls">
    <input :class="ns.e('input')" />
    <span v-if="!inlinePrompt && (inactiveIcon || inactiveText)">
      <a-icon v-if="inactiveIcon">
        <component :is="inactiveIcon" />
      </a-icon>
      <span v-if="!inactiveIcon">{{ inactiveText }}</span>
    </span>
    <span :class="ns.e('core')">
      <div v-if="inlinePrompt" :class="ns.e('inner')">
        <template v-if="activeIcon || inactiveIcon">
          <el-icon :class="ns.is('icon')">
            <component :is="true ? activeIcon : inactiveIcon" />
          </el-icon>
        </template>
        <template v-else-if="activeText || inactiveText">
          <span :class="ns.is('text')">
            {{ true ? activeText : inactiveText }}
          </span>
        </template>
      </div>
      <div :class="ns.e('action')">
        <el-icon v-if="loading" :class="ns.is('loading')">
          <loading />
        </el-icon>
        <slot v-else-if="true" name="active-action">
          <el-icon v-if="activeActionIcon">
            <component :is="activeActionIcon" />
          </el-icon>
        </slot>
        <slot v-else-if="false" name="inactive-action">
          <el-icon v-if="inactiveActionIcon">
            <component :is="inactiveActionIcon" />
          </el-icon>
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
import { computed } from 'vue'
import AIcon from '@afe1-ui/components/icon'
import { useNamespace } from '@afe1-ui/hooks'
import { Loading } from '@element-plus/icons-vue'
import { switchProps } from './switch'
const ns = useNamespace('switch')
const switchKls = computed(() => [ns.b()])
const props = defineProps(switchProps)
console.log(props)
</script>

<style scoped></style>
