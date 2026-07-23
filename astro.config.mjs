import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://letaible.de",
  integrations: [sitemap()],
  build: { format: "directory", inlineStylesheets: "always" },
});
