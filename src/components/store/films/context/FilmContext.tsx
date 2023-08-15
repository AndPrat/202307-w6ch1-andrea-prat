import { createContext } from "react";
import { FilmContextStructure } from "./types";

const FilmsContext = createContext<FilmContextStructure>(
  {} as FilmContextStructure,
);

export default FilmsContext;
