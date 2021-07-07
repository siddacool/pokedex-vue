<template>
  {{ nameComputed[0] }}<b>{{ search }}</b
  >{{ nameComputed[1] }}
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

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
    search: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const nameComputed = computed(() =>
      getFilteredName(props.search, props.name),
    );

    return {
      nameComputed,
    };
  },
});
</script>
