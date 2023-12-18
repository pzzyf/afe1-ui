<template>
  <a-icon color="red" size="100px">
    <svg
      t="1702886848959"
      class="icon"
      viewBox="0 0 1088 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1511"
      width="200"
      height="200"
    >
      <path
        d="M172.224 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32h705.92a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-704z m736-58.56a96 96 0 0 1 64 90.56v64a96 96 0 0 1-51.968 85.312l-52.672 140.288a96 96 0 0 1-89.856 62.272H270.72a96 96 0 0 1-89.856-62.272l-52.608-140.224A96 96 0 0 1 76.224 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44z m-64-5.44a320 320 0 1 0-640 0h640z m-320 256H200.576l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L847.872 704H524.224z"
        fill="#606266"
        p-id="1512"
      />
    </svg>
  </a-icon>
</template>

<script setup lang="ts">
import AIcon from '@afe1-ui/components/icon'
import '@afe1-ui/theme-chalk/src/index.scss'
defineExpose({
  name: 'Base',
})
</script>

<style scoped>
.a-icon {
  margin-right: 50px;
}
</style>
