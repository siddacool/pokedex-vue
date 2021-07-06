import { defineStore } from 'pinia';
import { PokemonDetails } from 'constants/types';

interface IsState {
  isFetching: boolean;
  data: PokemonDetails;
}

export const usePokemonDetails = defineStore({
  id: 'pokemon-details',
  state(): IsState {
    return {
      isFetching: false,
      data: {},
    };
  },
  actions: {
    fetch: async function (id: string | string[]) {
      this.isFetching = true;

      const details = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const { id: idFromDetails } = details;
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idFromDetails}.svg`;

      details.image = image;

      this.data = details;
      this.isFetching = false;
    },
  },
});
