import { browserConfig } from "./setup_vitest.mjs";
import { startVitest } from "vitest/node";

startVitest("test", undefined, undefined, browserConfig);
