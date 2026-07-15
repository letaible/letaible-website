import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://letaible.de",
  build: { format: "directory", inlineStylesheets: "always" },
});
