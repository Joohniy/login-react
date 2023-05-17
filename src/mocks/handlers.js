import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3000/login", (req, res, ctx) =>
    res(
      ctx.json([
        {
          email: "",
          senha: "",
        },
      ])
    )
  ),
];
