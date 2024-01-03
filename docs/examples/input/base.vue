<template>
  <a-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import '@afe1-ui/theme-chalk/src/index.scss'
import AInput from '@afe1-ui/components/input'
const input = ref('')
</script>
