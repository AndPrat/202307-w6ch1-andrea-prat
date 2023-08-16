import { renderHook } from "@testing-library/react";
import { filmsListMock } from "../mocks/filmsMock";
import useFilmsApi from "./useFilmsApi";

describe("Given a getFilms function", () => {
  describe("When it is called", () => {
    test("Then it should show a list of films", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const filmsList = await getFilms();

      expect(filmsList).toStrictEqual(filmsListMock);
    });
  });
});
