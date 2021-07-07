<template>
  <router-link
    :to="{ name: 'Details', params: { id } }"
    class="block p-2 hover:bg-gray-200 first:pt-4 last:pb-4"
  >
    <SearchResultName :name="name" :search="search.term" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useSearch } from 'store/search';
import SearchResultName from 'components/SearchResultName.vue';

const getIdFromUrl = (url: string) =>
  url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
  components: {
    SearchResultName,
  },
  setup(props) {
    const id = getIdFromUrl(props.url);

    const search = useSearch();

    return {
      id,
      search,
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
