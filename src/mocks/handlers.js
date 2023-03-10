import { rest } from "msw";
import { data } from "./data";

let poems = data;

export const handlers = [
  rest.get("http://localhost:8004/poems", (req, res, ctx) => {
    return res(ctx.json(poems));
  }),
  rest.post("http://localhost:8004/poems", (req, res, ctx) => {
    const id = poems[poems.length - 1]?.id + 1 || 1;
    const question = { id, ...req.body };
    poems.push(question);
    return res(ctx.json(question));
  })
];
