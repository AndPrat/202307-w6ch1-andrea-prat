import { useContext, useEffect } from "react";
import Count from "../../components/Count/Count";
import FilmsList from "../../components/FilmsList/FilmsList";
import FilmsContext from "../../components/store/films/context/FilmContext";

const FilmsListPage = (): React.ReactElement => {
  const { loadFilms } = useContext(FilmsContext);

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  return (
    <>
      <h2>Listado de películas</h2>
      <Count />
      <FilmsList />
    </>
  );
};

export default FilmsListPage;
