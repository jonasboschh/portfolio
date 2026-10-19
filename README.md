# Portfolio — Jonas Bosch (Astro)

Persoonlijke portfoliosite voor webdesign, webapplicaties, SEO en webshops, gebouwd met [Astro 7](https://astro.build).
Statisch gegenereerd: elke pagina is kant-en-klare HTML, met bijna geen JavaScript. Dat is ideaal voor snelheid en SEO.

> 📈 Zie **[SEO-STAPPENPLAN.md](SEO-STAPPENPLAN.md)** voor het volledige SEO-plan.

## Starten

```bash
npm install
npm run dev       # ontwikkelserver op http://localhost:4321
npm run build     # bouwt de site naar dist/
npm run preview   # bekijk de gebouwde site lokaal
```

### Werkt `npm run dev` niet op Windows?

Krijg je de fout *"Cannot find native binding"* met code `4551`? Dan blokkeert Windows (Smart App Control) de Rust-compiler van Astro.
Installeer dan lokaal de WebAssembly-versie (wordt niet in `package.json` opgeslagen, Netlify heeft hem niet nodig):

```bash
npm install --no-save --force @astrojs/compiler-binding-wasm32-wasi@0.5.2
```

Na elke nieuwe `npm install` moet je dit opnieuw doen.

## Structuur

```
src/
├── content/projects/     ← één Markdown-bestand per project (de URL = bestandsnaam)
├── content.config.ts     ← schema: welke velden een project heeft (met uitleg)
├── data/
│   ├── site.ts           ← naam, e-mail, socials, KvK… (pas dit eerst aan!)
│   ├── projects.ts       ← helpers om projecten op te halen
│   └── schema.ts         ← gestructureerde data (JSON-LD) voor Google
├── layouts/BaseLayout.astro  ← <head> met alle SEO-tags, nav en footer
├── components/
│   ├── home/             ← secties van de homepage
│   ├── BrowserMockup.astro, CaseCard.astro, Nav.astro, Footer.astro
├── pages/
│   ├── index.astro       ← /
│   ├── werk/index.astro  ← /werk/          (alle projecten + filters)
│   ├── werk/[slug].astro ← /werk/<project>/ (projectpagina)
│   ├── 404.astro
│   └── robots.txt.ts     ← /robots.txt
├── scripts/              ← interactie (navigatie, hero, formulier)
└── styles/global.css
```

## Een project toevoegen

1. Kopieer een bestand in `src/content/projects/`, bijvoorbeeld `portfolio.md` → `mijn-project.md`.
2. Vul de velden bovenaan in. Het schema in `src/content.config.ts` legt uit wat elk veld doet en geeft een
   foutmelding als je iets vergeet (bijvoorbeeld een te lange `description`).
3. Schrijf onder de `---` het verhaal van het project. Hoe specifieker en echter, hoe beter voor Google.
4. `featured: true` zet het project ook op de homepage. Met `order` bepaal je de volgorde.

Het project verschijnt automatisch op `/werk/`, krijgt een eigen pagina op `/werk/mijn-project/` en komt in de sitemap.

## Online zetten (Netlify)

`netlify.toml` regelt alles: build-commando, Node-versie, caching en redirects van oude URL's.
Staat deze map niet in de root van je repository? Zet dan in Netlify bij *Site configuration → Build & deploy*
de **Base directory** op `astro_portfolio`.

Verander `site` in `astro.config.mjs` zodra je een eigen domein hebt.
