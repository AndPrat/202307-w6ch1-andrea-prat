import filmsData from "../../data/data";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  return (
    <ul className="films">
      <li>
        <FilmCard film={filmsData[0]} />
      </li>
    </ul>
  );
};

export default FilmsList;
