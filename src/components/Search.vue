<template>
  <div class="search">
    <input type="text" placeholder="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup: () => {
    console.log('yo');
  },
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  max-width: 700px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #dcdcdc;

  @media (min-width: 900px) {
    max-width: 400px;
  }

  input {
    width: 100%;
    background-color: transparent;
    height: 100%;
    outline: none;
    border: none;
    padding: 0 16px;
    font-size: 1rem;
  }
}
</style>
