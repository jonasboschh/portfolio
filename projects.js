/* ==========================================================
   Alle projecten — één plek om je werk te beheren.

   Nieuw project toevoegen? Kopieer een blok, pas de velden aan
   en het verschijnt automatisch op werk.html én krijgt een eigen
   pagina op project.html#<slug>.

   LET OP: de projecten hieronder zijn VOORBEELDEN. Vervang ze door
   je eigen werk voordat de site live gaat.

   Velden:
   slug        unieke naam voor de URL (kleine letters, streepjes)
   name        projectnaam
   type        "Klantproject" of "Persoonlijk project"
   categories  één of meer van: webdesign, webapp, seo, webshop
   label       korte categorie die op de kaart staat
   tags        platform / disciplines
   year        jaartal
   featured    true = ook op de homepage (de homepage-kaarten staan in index.html)
   domain      wat in de adresbalk van het mockup staat
   live        link naar de live site, of null
   visual      mockup-type: "shop", "app", "serp" of "pdp"
   palette     kleuren van het mockup: c1 (donker), c2 (accent), c3 (licht)
   screen      tekst in het mockup (alleen voor shop/pdp)
   summary     één of twee zinnen voor de kaart
   role, duration, services, stack   feiten op de projectpagina
   challenge   de uitdaging (alinea)
   approach    stappen van de aanpak
   results     [{ value, label }] — alleen echte, meetbare resultaten!
   quote       { text, author } of null
   ========================================================== */

window.PROJECTS = [
  {
    slug: "noord-atelier",
    name: "Noord Atelier",
    type: "Klantproject",
    categories: ["webshop", "seo"],
    label: "Webshop",
    tags: "Shopify Plus · SEO",
    year: 2026,
    featured: true,
    domain: "noordatelier.nl",
    live: null,
    visual: "shop",
    palette: { c1: "#2B2620", c2: "#C9B79C", c3: "#EFE7DA" },
    screen: { brand: "NOORD", title: "Gemaakt om<br>in te leven." },
    summary: "De webshop van een ambachtelijk meubelmerk opnieuw opgebouwd rond verhaal en snelheid — van catalogus naar showroom waar mensen écht kopen.",
    role: "Design & development",
    duration: "10 weken",
    services: ["Webshop", "UX-design", "Technische SEO"],
    stack: ["Shopify Plus", "Liquid", "Figma"],
    challenge: "Noord Atelier maakt meubels die jaren meegaan, maar de oude webshop voelde als een catalogus: trage pagina's, kleine foto's en geen verhaal. Bezoekers kwamen binnen via Google en vertrokken weer voordat ze het vakmanschap zagen.",
    approach: [
      "Interviews met het team en klanten om te begrijpen waarom mensen uiteindelijk wél kopen.",
      "Nieuwe productpagina's waarin materiaal, maker en maatvoering centraal staan.",
      "Een snelle, lichte Shopify-theme gebouwd vanaf nul, zonder overbodige apps.",
      "Technische SEO en collectiepagina's die aansluiten op hoe mensen zoeken."
    ],
    results: [
      { value: "+68%", label: "conversieratio" },
      { value: "1,1s", label: "laadtijd (LCP)" },
      { value: "2,4×", label: "organische omzet in 9 maanden" }
    ],
    quote: null
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    type: "Klantproject",
    categories: ["webapp"],
    label: "Webapplicatie",
    tags: "Productdesign · React",
    year: 2025,
    featured: true,
    domain: "app.ledgerly.nl",
    live: null,
    visual: "app",
    palette: { c1: "#0F1B2D", c2: "#4F7CFF", c3: "#E8EEFF" },
    summary: "Een klantportaal ontworpen en gebouwd waarmee accountantskantoren de maand in uren afsluiten in plaats van dagen.",
    role: "Productdesign & front-end",
    duration: "4 maanden",
    services: ["Webapplicatie", "Productdesign", "Front-end development"],
    stack: ["React", "TypeScript", "Node.js", "Figma"],
    challenge: "Accountants en hun klanten wisselden documenten uit via e-mail en losse spreadsheets. Elke maandafsluiting betekende dagen najagen, kopiëren en controleren.",
    approach: [
      "Het huidige proces in kaart gebracht met drie kantoren en hun klanten.",
      "Een portaal ontworpen rond één overzicht: wat ontbreekt er nog, en bij wie?",
      "Gebouwd in React met herbruikbare componenten, zodat het team zelf verder kan.",
      "Wekelijks getest met echte gebruikers en op basis daarvan bijgestuurd."
    ],
    results: [
      { value: "−71%", label: "supporttickets" },
      { value: "4,8/5", label: "gebruikerstevredenheid" }
    ],
    quote: null
  },
  {
    slug: "vos-partners",
    name: "Vos & Partners",
    type: "Klantproject",
    categories: ["webdesign", "seo"],
    label: "Website + SEO",
    tags: "Strategie · Content",
    year: 2025,
    featured: true,
    domain: "vospartners.nl",
    live: null,
    visual: "serp",
    palette: { c1: "#1D2A22", c2: "#B8C9A6", c3: "#F1F3EC" },
    summary: "Een middelgroot advocatenkantoor online opnieuw gepositioneerd en naar de top van lokale zoekresultaten gebracht.",
    role: "Webdesign & SEO",
    duration: "8 weken + doorlopend",
    services: ["Webdesign", "SEO", "Contentstrategie"],
    stack: ["WordPress", "Search Console", "GA4"],
    challenge: "Een sterk kantoor met een zwakke online aanwezigheid: een verouderde site die nauwelijks gevonden werd op de rechtsgebieden waar het kantoor het meest waardevol is.",
    approach: [
      "Zoekwoordonderzoek per rechtsgebied en regio.",
      "Een nieuwe sitestructuur met een eigen pagina per specialisme.",
      "Een rustig, betrouwbaar design dat vertrouwen wekt bij een eerste bezoek.",
      "Maandelijkse rapportage en doorlopende contentverbetering."
    ],
    results: [
      { value: "3,1×", label: "organisch verkeer" },
      { value: "+42", label: "gekwalificeerde leads per maand" }
    ],
    quote: null
  },
  {
    slug: "bloom-botanics",
    name: "Bloom Botanics",
    type: "Klantproject",
    categories: ["webshop", "seo"],
    label: "Webshop",
    tags: "WooCommerce → Headless",
    year: 2024,
    featured: true,
    domain: "bloombotanics.nl",
    live: null,
    visual: "pdp",
    palette: { c1: "#3A1F2B", c2: "#E9A5A0", c3: "#FBEDEA" },
    screen: { title: "Rozenbottel<br>Nachtserum" },
    summary: "Een snelgroeiend skincaremerk gemigreerd naar een headless webshop zonder rankings te verliezen — en de productpagina herontworpen.",
    role: "Development & migratie",
    duration: "12 weken",
    services: ["Webshop", "Migratie", "Technische SEO"],
    stack: ["Next.js", "WooCommerce API", "Vercel"],
    challenge: "De WooCommerce-shop werd te traag voor het groeiende aantal bezoekers, maar een migratie mocht de goede posities in Google niet in gevaar brengen.",
    approach: [
      "Volledige inventarisatie van alle URL's, redirects en structured data.",
      "Een headless front-end in Next.js, met WooCommerce als beheeromgeving.",
      "Herontwerp van de productpagina, waar het grootste deel van de omzet binnenkomt.",
      "Gefaseerde livegang met monitoring van rankings en conversie."
    ],
    results: [
      { value: "+34%", label: "gemiddelde orderwaarde" },
      { value: "0", label: "rankings verloren bij migratie" },
      { value: "−48%", label: "verlaten winkelwagens" }
    ],
    quote: null
  },
  {
    slug: "portfolio",
    name: "Dit portfolio",
    type: "Persoonlijk project",
    categories: ["webdesign"],
    label: "Website",
    tags: "Design · HTML / CSS / JS",
    year: 2026,
    featured: false,
    domain: "jonasbosch.nl",
    live: "index.html",
    visual: "shop",
    palette: { c1: "#141210", c2: "#D9481C", c3: "#F3EFE8" },
    screen: { brand: "JB", title: "Websites die<br>terugverdienen." },
    summary: "Mijn eigen portfolio, van concept tot code. Een plek om te laten zien hoe ik denk over typografie, snelheid en details.",
    role: "Alles — design, copy & development",
    duration: "Doorlopend",
    services: ["Webdesign", "Copywriting", "Front-end development"],
    stack: ["HTML", "CSS", "JavaScript"],
    challenge: "Hoe laat je als beginnend webdesigner zien wat je kunt, zonder te overdrijven? Dit portfolio moest premium aanvoelen, snel laden en eerlijk zijn over waar ik sta.",
    approach: [
      "Eerst de boodschap en structuur, pas daarna het visuele ontwerp.",
      "Gebouwd zonder framework of template: alleen HTML, CSS en JavaScript.",
      "Animaties die rekening houden met bezoekers die minder beweging willen.",
      "Alle projecten in één databestand, zodat nieuw werk snel online staat."
    ],
    results: [
      { value: "0", label: "templates of page builders" },
      { value: "3", label: "bestanden: HTML, CSS & JS" }
    ],
    quote: null
  },
  {
    slug: "smaakboek",
    name: "Smaakboek",
    type: "Persoonlijk project",
    categories: ["webapp"],
    label: "Webapplicatie",
    tags: "Concept · PWA",
    year: 2026,
    featured: false,
    domain: "smaakboek.app",
    live: null,
    visual: "app",
    palette: { c1: "#1F2A1C", c2: "#8DBF6A", c3: "#EEF4E8" },
    summary: "Een receptenapp als oefenproject: recepten bewaren, weekmenu's plannen en automatisch een boodschappenlijst maken.",
    role: "Design & development",
    duration: "Oefenproject",
    services: ["Webapplicatie", "Productdesign"],
    stack: ["React", "Vite", "LocalStorage"],
    challenge: "Een project om mezelf React en productdesign eigen te maken, met een probleem dat ik zelf elke week heb: wat eten we, en wat moet ik halen?",
    approach: [
      "Begonnen met schetsen van de drie belangrijkste schermen.",
      "Een eenvoudige datastructuur voor recepten, porties en ingrediënten.",
      "Mobiel eerst ontworpen, want koken doe je niet achter een laptop.",
      "Getest met vrienden en familie, en verbeterd op hun feedback."
    ],
    results: [
      { value: "PWA", label: "te installeren op je telefoon" },
      { value: "3", label: "kernschermen, mobiel eerst" }
    ],
    quote: null
  }
];

window.CATEGORY_LABELS = {
  webdesign: "Webdesign",
  webapp: "Webapps",
  seo: "SEO",
  webshop: "Webshops"
};
