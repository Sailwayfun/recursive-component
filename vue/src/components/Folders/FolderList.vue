<template>
  <div class="p-8 max-w-sm mx-auto">
    <ul>
      <FileSystemItem v-for="folder in folders" :key="folder.name" :folder="folder" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import FileSystemItem from './FileSystemItem.vue'

export interface Node {
  name: string
  nodes?: Node[]
}

const folders: Node[] = [
  {
    name: 'Home',
    nodes: [
      {
        name: 'Movies',
        nodes: [{ name: 'Kimi No Na Wa' }, { name: 'Weathering with You' }]
      },
      { name: 'Music', nodes: [] },
      { name: 'Pictures', nodes: [] }
    ]
  }
]
</script>

<style scoped></style>
