<template>
  <li>
    <router-link
      :to="{ name: 'Details', params: { id: name } }"
      class="block p-2 hover:bg-gray-200 first:pt-4 last:pb-4"
    >
      {{ name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
    url: String,
  },
  setup() {},
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
