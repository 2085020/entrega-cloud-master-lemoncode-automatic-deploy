import { CharacterSearchApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (page): Promise<
CharacterSearchApi
> => {
  return getFromGraphQL(`{
    characters (page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
      results {
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
  }`);
};

const getFromGraphQL = async (query): Promise<CharacterSearchApi> => {
  return fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  }).then((res) => res.json())
  .then((res) => res.data.characters);
};
