import { bootstrap } from "cargo/mod.ts";

import cargoConfig from "config/cargo.ts";

const app = await bootstrap(cargoConfig);

/*
 * To apply middleware to the application
 * remove the comment from the following line.
 * app.middeleware([AddMiddlware])
 */

app.run();
