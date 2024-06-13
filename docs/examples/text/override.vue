<template>
  <div style="display: flex; flex-direction: column">
    <a-text>span</a-text>
    <a-text tag="p">This is a paragraph.</a-text>
    <a tag="b">Bold</a>
    <a-text tag="i">Italic</a-text>
    <a-text>
      This is
      <a-text tag="sub" size="small">subscript</a-text>
    </a-text>
    <a-text>
      This is
      <a-text tag="sup" size="small">superscript</a-text>
    </a-text>
    <a-text tag="ins">Inserted</a-text>
    <a-text tag="del">Deleted</a-text>
    <a-text tag="mark">Marked</a-text>
  </div>
</template>

<script setup>
import AText from '@afe1-ui/components/text'
</script>
