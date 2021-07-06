<template>
  <router-link
    :to="{ name: 'Details', params: { id } }"
    class="block p-2 hover:bg-gray-200 first:pt-4 last:pb-4"
  >
    {{ nameComputed[0] }}<b>{{ search.term }}</b
    >{{ nameComputed[1] }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useSearch } from 'store/search';

const getFilteredName = (search = '', name = '') => {
  const nameReplaced = name.replace(search, '__');

  return nameReplaced.split('__');
};

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
  setup(props) {
    const id = props.url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');

    const search = useSearch();

    const nameComputed = computed(() =>
      getFilteredName(search.term, props.name),
    );

    return {
      id,
      nameComputed,
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
