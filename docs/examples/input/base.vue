<template>
  <a-input
    v-model="input"
    placeholder="Please input"
    clearable
    :prefix-icon="Calendar"
  >
    <template #prefix> 123 </template>
  </a-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AInput from '@afe1-ui/components/input'
import { Calendar } from '@element-plus/icons-vue'
import '@afe1-ui/theme-chalk/src/index.scss'
const input = ref('')
</script>
