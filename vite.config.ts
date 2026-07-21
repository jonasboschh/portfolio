import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { sitemapPlugin } from "@corentints/tanstack-router-sitemap";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    netlify(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    sitemapPlugin({
      baseUrl: "https://boschh.netlify.app/",
      outputPath: "public/sitemap.xml",
      routes: [{ path: "/", priority: 1.0 }],
    }),
  ],
});

export default config;
