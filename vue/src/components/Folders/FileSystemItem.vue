<template>
  <li class="my-1.5" :key="folder!.name">
    <span class="flex items-center gap-1.5">
      <template v-if="folder!.nodes">
        <FolderIcon class="size-6 text-sky-600" />
      </template>
      <template v-else>
        <DocumentIcon class="size-6 text-gray-600" />
      </template>
      {{ folder!.name }}
    </span>
    <ul class="pl-6">
      <template v-if="folder!.nodes">
        <FileSystemItem v-for="folder in folder!.nodes" :key="folder.name" :folder="folder" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { type PropType, toRefs } from 'vue'
import { type Node } from './FolderList.vue'
import { FolderIcon, DocumentIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  folder: { type: Object as PropType<Node> }
})

const { folder } = toRefs(props)
</script>

<style scoped></style>
