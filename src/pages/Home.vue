<template>
  <div class="home">Home</div>
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
.home {
  font-size: 18px;
}
</style>
