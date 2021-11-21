<script context='module'>
    export async function load(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        const json = await response.json();
        const loadedPokemon = json.results.map((data, index) => {
            return {
                id: index + 1,
                name: data.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            }
        });

        return {
            props: {
                pokemon: loadedPokemon
            }
        }
    }
</script>
<script>
    import {onMount} from 'svelte';

    import PokemanCard from '../components/pokemanCard.svelte';
    import Loading from '../components/Loading.svelte';
    export let pokemon;

    let searchTerm = '';
    let filteredPokemons = [];
    let loading = false;

    $: {
        if(searchTerm) {
            filteredPokemons = pokemon.filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemons = [...pokemon];
        }
    }
</script>
<svelte:head>
    <title>Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center uppercase my-8">SvelteKit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="search" bind:value="{searchTerm}" name="" placeholder="Search pokemon" id="">
<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
    {#if !filteredPokemons}
        <Loading />
    {:else}
        {#each filteredPokemons as pokemon}
            <PokemanCard pokeman="{pokemon}" />
        {/each}
    {/if}
</div>
