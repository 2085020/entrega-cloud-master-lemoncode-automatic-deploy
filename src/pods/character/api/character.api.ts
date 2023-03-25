import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  return getFromGraphQL(`
  query {
    character(id:${id}) {
      id
      name
      image
      gender
      species
      origin {
        name
      }
      status
      location {
        name
      }
    }
  }
`);
};

const getFromGraphQL = async (query): Promise<CharacterEntityApi> => {
  return fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.character);
};

export const saveHotel = async (
  hotel: CharacterEntityApi
): Promise<boolean> => {
  return true;
};
