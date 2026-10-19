import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Projecten — één Markdown-bestand per project in src/content/projects/.
 * De bestandsnaam wordt de URL: noord-atelier.md → /werk/noord-atelier/
 *
 * De tekst onder de frontmatter (de "body") is het verhaal achter het
 * project en verschijnt op de projectpagina onder "De uitdaging".
 * Hoe meer echte, specifieke tekst, hoe beter voor SEO.
 */
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    /** Optioneel: eigen <title> voor Google. Standaard: "Naam — Label | Jonas Bosch" */
    seoTitle: z.string().max(60).optional(),
    /** Meta description voor Google: 120–160 tekens werkt het best. */
    description: z.string().min(50).max(170),
    /** Korte tekst op de projectkaarten. */
    summary: z.string(),
    type: z.enum(["Klantproject", "Persoonlijk project"]),
    categories: z.array(z.enum(["webdesign", "webapp", "seo", "webshop"])).min(1),
    label: z.string(),
    tags: z.string(),
    year: z.number().int(),
    /** Volgorde op de site (laag = eerst). */
    order: z.number().default(100),
    /** true = ook op de homepage. */
    featured: z.boolean().default(false),
    /** true = verborgen (nog niet af). */
    draft: z.boolean().default(false),
    domain: z.string(),
    live: z.string().nullable().default(null),
    visual: z.enum(["shop", "app", "serp", "pdp"]),
    palette: z.object({ c1: z.string(), c2: z.string(), c3: z.string() }),
    screen: z.object({ brand: z.string().optional(), title: z.string().optional() }).optional(),
    role: z.string(),
    duration: z.string(),
    services: z.array(z.string()),
    stack: z.array(z.string()),
    approach: z.array(z.string()).min(1),
    /** Alleen echte, meetbare resultaten. */
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    quote: z.object({ text: z.string(), author: z.string() }).nullable().default(null),
  }),
});

export const collections = { projects };
