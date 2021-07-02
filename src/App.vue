<template>
  <main class="p-4 pt-16 h-screen overflow-y-auto bg-gray-100">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  overflow-y: hidden;
}
</style>
