<template>
  <a-input
    v-model="input"
    placeholder="Please input"
    clearable
    :prefix-icon="Calendar"
    show-word-limit
    maxlength="10"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AInput from '@afe1-ui/components/input'
import { Calendar } from '@element-plus/icons-vue'
import '@afe1-ui/theme-chalk/src/index.scss'
const input = ref('')
</script>
