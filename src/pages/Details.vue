<template>
  <div class="details">Details {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup: () => {
    const route = useRoute();
    const { id = '' } = route?.params;

    return {
      id,
    };
  },
});
</script>

<style lang="scss" scoped>
.details {
  font-size: 20px;
}
</style>
