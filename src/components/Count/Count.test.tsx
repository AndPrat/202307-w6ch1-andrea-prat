import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { filmsListMock } from "../../mocks/filmsMock";
import FilmsContext from "../store/films/context/FilmContext";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When it is rendered", () => {
    test("Then it shoud show the number of total films list", () => {
      const expectTotalNumber = `Listando ${filmsListMock.length} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmsContext.Provider value={{ films: filmsListMock, loadFilms }}>
          <Count />
        </FilmsContext.Provider>,
      );

      const numberFilms = screen.getByText(expectTotalNumber);

      expect(numberFilms).toBeInTheDocument();
    });
  });
});
