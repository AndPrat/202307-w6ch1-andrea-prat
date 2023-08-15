import { useCallback } from "react";
import { FilmStructure } from "../types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_FILMS_URL;

  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const result = (await response.json()) as FilmStructure[];

      return result;
    } catch {
      throw new Error("Films not found");
    }
  }, [apiUrl]);

  return { getFilms };
};

export default useFilmsApi;
