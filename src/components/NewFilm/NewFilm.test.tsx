import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it is rendered", () => {
    test("The it should show a label with name 'Título:", () => {
      const expectNameLabel = "Título:";

      render(<NewFilm />);
      const nameLabelTitleForm = screen.getByLabelText(expectNameLabel);

      expect(nameLabelTitleForm).toBeInTheDocument();
    });

    test("Then it should show a button with name 'Crear película'", () => {
      const expectNameButton = "Crear película";

      render(<NewFilm />);
      const buttonNewFilmForm = screen.getByRole("button", {
        name: expectNameButton,
      });

      expect(buttonNewFilmForm).toBeInTheDocument();
    });
  });

  describe("When user writes 'Moonlight', 'Barry Jenkins', 2016, 'https://pics.filmaffinity.com/moonlight-232276883-mmed.jpg'", () => {
    test("Then it should show 'Moonlight', 'Barry Jenkins', 2016, 'https://pics.filmaffinity.com/moonlight-232276883-mmed.jpg'", async () => {
      const expectTitleInputText = "Moonlight";
      const expectDirecctionInputText = "Barry Jenkins";
      const expectYearInput = "2016";
      const expectImageInputText =
        "https://pics.filmaffinity.com/moonlight-232276883-mmed.jpg";

      render(<NewFilm />);

      const titleTextBox = screen.getByLabelText("Título:") as HTMLInputElement;
      const directionTextBox = screen.getByLabelText(
        "Dirección:",
      ) as HTMLInputElement;
      const yearTextBox = screen.getByLabelText("Año:") as HTMLInputElement;
      const urlTextBox = screen.getByLabelText(
        "URL cartel:",
      ) as HTMLInputElement;

      await userEvent.type(titleTextBox, expectTitleInputText);
      await userEvent.type(directionTextBox, expectDirecctionInputText);
      await userEvent.type(yearTextBox, expectYearInput);
      await userEvent.type(urlTextBox, expectImageInputText);

      expect(titleTextBox.value).toBe(expectTitleInputText);
      expect(directionTextBox.value).toBe(expectDirecctionInputText);
      expect(yearTextBox.value).toBe(expectYearInput);
      expect(urlTextBox.value).toBe(expectImageInputText);
    });
  });
});
