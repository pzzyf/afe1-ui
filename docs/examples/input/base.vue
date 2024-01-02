<template>
  <a-button @click="handleClk">点击</a-button>
  <a-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import '@afe1-ui/theme-chalk/src/index.scss'
import AButton from '@afe1-ui/components/button'
import AInput from '@afe1-ui/components/input'
const input = ref('')

function handleClk() {
  console.log(input.value)
}
</script>
