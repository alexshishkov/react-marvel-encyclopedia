export interface IHeroes {
  id: number;
  name: string;
  description: string;
  path: string;
  extension: string;
}

export interface IDataHeroes {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface IHeroInfo {
  name: string;
  description: string;
  path: string;
}
