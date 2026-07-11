# PixelForge Studio

Portfolio/agency site for PixelForge Studio, built with [TanStack Start](https://tanstack.com/start) (React, SSR, file-based routing) and [Motion](https://motion.dev) for animation.

## Stack

- **TanStack Start** — SSR + file-based routing, so the homepage and every case study (`/werk/$slug`) are real, crawlable, individually-titled pages instead of a client-only overlay.
- **Tailwind CSS v4** — design tokens (colors, fonts) defined in `src/styles.css` via `@theme`.
- **Motion** (`motion/react`) — scroll reveals, page transitions, marquee, testimonial crossfade.
- **Biome** — lint + format.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also emits the Netlify function)
npm run check    # biome lint + format check
```

## Editing content

All copy — services, case studies, testimonials, contact details — lives in one place:
[`src/data/content.ts`](src/data/content.ts). Case studies are keyed by `slug`, which
also becomes the URL (`/werk/<slug>`) and drives `public/sitemap.xml`, so add/rename
entries in both places together.

## Deployment

Configured for Netlify via `@netlify/vite-plugin-tanstack-start` (see `netlify.toml`).
Push to the connected branch, or run `netlify deploy`.
