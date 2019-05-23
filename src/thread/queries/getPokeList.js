import gql from 'graphql-tag';

const POKEMON_LIST_Q = gql`
  query PokemonList($name: String, $shiny: Boolean) {
    pokemons(where: { name_contains: $name, shinyAvailable: $shiny }) {
      ... on Pokemon {
        name
        pokeId
        pokemonType
        pokemonSecondaryType
        status
        shinyAvailable
      }
    }
  }
`;

export default POKEMON_LIST_Q;
