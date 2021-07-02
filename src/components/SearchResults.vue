<template>
  <ul
    class="
      search-result
      bg-white
      mt-2
      overflow-hidden
      rounded-md
      border-gray-300 border
    "
    v-show="pokemon.length"
  >
    <SearchResult
      v-for="poke in pokemon"
      :key="poke.name"
      :name="poke.name"
      :url="poke.url"
    />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePokemon } from 'store/pokemon';
import { useSearch } from 'store/search';
import { PokemonDetails } from 'constants/types';
import SearchResult from 'components/SearchResult.vue';

const getFilteredPokemon = (
  search = '',
  data: PokemonDetails[] = [],
): PokemonDetails[] => {
  if (search.trim() === '') {
    return [];
  }

  const list = data.filter((d: PokemonDetails) =>
    d.name.toLowerCase().startsWith(search.toLowerCase()),
  );

  return list;
};

export default defineComponent({
  setup: () => {
    const pokemon = usePokemon();
    const search = useSearch();
    const pokemonComputed = computed(() =>
      getFilteredPokemon(search.term, pokemon.data),
    );
    return {
      pokemon: pokemonComputed,
      search,
    };
  },
  components: { SearchResult },
});
</script>

<style lang="scss" scoped>
.search-result {
  width: 100%;
  max-width: 700px;

  @media (min-width: 900px) {
    max-width: 400px;
  }
}
</style>
