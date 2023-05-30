export const pokemons = async (
  _: any,
  __: any,
  { clients: { pokemon: pokemonClient } }: Context
) => {
  try {
    const data = await pokemonClient.get()

    return data.results
  } catch (error) {
    return null
  }
}
