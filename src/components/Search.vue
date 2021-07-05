<template>
  <div class="search h-12 overflow-hidden rounded-md border-gray-300 border">
    <input
      type="text"
      placeholder="search"
      class="h-full w-full outline-none p-3"
      :disabled="pokemon.isFetching"
      @input="fireSearch"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePokemon } from 'store/pokemon';
import { useSearch } from 'store/search';

export default defineComponent({
  setup: () => {
    const pokemon = usePokemon();
    const search = useSearch();
    const value = ref('');

    const fireSearch = () => {
      search.fireSearch(value.value);
    };

    return {
      pokemon,
      fireSearch,
      value,
    };
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
