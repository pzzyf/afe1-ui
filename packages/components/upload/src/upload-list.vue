<template>
  <transition-group tag="ul" :class="containerKls" :name="nsList.b()">
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[nsUpload.be('list', 'item'), nsUpload.is(file.status)]"
    >
      <slot :file="file">
        <div
          v-if="file.status === 'uploading' || listType !== 'picture-card'"
          :class="nsUpload.be('list', 'item-info')"
        >
          <a :class="nsUpload.be('list', 'item-name')">
            <a-icon :class="nsIcon.m('document')">
              <Document />
            </a-icon>
            <span
              :class="nsUpload.be('list', 'item-file-name')"
              :title="file.name"
            >
              {{ file.name }}
            </span>
          </a>
        </div>
      </slot>
    </li>
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@afe1-ui/hooks'
import AIcon from '@afe1-ui/components/icon'
import { Document } from '@element-plus/icons-vue'
import { uploadListProps } from './upload-list'

defineOptions({
  name: 'AUploadList',
})

const props = defineProps(uploadListProps)

const nsUpload = useNamespace('upload')

const nsIcon = useNamespace('icon')

const nsList = useNamespace('list')

const containerKls = computed(() => [
  nsUpload.b('list'),
  nsUpload.bm('list', props.listType),
  nsUpload.is('disabled', props.disabled),
])
</script>

<style scoped></style>
