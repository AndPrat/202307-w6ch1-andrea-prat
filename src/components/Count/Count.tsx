import { useContext } from "react";
import FilmsContext from "../store/films/context/FilmContext";

const Count = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return <span className="count">Listando {films.length} películas</span>;
};

export default Count;
