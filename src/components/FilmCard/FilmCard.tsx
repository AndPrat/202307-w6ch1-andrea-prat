import React from "react";
import { X } from "react-feather";
import { Film } from "../../types";
import Button from "../Button/Button";
import "./FilmCard.css";

interface FilmCardStructureProps {
  film: Film;
}

const FilmCard = ({
  film: { director, title, year, poster },
}: FilmCardStructureProps): React.ReactElement => {
  return (
    <article className="film">
      <h3>
        {title} ({year})
      </h3>
      <img
        className="film__poster"
        src={poster}
        alt="Cartel de 'Viaje a Darjeeling'"
        width="300"
        height="406"
      />
      <span>Dirección: {director}</span>
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
