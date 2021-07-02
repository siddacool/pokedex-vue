export const getAllPokemon = (): void => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
    .then((response) => response.json())
    .then((allpokemon: []) => {
      return allpokemon;
    });
};
