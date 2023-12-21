<template>
  <div style="display: flex">
    <template v-if="type !== 'textarea'">
      <div>前</div>
      <div style="display: flex">
        <div>input1</div>
        <input type="text" />
        <div>input3</div>
      </div>
      <div>后</div>
    </template>
    <template v-else>
      <div>input</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const type = ref('123')
</script>

<style scoped></style>
