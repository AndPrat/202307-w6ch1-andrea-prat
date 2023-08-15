import React, { useContext } from "react";
import FilmCard from "../FilmCard/FilmCard";
import FilmsContext from "../store/films/context/FilmContext";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return (
    <ul className="films">
      {films.map((films) => (
        <li key={films.id}>
          <FilmCard film={films} />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
