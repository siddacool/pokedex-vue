<template>
  <div
    class="
      details-card
      mt-8
      p-2
      bg-white
      mx-auto
      text-center
      overflow-hidden
      rounded-md
      border-gray-300 border
    "
  >
    <img :src="image" :alt="name" class="inline-block" />
    <h2 class="capitalize mt-4">
      {{ name }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.details-card {
  max-width: 400px;
}
</style>
