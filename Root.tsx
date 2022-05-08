/** @jsx tag */

import { tag } from "./deps.ts";

export function Root(props: JSX.ElementProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="icon" href="/assets/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to your Cargo Website!</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
