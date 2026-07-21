import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /.next
Sitemap: https://boschh.netlify.app/sitemap.xml`;

        return new Response(robots, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400", // 24 uur
          },
        });
      },
    },
  },
});
