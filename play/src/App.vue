<!-- <template>
  <Base />
</template>

<script setup lang="ts">
import Base from '../../docs/examples/icon'
</script>

<style scoped></style> -->

<template>
  <AInput>
    <template #prepend>
      <div>prepend</div>
    </template>
    <template #append>
      <div>append</div>
    </template>
  </AInput>
</template>

<script setup lang="ts">
import AInput from '@afe1-ui/components/input'
</script>

<style scoped></style>
