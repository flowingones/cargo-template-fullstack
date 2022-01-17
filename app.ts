import { bootstrap } from "./deps.ts";

const app = await bootstrap();

/*
 * To apply middleware to the application
 * remove the comment from the following line.
 * app.middeleware([AddMiddlware])
 */

app.run();
