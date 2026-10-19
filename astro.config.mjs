// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Pas dit aan zodra je een eigen domein hebt (bijv. https://jonasbosch.nl).
  // Wordt gebruikt voor canonical-URL's, Open Graph en de sitemap.
  site: "https://boschh.netlify.app",
  trailingSlash: "always",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // Lettertypes worden bij het bouwen gedownload en vanaf je eigen domein geserveerd
  // (sneller dan Google Fonts en zonder dat bezoekersdata naar Google gaat).
  fonts: [
    {
      name: "Instrument Serif",
      cssVariable: "--font-serif",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      name: "Inter Tight",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
