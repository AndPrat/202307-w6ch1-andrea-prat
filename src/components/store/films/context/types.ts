import { FilmStructure } from "../../../../types";

export interface FilmContextStructure {
  films: FilmStructure[];
  loadFilms: () => Promise<void>;
}
