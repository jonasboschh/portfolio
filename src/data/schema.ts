/**
 * Gestructureerde data (schema.org, JSON-LD). Helpt Google begrijpen wie je
 * bent, wat je aanbiedt en hoe pagina's samenhangen. Alleen echte gegevens!
 */
import { SITE, socialLinks } from "./site";

export const siteUrl = (site: URL | undefined, path = "/") => new URL(path, site).href;

export function personSchema(site: URL | undefined) {
  return {
    "@type": "Person",
    "@id": siteUrl(site, "/#person"),
    name: SITE.name,
    url: siteUrl(site),
    jobTitle: SITE.jobTitle,
    email: `mailto:${SITE.email}`,
    knowsAbout: ["Webdesign", "Webontwikkeling", "Zoekmachineoptimalisatie", "E-commerce", "Astro", "React", "Shopify"],
    sameAs: socialLinks().map(([, url]) => url),
  };
}

export function homeSchema(site: URL | undefined) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": siteUrl(site, "/#website"),
        url: siteUrl(site),
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.lang,
        publisher: { "@id": siteUrl(site, "/#person") },
      },
      personSchema(site),
      {
        "@type": "ProfessionalService",
        "@id": siteUrl(site, "/#service"),
        name: `${SITE.name} — Webdesign & development`,
        url: siteUrl(site),
        description: SITE.description,
        email: SITE.email,
        founder: { "@id": siteUrl(site, "/#person") },
        areaServed: [{ "@type": "Country", name: "Nederland" }, { "@type": "Country", name: "België" }],
        serviceType: [...SITE.services],
        knowsLanguage: ["nl", "en"],
      },
    ],
  };
}

export function breadcrumbSchema(site: URL | undefined, items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: siteUrl(site, path),
    })),
  };
}
