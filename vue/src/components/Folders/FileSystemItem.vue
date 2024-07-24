<template>
  <li class="my-1.5" :key="folder!.name">
    <span className="flex items-center gap-1.5"></span>
    {{ folder!.name }}
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

const props = defineProps({
  folder: { type: Object as PropType<Node> }
})

const { folder } = toRefs(props)
</script>

<style scoped></style>
