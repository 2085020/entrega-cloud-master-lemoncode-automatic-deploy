export interface CharacterSearchApi {
  info:Info,
  results: CharacterEntityApi[];
}

export interface Info {
  count:number;
  pages:number;
  next:number;
  prev:number;
}
export interface CharacterEntityApi {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
