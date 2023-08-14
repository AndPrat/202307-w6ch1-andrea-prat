import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("When a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should contain a Link with content 'Listado de películas' and another one with 'Añadir película'", () => {
      const expectedListFilmsText = "Listado de películas";
      const expectedAddFilmText = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
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
