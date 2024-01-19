
import { defineConfig } from "vitest/config";
import { promises } from "node:fs"

// just a plugin to read binary file
function vitePluginArraybuffer() {
  return {
    name: "vite-plugin-arraybuffer",
    async transform(_src, id) {
      if (id.endsWith("?arraybuffer")) {
        return `export default new Uint8Array([
          ${new Uint8Array(await promises.readFile(id.slice(0, -12)))}
        ]).buffer`;
      }
      return;
    },
  };
}

const createConfig = (isBrowser) => {
  return defineConfig({
    plugins: [vitePluginArraybuffer()],
    test: {
      include: [
        "**/test1.js",
      ],
      browser: {
        enabled: isBrowser,
        name: "chrome",
      }
    },
  })
}

export const browserConfig = createConfig(true)
export const nodeConfig = createConfig(false) 

