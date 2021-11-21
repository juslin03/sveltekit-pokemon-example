<script context="module">
    export async function load({page}) {
        const {id} = page.params;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman = await res.json();

        return {
            props: {
                pokeman
            }
        }
    }
</script>

<script>
    export let pokeman;
</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl uppercase text-center my-8">{pokeman.name}</h1>
<p>
    Type: <strong>{pokeman.types[0].type.name}</strong> | 
    Height: <strong>{pokeman.height}</strong> |
    Weight: <strong>{pokeman.weight}</strong>
</p>
<img src="{pokeman.sprites['front_default']}" alt="{pokeman.name}">
</div>
