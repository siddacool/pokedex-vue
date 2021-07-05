import { defineStore } from 'pinia';
import { Pokemon } from 'constants/types';

interface IsState {
  isFetching: boolean;
  data: Pokemon[];
}

export const usePokemon = defineStore({
  id: 'pokemon',
  state(): IsState {
    return {
      isFetching: false,
      data: [],
    };
  },
  actions: {
    fetch: async function () {
      this.isFetching = true;

      const list = await fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
        .then((response) => response.json())
        .then(({ results = [] }) => {
          return results;
        });

      this.data = list;
      this.isFetching = false;
    },
  },
});
