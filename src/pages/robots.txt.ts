import type { APIRoute } from "astro";

// Wordt bij het bouwen omgezet naar /robots.txt, met de juiste sitemap-URL.
export const GET: APIRoute = ({ site }) => {
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${new URL("sitemap-index.xml", site).href}`, ""].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
