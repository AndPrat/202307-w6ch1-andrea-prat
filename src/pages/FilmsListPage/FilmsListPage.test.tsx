import { render, screen } from "@testing-library/react";
import { FilmsContextProvider } from "../../components/store/films/context/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmsListPage Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading 'Listado de películas'", () => {});
    const expectedTitle = "Listado de películas";

    render(
      <FilmsContextProvider>
        <FilmsListPage />
      </FilmsContextProvider>,
    );
    const titleHeading = screen.getByRole("heading", {
      name: expectedTitle,
    });

    expect(titleHeading).toBeInTheDocument();
  });
});
