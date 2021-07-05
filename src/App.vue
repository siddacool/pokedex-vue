<template>
  <div class="p-4 pt-16 h-screen overflow-y-auto bg-gray-100">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from 'components/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: { TheHeader },
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
