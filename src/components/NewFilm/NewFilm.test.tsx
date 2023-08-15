import { render, screen } from "@testing-library/react";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it is rendered", () => {
    test("The it should show a label with name 'Título:", () => {
      const expectNameLabel = "Título:";

      render(<NewFilm />);
      const nameLabelTitleForm = screen.getByLabelText(expectNameLabel);

      expect(nameLabelTitleForm).toBeInTheDocument();
    });

    test("Then it should show button with name 'Crear película'", () => {
      const expectNameButton = "Crear película";

      render(<NewFilm />);
      const buttonNewFilmForm = screen.getByRole("button", {
        name: expectNameButton,
      });

      expect(buttonNewFilmForm).toBeInTheDocument();
    });
  });
});
