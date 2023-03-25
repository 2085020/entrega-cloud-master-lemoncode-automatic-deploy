import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  ...character,
  id: character.id,
  picture: character.image,
  name: character.name,
  description: `${character.name} is a ${character.gender} ${character.species} originary from ${character.origin.name}. Is ${character.status}.`,
  specie: character.species,
  location: character.location.name
});

export const mapCharacterFromVmToApi = (character: viewModel.CharacterEntityVm): apiModel.CharacterEntityApi =>
  (({
    ...character,
    id: character.id,
    image: character.picture,
    name: character.name,
    species: character.specie,
    location: character.location
  } as unknown) as apiModel.CharacterEntityApi);
