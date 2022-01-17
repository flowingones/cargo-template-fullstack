import { Get, Page } from "../deps.ts";
import { Home } from "../pages/Home.tsx";

/*
 * Add your api routes to this file.
 */
Get("/message", () => {
  return new Response(JSON.stringify({ message: "Welcome to Cargo" }), {
    headers: {
      "content-type": "application/json",
    },
  });
});

Page("/", Home());
