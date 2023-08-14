export interface Film {
  id: number;
  title: string;
  poster: string;
  director: string;
  year: number;
}

export interface FilmContextStructure {
  films: Film[];
}
