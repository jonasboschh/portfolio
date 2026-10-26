/**
 * Centrale gegevens van de site. Pas hier je naam, e-mail, socials enz. aan —
 * ze worden overal gebruikt (meta-tags, gestructureerde data, footer, contact).
 */
export const SITE = {
  name: "Jonas Bosch",
  title: "Jonas Bosch — Webdesign, webapplicaties, SEO & webshops",
  description:
    "Webdesigner en developer in België. Ik ontwerp en bouw snelle, vindbare websites, webapplicaties en webshops voor bedrijven die willen groeien.",
  jobTitle: "Webdesigner & developer",
  lang: "be",
  locale: "be_BE",
  // Let op: dit e-mailadres is een voorbeeld — vervang het door je echte adres.
  email: "hallo@jonasbosch.nl",
  country: "BE",
  region: "Vlaanderen",
  // kvk: "00000000",
  googleSiteVerification: "P16xafW5KFcSXE5WkqQcvat0o2qaSmKUWx_rWwF6ehc",
  // Laat leeg ("") wat je niet hebt; lege links worden nergens getoond.
  socials: {
    linkedin: "https://www.linkedin.com/in/jonas-bosch-050057218",
    github: "https://github.com/jonasboschh",
    dribbble: "",
    instagram: "https://www.instagram.com/jonasboschh/",
  },
  services: [
    "Webdesign",
    "Webapplicaties",
    "Zoekmachineoptimalisatie (SEO)",
    "Webshops",
  ],
} as const;

export const CATEGORY_LABELS = {
  webdesign: "Webdesign",
  webapp: "Webapps",
  seo: "SEO",
  webshop: "Webshops",
} as const;

export const socialLinks = () =>
  (
    [
      ["LinkedIn", SITE.socials.linkedin],
      ["GitHub", SITE.socials.github],
      ["Dribbble", SITE.socials.dribbble],
      ["Instagram", SITE.socials.instagram],
    ] as const
  ).filter(([, url]) => url);
