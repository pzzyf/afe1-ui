<template>
  <transition-group tag="ul">
    <li v-for="file in files" :key="file.name">
      <slot :file="file">
        <div>
          <a href="">
            <span>{{ file.name }}</span>
          </a>
        </div>
      </slot>
    </li>
  </transition-group>
</template>

<script setup lang="ts">
import { uploadListProps } from './upload-list'

defineOptions({
  name: 'AUploadList',
})

const props = defineProps(uploadListProps)
</script>

<style scoped></style>
