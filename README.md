npm run test:node  works as expected, the file "example.bif" is correctly imported with the plugin

npm run test:browser return an error, the file "example.bif" is not correctly imported with the plugin

error log:
[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .bif?arraybuffer file format, or if it's an asset, add "**/*.bif?arraybuffer" to `assetsInclude` in your configuration.
  Plugin: vite:import-analysis
