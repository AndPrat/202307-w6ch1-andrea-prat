import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FilmsContextProvider } from "../store/films/context/FilmsContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Películas' inside the 'heading'", () => {
      const expectedTitle = "Películas";

      render(
        <BrowserRouter>
          <FilmsContextProvider>
            <App />
          </FilmsContextProvider>
        </BrowserRouter>,
      );

      const filmsTitle = screen.getByText(expectedTitle);

      expect(filmsTitle).toBeInTheDocument();
    });

    test("Then it should contain a Link with content 'Listado de películas' and another one with 'Añadir película'", () => {
      const expectedListFilmsText = "Listado de películas";
      const expectedAddFilmText = "Añadir película";

      render(
        <BrowserRouter>
          <FilmsContextProvider>
            <App />
          </FilmsContextProvider>
        </BrowserRouter>,
      );

      const ListFilmsLink = screen.getByRole("link", {
        name: expectedListFilmsText,
      });
      const AddFilmLink = screen.getByRole("link", {
        name: expectedAddFilmText,
      });

      expect(ListFilmsLink).toBeInTheDocument();
      expect(AddFilmLink).toBeInTheDocument();
    });
  });
});
