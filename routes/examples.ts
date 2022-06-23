import { Get } from "cargo/http/mod.ts";

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
