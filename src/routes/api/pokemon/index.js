export async function get({params}) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    const json = await response.json();
    const pokemon = json.results.map((data, index) => {
        return {
            id: index + 1,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }
    });

    return {
        status: 200,
        body: pokemon,
    }

  } catch (error) {
    return {
        status: 500,
        body: error.message,
    }
  }
}