import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Películas' inside the 'heading'", () => {
      const expectedTitle = "Películas";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const filmsTitle = screen.getByText(expectedTitle);

      expect(filmsTitle).toBeInTheDocument();
    });
  });
});
