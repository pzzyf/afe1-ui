<template>
  <a-scrollbar height="400px" max-height="100px">
    <p v-for="item in 20" :key="item">{{ item }}</p>
  </a-scrollbar>
</template>

<script setup lang="ts">
import AScrollbar from '@afe1-ui/components/scrollbar'
</script>

<style scoped></style>
