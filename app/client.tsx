//app client entry point
//Helps with client side hydration

import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";
import { hydrateRoot } from "react-dom/client";

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
