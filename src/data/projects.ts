import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** Alle gepubliceerde projecten, gesorteerd op `order`. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects", ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export const projectPath = (p: Project) => `/werk/${p.id}/`;
