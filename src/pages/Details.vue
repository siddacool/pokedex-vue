<template>
  <div class="details">
    <Box class="text-center">
      <BackButton />

      <DetailsCard
        :name="pokemonDetails.data.name"
        :image="pokemonDetails.data.image"
      />
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Box from 'components/Box.vue';
import BackButton from 'components/BackButton.vue';
import DetailsCard from 'components/DetailsCard.vue';
import { usePokemonDetails } from 'store/pokemon-details';

export default defineComponent({
  components: { Box, BackButton, DetailsCard },
  setup: () => {
    const route = useRoute();
    const { id = '' } = route?.params;
    const pokemonDetails = usePokemonDetails();

    onMounted(() => {
      pokemonDetails.fetch(id);
    });

    return {
      id,
      pokemonDetails,
    };
  },
});
</script>

<style lang="scss" scoped>
.details {
  font-size: 20px;
}
</style>
