import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  picture: character.image,
  name: character.name,
  description: `${character.name} is a ${character.gender} ${character.species} originary from ${character.origin.name}. Is ${character.status}.`,
  specie: character.species,
  location: character.location.name
});
