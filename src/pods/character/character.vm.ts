export interface CharacterEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  specie: string;
  location: string;
}

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: '',
  name: '',
  description: '',
  picture: '',
  specie: '',
  location: '',
});
