<template>
  <div class="home">
    <h1>PokeDex</h1>
    <Search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from 'components/Search.vue';

export default defineComponent({
  setup: () => {
    console.log('yo');
  },
  components: { Search },
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

  h1 {
    text-align: center;
  }
}
</style>
