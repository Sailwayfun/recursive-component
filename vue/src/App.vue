<script setup lang="ts">
import FolderList from '@/components/Folders/FolderList.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Recursive Component</h1>
    </div>
  </header>

  <main>
    <FolderList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
