<template>
  <li class="my-1.5" :key="folder.name">
    <span class="flex items-center gap-1.5">
      <template v-if="isFolder">
        <button @click="toggleSubNodes" v-if="hasChildNodes">
          <ChevronRightIcon class="size-4 transition-transform" :class="{ 'rotate-90': isOpen }" />
        </button>
        <FolderIcon class="size-6 text-sky-600" :class="{ 'ml-[1.4rem]': isEmptyFolder }" />
      </template>
      <template v-else>
        <DocumentIcon class="size-6 text-gray-600" />
      </template>
      {{ folder.name }}
    </span>
    <template v-if="isOpen && folder.nodes">
      <ul class="pl-6">
        <FileSystemItem v-for="folder in folder.nodes" :key="folder.name" :folder="folder" />
      </ul>
    </template>
  </li>
</template>

<script setup lang="ts">
import { type PropType, toRefs, computed, ref } from 'vue'
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

const isOpen = ref(false)
function toggleSubNodes() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped></style>
