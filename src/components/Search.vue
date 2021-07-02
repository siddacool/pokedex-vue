<template>
  <div class="search h-12 overflow-hidden rounded-md border-gray-300 border">
    <input
      type="text"
      placeholder="search"
      class="h-full w-full outline-none p-3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup: () => {
    console.log('yo');
  },
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  max-width: 700px;

  @media (min-width: 900px) {
    max-width: 400px;
  }
}
</style>
