<template>
  <div class="details">
    <Box class="text-center">
      <BackButton />
      <div>
        {{ id }}
      </div>

      {{ details }}
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Box from 'components/Box.vue';
import BackButton from 'components/BackButton.vue';
import { usePokemonDetails } from 'store/pokemon-details';

export default defineComponent({
  setup: () => {
    const route = useRoute();
    const { id = '' } = route?.params;
    const pokemonDetails = usePokemonDetails();
    let details = ref({});

    onMounted(() => {
      pokemonDetails.fetch(id);

      details.value = pokemonDetails.data;
    });

    console.log(pokemonDetails);

    return {
      id,
      details,
    };
  },
  components: { Box, BackButton },
});
</script>

<style lang="scss" scoped>
.details {
  font-size: 20px;
}
</style>
