<template>
  <a-text truncated> Self element set width 100px </a-text>
  <div>
    <a-text truncated>Squeezed by parent element</a-text>
  </div>
  <a-text line-clamp="2">
    The -webkit-line-clamp CSS property<br />
    allows limiting of the contents of<br />
    a block to the specified number of lines.
  </a-text>
</template>

<script setup lang="ts">
import AText from '@afe1-ui/components/text'
</script>

<style scoped>
.a-text {
  width: 150px;
}
</style>
