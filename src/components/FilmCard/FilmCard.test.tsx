import { render, screen } from "@testing-library/react";
import { filmMock } from "../../mocks/filmsMock";
import { FilmsContextProvider } from "../store/films/context/FilmsContextProvider";
import FilmCard from "./FilmCard";

describe("Given a FilmCard component", () => {
  describe("When it rendered", () => {
    test("Then it should show 'Viaje a Darjeeling (2007)' inside the 'heading' ", () => {});
    const expectHeadingText = "Viaje a Darjeeling (2007)";

    render(
      <FilmsContextProvider>
        <FilmCard film={filmMock} />
      </FilmsContextProvider>,
    );

    const titleHeading = screen.getByRole("heading", {
      name: expectHeadingText,
    });

    expect(titleHeading).toBeInTheDocument();
  });
});
