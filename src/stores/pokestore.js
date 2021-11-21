import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async() => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  const json = await response.json();
  const loadedPokemon = json.results.map((data, index) => {
      return {
        id: index + 1,
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }
  });
  pokemon.set(loadedPokemon);
}

fetchPokemon();