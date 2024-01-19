import { nodeConfig } from "./setup_vitest.mjs";
import { startVitest } from "vitest/node";

startVitest("test", undefined, undefined, nodeConfig);
