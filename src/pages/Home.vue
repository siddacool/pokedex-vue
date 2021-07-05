<template>
  <div class="home">
    <Search />
    <SearchResults />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePokemon } from 'store/pokemon';
import { useSearch } from 'store/search';
import Search from 'components/Search.vue';
import SearchResults from 'components/SearchResults.vue';

export default defineComponent({
  setup: () => {
    const pokemon = usePokemon();
    const search = useSearch();

    onMounted(() => {
      search.clearSearch();
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
