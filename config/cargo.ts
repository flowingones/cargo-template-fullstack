import { autoloadAssets, autoloadRoutes } from "cargo/http/mod.ts";
import { setupTwind, TwindIntegration } from "twind/cargo/mod.ts";
import { autoloadPages } from "nano/tasks/mod.ts";
import { routes } from "../.routes.ts";

export default {
  tasks: {
    onBootstrap: [
      // Add tasks here
      autoloadAssets("assets"),
      setupTwind({}),
      autoloadRoutes('routes'),
      autoloadPages(routes, {
        cssIntegration: TwindIntegration,
      }),
    ],
  },
};