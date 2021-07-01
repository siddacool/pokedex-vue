<template>
  <div class="home">Home <Hello /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hello from 'components/Hello.vue';

export default defineComponent({
  setup: () => {
    console.log('yo');
  },
  components: { Hello },
});
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
}
</style>
