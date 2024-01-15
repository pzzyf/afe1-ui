<template>
  <a-switch v-model="value1">switch</a-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ASwitch from '@afe1-ui/components/switch'

const value1 = ref(true)
</script>

<style scoped></style>
