import { rest } from "msw";
import { filmsListMock } from "./filmsMock";

export const handlers = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.json(filmsListMock));
  }),
];

export const handlersError = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
