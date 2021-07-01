<template>
  <div class="details">Details</div>
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
.details {
  font-size: 20px;
}
</style>
