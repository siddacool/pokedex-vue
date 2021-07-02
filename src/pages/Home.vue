<template>
  <div class="home">
    <h1 class="text-4xl pb-4 text-center">PokeDex</h1>
    <Search />
    <SearchResults />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePokemon } from 'store/pokemon';
import Search from 'components/Search.vue';
import SearchResults from 'components/SearchResults.vue';

export default defineComponent({
  setup: () => {
    const pokemon = usePokemon();

    onMounted(() => {
      pokemon.fetch();
    });

    return {
      pokemon,
    };
  },
  components: { Search, SearchResults },
});
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    align-items: center;
  }
}
</style>
