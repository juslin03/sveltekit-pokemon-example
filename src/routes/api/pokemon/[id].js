export async function get({params: {id}}) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await response.json();

    return {
        status: 200,
        body: pokeman,
    }

  } catch (error) {
    return {
        status: 500,
        body: error.message,
    }
  }
}