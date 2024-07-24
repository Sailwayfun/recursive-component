<template>
  <li class="my-1.5" :key="folder.name">
    <span class="flex items-center gap-1.5">
      <template v-if="isFolder">
        <ChevronRightIcon class="size-4 cursor-pointer transition-transform" v-if="hasChildNodes" />
        <FolderIcon class="size-6 text-sky-600" :class="{ 'ml-[1.4rem]': isEmptyFolder }" />
      </template>
      <template v-else>
        <DocumentIcon class="size-6 text-gray-600" />
      </template>
      {{ folder.name }}
    </span>
    <ul class="pl-6">
      <template v-if="folder.nodes">
        <FileSystemItem v-for="folder in folder.nodes" :key="folder.name" :folder="folder" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { type PropType, toRefs, computed } from 'vue'
import { type Node } from './FolderList.vue'
import { FolderIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import { ChevronRightIcon } from '@heroicons/vue/16/solid'

const props = defineProps({
  folder: { type: Object as PropType<Node>, required: true }
})

const { folder } = toRefs(props)

const hasChildNodes = computed(() => {
  return folder.value.nodes && folder.value.nodes.length > 0
})
const isFolder = computed(() => {
  return Array.isArray(folder.value.nodes)
})
const isEmptyFolder = computed(() => isFolder.value && !hasChildNodes.value)
</script>

<style scoped></style>
