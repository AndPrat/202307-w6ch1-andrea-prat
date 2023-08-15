import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../../hooks/useFilmsApi";
import { FilmStructure } from "../../../../types";
import FilmsContext from "./FilmContext";
import { FilmContextStructure } from "./types";

export const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<FilmStructure[]>([]);
  const { getFilms } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilms();
    setFilms([...apiFilms]);
  }, [getFilms]);

  const filmContextValue = useMemo(
    (): FilmContextStructure => ({
      films,
      loadFilms,
    }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};
