//app server enry point
//ssr entry point

import { createRouter } from "./router";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";
import { getRouterManifest } from "@tanstack/start/router-manifest";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
