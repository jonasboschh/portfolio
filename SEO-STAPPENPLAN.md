# SEO-stappenplan — Jonas Bosch Portfolio

*Opgesteld oktober 2026, toegespitst op deze Astro-site, een beginnende freelancer in Nederland en de stand van Google, Bing en AI-zoekmachines in 2026.*

---

## Inhoud

0. [Hoe je dit plan gebruikt](#0-hoe-je-dit-plan-gebruikt)
1. [Wat er in de Astro-versie al geregeld is](#1-wat-er-in-de-astro-versie-al-geregeld-is)
2. [Fundament: eerlijkheid en E-E-A-T (prioriteit 1)](#2-fundament-eerlijkheid-en-e-e-a-t-prioriteit-1)
3. [Meten: Search Console, Bing en analytics](#3-meten-search-console-bing-en-analytics)
4. [Eigen domein en hosting](#4-eigen-domein-en-hosting)
5. [Zoekwoordonderzoek](#5-zoekwoordonderzoek)
6. [Sitestructuur en nieuwe pagina's](#6-sitestructuur-en-nieuwe-paginas)
7. [On-page SEO per pagina](#7-on-page-seo-per-pagina)
8. [Contentstrategie en blog](#8-contentstrategie-en-blog)
9. [Technische SEO](#9-technische-seo)
10. [Snelheid en Core Web Vitals](#10-snelheid-en-core-web-vitals)
11. [Gestructureerde data (schema.org)](#11-gestructureerde-data-schemaorg)
12. [Lokale SEO en Google Bedrijfsprofiel](#12-lokale-seo-en-google-bedrijfsprofiel)
13. [Autoriteit en linkbuilding](#13-autoriteit-en-linkbuilding)
14. [AI-zoekmachines: AI Overviews, AI Mode, ChatGPT en Perplexity](#14-ai-zoekmachines)
15. [Conversie: van bezoeker naar aanvraag](#15-conversie-van-bezoeker-naar-aanvraag)
16. [Juridisch en vertrouwen (Nederland)](#16-juridisch-en-vertrouwen-nederland)
17. [Onderhoud en monitoring](#17-onderhoud-en-monitoring)
18. [Tijdlijn: week voor week](#18-tijdlijn-week-voor-week)
19. [Valkuilen om te vermijden](#19-valkuilen-om-te-vermijden)
20. [Bronnen en tools](#20-bronnen-en-tools)

---

## 0. Hoe je dit plan gebruikt

- **Werk van boven naar beneden.** De volgorde is bewust: eerst het fundament, dan meten, dan content, dan autoriteit.
- **Vink af** met `[x]` in dit bestand. Zo houd je je voortgang bij in Git.
- **Verwachtingen:** SEO is traag. Voor een nieuw domein zie je meestal pas na **3 tot 6 maanden** structureel verkeer, voor concurrerende zoektermen (zoals "webdesigner Amsterdam") vaak 6 tot 12 maanden. Longtail-zoektermen en je eigen naam gaan veel sneller.
- **Hoe Google werkt in één zin:** Google wil de pagina tonen die de zoekvraag het best, het betrouwbaarst en het prettigst beantwoordt. Alles in dit plan dient één van die drie.

> 💡 **Over 2026:** Google had in 2026 twee grote core updates (maart en mei). Google zegt zelf weinig over wat er precies veranderde, behalve dat ze "relevante, bevredigende content" beter willen tonen. Analyses van derden wijzen erop dat sites zonder aantoonbare menselijke expertise en sites die op verouderde trucjes leunen terrein verloren. De rode draad blijft: echte, specifieke, behulpzame content van iemand die weet waar hij het over heeft.

---

## 1. Wat er in de Astro-versie al geregeld is

Deze punten zijn al gebouwd. Je hoeft ze niet meer te doen, maar je moet ze wel begrijpen:

- [x] **Statische HTML.** Elke pagina is vooraf gebouwd, dus Google ziet direct alle tekst zonder JavaScript uit te voeren.
- [x] **Echte URL's per project:** `/werk/noord-atelier/` in plaats van `project.html#noord-atelier`. URL's met een `#` worden door Google als dezelfde pagina gezien. Nu is elk project los vindbaar.
- [x] **Unieke `<title>` en meta description per pagina**, met lengtecontrole voor projecten in `content.config.ts`.
- [x] **Canonical-URL** op elke pagina, zodat Google weet welke URL de "officiële" is.
- [x] **Consistente trailing slash** (`/werk/` en nooit `/werk`), ingesteld met `trailingSlash: "always"`.
- [x] **XML-sitemap** automatisch via `@astrojs/sitemap` op `/sitemap-index.xml`. De 404-pagina staat er niet in.
- [x] **`robots.txt`** met een verwijzing naar de sitemap.
- [x] **404-pagina** met `noindex` en links terug naar de site.
- [x] **Gestructureerde data (JSON-LD):** `WebSite`, `Person` en `ProfessionalService` op de homepage, `CollectionPage`, `ItemList` en `BreadcrumbList` op `/werk/`, `CreativeWork` en `BreadcrumbList` op elke projectpagina.
- [x] **Zichtbaar kruimelpad** (Home / Werk / Project), goed voor gebruikers en interne links.
- [x] **Open Graph-tags** voor nette previews op LinkedIn, WhatsApp en Slack. Een afbeelding ontbreekt nog, zie §9.6.
- [x] **Zelf-gehoste lettertypes** via de Astro Fonts API, met preload en automatische vervangende lettertypes. Geen verzoek meer naar Google Fonts, dus sneller en AVG-vriendelijker.
- [x] **Prefetch bij hover:** de volgende pagina wordt al geladen terwijl iemand met de muis op een link staat.
- [x] **Lange cache voor assets** en **301-redirects van oude URL's** (`/werk.html`, `/project.html` en de oude TanStack-projectpagina's) in `netlify.toml`.
- [x] **Semantische HTML:** één `<h1>` per pagina, een logische kopvolgorde, `<nav>`, `<main>`, `<article>`, een skip-link en `aria-current`.
- [x] **Google Search Console-verificatietag** overgenomen van je vorige site.
- [x] **Filters op `/werk/`** werken in de browser, maar alle projecten staan al in de HTML. Google ziet dus alles.

---

## 2. Fundament: eerlijkheid en E-E-A-T (prioriteit 1)

Google beoordeelt kwaliteit onder andere op **E-E-A-T**: *Experience, Expertise, Authoritativeness, Trust*. **Trust is de belangrijkste.** Voor een portfolio betekent dat: alles wat je laat zien moet echt zijn.

### 2.1 Vervang alle voorbeeldcontent — vóór je SEO-werk begint

Dit is het allerbelangrijkste punt van het hele plan. Op dit moment staan er verzonnen dingen op de site:

- [ ] **Projecten** `noord-atelier.md`, `ledgerly.md`, `vos-partners.md`, `bloom-botanics.md` en `smaakboek.md` zijn **verzonnen**, inclusief de resultaten (+68%, −71% …). Vervang ze door echt werk. Heb je nog weinig? Zie §2.2.
- [ ] **Logo-rij "Vertrouwd door ambitieuze merken"** (`components/home/Logos.astro`): de namen zijn verzonnen. Verwijder de sectie uit `pages/index.astro` tot je echte klanten hebt die je mag noemen.
- [ ] **Het e-mailadres** `hallo@jonasbosch.nl` in `data/site.ts` is een voorbeeld. Vul je echte adres in.
- [ ] **KvK-nummer** `00000000` in `data/site.ts`: vul je echte nummer in, of haal het weg als je (nog) niet ingeschreven bent.
- [ ] **"Ruimte voor 2 nieuwe projecten in Q1 2027"** en de beschikbaarheid in de freelance-sectie: houd dit actueel.
- [ ] **'Over mij'** (`components/home/About.astro`, staat nu uit): herschrijf eerst de tekst over "meer dan tien jaar" en de verzonnen quote, en zet de sectie dan weer aan. Zie §2.3.

**Waarom zo belangrijk?**
1. **Google:** verzonnen claims ondermijnen *Trust*. Bij een handmatige beoordeling (quality raters) en in de core updates van 2026 lijkt juist "aantoonbare menselijke expertise" zwaar te wegen.
2. **Klanten:** één klant die doorvraagt over "Noord Atelier" en je reputatie is weg.
3. **Wet:** nepreviews en misleidende claims zijn in de EU verboden (Omnibus-richtlijn, in Nederland gehandhaafd door de ACM).

### 2.2 Weinig echte projecten? Zo vul je je portfolio eerlijk

- **Persoonlijke projecten** met `type: "Persoonlijk project"`, zoals "Dit portfolio". Google en klanten waarderen ze, zolang je eerlijk bent over wat het is.
- **Herontwerp-concepten:** kies een lokaal bedrijf met een verouderde site en maak een *concept-redesign*. Benoem het duidelijk als concept ("Ongevraagd concept, niet in opdracht"). Bonus: dit kan een echte klant opleveren.
- **Werk voor vrienden, familie, verenigingen of goede doelen**, gratis of goedkoop, in ruil voor een eerlijke testimonial en een "made by"-link (zie §13).
- **Opleidings- en cursusprojecten**, mits je zelf de inhoud bedacht en bouwde.
- **Open source:** bijdragen op GitHub, een eigen Astro-component of een template.
- **Resultaten:** gebruik alleen echte, meetbare cijfers, zoals PageSpeed-scores, laadtijden voor en na, of het aantal pagina's. Liever geen resultaten dan verzonnen resultaten. Het veld `results` mag leeg blijven.

### 2.3 Laat zien wie je bent (Experience en Expertise)

- [ ] **Een echte foto van jezelf** in plaats van het "JB"-monogram. Mensen kopen van mensen.
- [ ] **Eerlijke 'Over mij'-tekst:** wie je bent, waarom je dit doet, wat je achtergrond is, welke opleiding je volgt of gevolgd hebt, wat je geleerd hebt en waar je naartoe wilt. "Ik ben net begonnen, en daarom krijgt jouw project al mijn aandacht" is sterk.
- [ ] **Overweeg een aparte pagina `/over/`** met meer diepgang: je werkwijze, je tools, certificaten (bijvoorbeeld Google Analytics, Shopify Partner of een HubSpot SEO-certificaat) en je LinkedIn.
- [ ] **Laat je denken zien:** je blog (§8) is het beste bewijs van expertise.
- [ ] **Echte testimonials** van echte mensen, met volledige naam, functie, bedrijf en een link als ze dat goedvinden. Vraag ze actief na elk project.
- [ ] **Consistente identiteit:** gebruik overal dezelfde naam, foto, functietitel en bio, op je site, LinkedIn, GitHub en Google Bedrijfsprofiel. Google (en AI-assistenten) koppelen die informatie aan elkaar als één "entiteit".

---

## 3. Meten: Search Console, Bing en analytics

Zonder meten weet je niet wat werkt. Regel dit **in week 1**.

### 3.1 Google Search Console (GSC), verplicht en gratis

- [ ] Ga naar [search.google.com/search-console](https://search.google.com/search-console).
- [ ] **Huidig domein:** je hebt al een verificatietag voor `boschh.netlify.app`. Controleer of de property nog geverifieerd is.
- [ ] **Bij een eigen domein (§4):** maak een **domein-property** aan (bijvoorbeeld `jonasbosch.nl`) en verifieer via een **DNS TXT-record**. Die dekt automatisch http, https, www en alle subdomeinen.
- [ ] **Sitemap indienen:** *Sitemaps → `sitemap-index.xml` → Indienen*.
- [ ] **URL-inspectie:** test de homepage en één projectpagina met *URL inspecteren → Live URL testen*. Controleer dat Google de pagina kan ophalen en dat de gerenderde HTML je tekst bevat. Klik daarna op *Indexering aanvragen*.
- [ ] **Belangrijkste rapporten om te leren kennen:**
  - **Prestaties:** klikken, vertoningen, CTR en positie per zoekterm en pagina. Verkeer uit AI Overviews en AI Mode telt hier mee onder zoektype "Web".
  - **Generatieve AI-rapport:** sinds juni 2026 toont Search Console (nog niet voor elke site) aparte rapporten voor vertoningen in AI Overviews, AI Mode en Discover. Ze gaan vooral over vertoningen, niet over klikken.
  - **Merkzoektermen-filter:** sinds maart 2026 kan Search Console zoektermen met je naam (merk) automatisch scheiden van overige zoektermen. Zo zie je of je ook gevonden wordt door mensen die je nog niet kennen.
  - **Pagina's (indexering):** welke pagina's wel en niet in Google staan, en waarom.
  - **Core Web Vitals:** de snelheid gemeten bij echte bezoekers. Dit verschijnt pas als je genoeg verkeer hebt.
  - **Verbeteringen:** fouten in gestructureerde data, zoals bij het kruimelpad.
- [ ] Zet **e-mailmeldingen** aan, zodat je weet wanneer er indexeringsproblemen zijn.

### 3.2 Bing Webmaster Tools, vaak vergeten maar belangrijk in 2026

Bing is niet alleen Bing: de **zoekfunctie van ChatGPT** en andere AI-assistenten leunen (deels) op de index van Bing. Ook DuckDuckGo en Ecosia gebruiken Bing.

- [ ] Ga naar [bing.com/webmasters](https://www.bing.com/webmasters) en kies **"Importeren uit Google Search Console"**. Dat is twee klikken en je bent klaar.
- [ ] Dien ook daar je sitemap in.
- [ ] **IndexNow:** hiermee meld je nieuwe of gewijzigde URL's direct bij Bing (en Yandex en Seznam) in plaats van te wachten. Bing Webmaster Tools legt de opzet uit: een sleutelbestand in `public/` en een ping na elke deploy. Optioneel; voor een kleine site is de sitemap genoeg.

### 3.3 Analytics: kies privacyvriendelijk

- **Optie A (aanbevolen): cookieloze analytics** zoals [Plausible](https://plausible.io), [Umami](https://umami.is) (gratis zelf te hosten) of [Netlify Analytics](https://www.netlify.com/products/analytics/) (op serverniveau, geen script). Je hebt dan **geen cookiebanner** nodig, en het script is klein, dus beter voor de snelheid.
- **Optie B: Google Analytics 4.** Krachtig en gratis, maar in Nederland heb je volgens de Autoriteit Persoonsgegevens (AP) voor GA4 met standaardinstellingen **toestemming via een cookiebanner** nodig. Dat kost conversie en snelheid.
- [ ] Kies een tool en voeg het script toe in `layouts/BaseLayout.astro`.
- [ ] **Meet conversies:** een klik op "Verstuur aanvraag", een klik op het e-mailadres en een klik op "Bespreek een opdracht". Die doelen zijn belangrijker dan bezoekersaantallen.

### 3.4 KPI's: waar je op stuurt

| KPI | Waar te zien | Doel eerste 6 maanden |
|---|---|---|
| Geïndexeerde pagina's | GSC → Pagina's | Alle pagina's uit de sitemap |
| Vertoningen niet-merk | GSC → Prestaties (merkfilter) | Stijgende lijn |
| Klikken uit Google | GSC → Prestaties | Stijgende lijn |
| Gemiddelde positie op doelzoektermen | GSC → Prestaties → Zoekopdrachten | Top 20 → top 10 |
| Aanvragen via de site | Analytics, doelen | ≥ 1 per maand |
| Core Web Vitals | GSC + PageSpeed Insights | Alles "Goed" |

---

## 4. Eigen domein en hosting

`boschh.netlify.app` werkt, maar een **eigen domein** is beter voor vertrouwen, merkherkenning en (indirect) SEO.

- [ ] **Registreer een `.nl`-domein**, bijvoorbeeld `jonasbosch.nl`, voor ongeveer €5–10 per jaar bij TransIP, Hostnet of Cloudflare Registrar. Kies je naam: dat is je merk en het is bestendig, wat je ook gaat doen.
- [ ] **Koppel het in Netlify:** *Domain management → Add a domain*. Netlify regelt HTTPS (Let's Encrypt) automatisch.
- [ ] **Kies één hoofdvariant**, met of zonder `www`, en laat Netlify de andere permanent doorsturen. Advies: zonder www (`jonasbosch.nl`).
- [ ] **Stel het als *primary domain* in.** Netlify stuurt `boschh.netlify.app` dan automatisch door naar je nieuwe domein.
- [ ] **Pas `site` aan** in `astro.config.mjs`: `site: "https://jonasbosch.nl"`. Dat werkt door in canonicals, de sitemap, Open Graph en `robots.txt`.
- [ ] **Search Console:** maak een domein-property aan voor het nieuwe domein (§3.1) en dien de sitemap opnieuw in.
- [ ] **Zakelijk e-mailadres op je eigen domein** (`jonas@jonasbosch.nl`), bijvoorbeeld via Google Workspace, Zoho of de mailhosting van je registrar. Dat straalt meer vertrouwen uit dan een Gmail-adres.
- [ ] **Overal bijwerken:** LinkedIn, GitHub, Google Bedrijfsprofiel, e-mailhandtekening en facturen.

---

## 5. Zoekwoordonderzoek

Je wilt gevonden worden op zoektermen die **klanten** gebruiken, niet vakgenoten.

### 5.1 Begrijp zoekintentie

| Intentie | Voorbeeld | Welke pagina |
|---|---|---|
| **Transactioneel** (wil kopen of inhuren) | "website laten maken zwolle", "freelance shopify developer" | Dienstpagina, homepage |
| **Commercieel** (vergelijkt) | "wat kost een website laten maken", "shopify of woocommerce" | Blog, prijzenpagina |
| **Informatief** (wil leren) | "hoe verbeter ik mijn google ranking" | Blog |
| **Navigatie** (zoekt jou) | "jonas bosch webdesign" | Homepage |

Als beginner win je het snelst op **longtail** (langere, specifiekere zoektermen) en **lokaal** (stad of regio).

### 5.2 Zo vind je zoektermen (gratis)

1. **Google zelf:** typ een zoekterm en kijk naar de *autocomplete*, het blok **"Mensen vragen ook"** en **"Gerelateerde zoekopdrachten"** onderaan.
2. **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** gratis met een Google Ads-account, je hoeft geen advertentie te draaien. Je krijgt zoekvolumes als bandbreedte.
3. **Google Search Console:** na een paar weken zie je waarop je *al* vertoond wordt. Dat zijn je snelste kansen.
4. **[Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)** (gratis voor je eigen site) en de gratis keyword-tools van Ahrefs en Semrush (beperkt aantal per dag).
5. **[AnswerThePublic](https://answerthepublic.com):** vragen rond een onderwerp.
6. **Concurrenten:** zoek "webdesigner [jouw stad]" en bekijk welke pagina's in de top 5 staan, hoe ze heten en wat erop staat.
7. **Klanten zelf:** welke woorden gebruiken mensen als ze je om hulp vragen? Dat zijn je zoektermen.

### 5.3 Startlijst met zoektermen om te onderzoeken

*Controleer de volumes zelf. Vervang `[stad]` door je eigen woonplaats en die van de omliggende steden.*

**Diensten (transactioneel):**
- website laten maken [stad] / webdesigner [stad] / webdesign [stad]
- webshop laten maken / shopify webshop laten maken / woocommerce webshop laten maken
- freelance webdeveloper / freelance front-end developer / freelance webdesigner inhuren
- shopify developer nederland / astro developer / react developer freelance
- seo specialist [stad] / seo laten doen / website sneller maken
- website laten maken zzp / website laten maken kleine ondernemer / betaalbare website laten maken

**Vragen (blog):**
- wat kost een website laten maken (in 2026)
- wat kost een webshop laten maken
- shopify of woocommerce: wat past bij mij
- hoe lang duurt het om een website te laten maken
- wordpress of maatwerk website
- hoe kom ik hoger in google
- wat zijn core web vitals
- website laten maken: waar moet je op letten (checklist)

### 5.4 Keyword mapping: één hoofdzoekterm per pagina

Maak een tabel (in een spreadsheet of hier) en geef **elke pagina één primaire zoekterm** en een paar varianten. Twee pagina's die op dezelfde term mikken, beconcurreren elkaar (*kannibalisatie*).

| Pagina | Primaire zoekterm | Varianten |
|---|---|---|
| `/` | webdesigner [stad] / freelance webdesigner | webdesign & development |
| `/diensten/webdesign/` | website laten maken [stad] | webdesign op maat |
| `/diensten/webshop/` | webshop laten maken | shopify / woocommerce webshop |
| `/diensten/seo/` | seo specialist [stad] | website vindbaar maken |
| `/diensten/webapplicaties/` | webapplicatie laten maken | maatwerk webapp, klantportaal |
| `/freelance/` | freelance webdeveloper inhuren | front-end developer zzp |
| `/werk/` | portfolio webdesigner | voorbeelden websites |
| `/blog/wat-kost-een-website/` | wat kost een website laten maken | prijs website laten maken |

---

## 6. Sitestructuur en nieuwe pagina's

Nu heb je in feite één lange homepage plus projectpagina's. Google rankt **pagina's**, niet sites. Eén pagina die "alles" doet, rankt op niets goed. De grootste SEO-winst zit dus in **aparte pagina's per onderwerp**.

### 6.1 Doelstructuur

```
/                              Homepage — wie, wat, voor wie, bewijs, CTA
├── /diensten/                 Overzicht diensten
│   ├── /diensten/webdesign/
│   ├── /diensten/webshop/
│   ├── /diensten/seo/
│   └── /diensten/webapplicaties/
├── /freelance/                Inhuur voor bureaus en teams (nu een sectie op de homepage)
├── /werk/                     Portfolio ✅
│   └── /werk/<project>/       Case studies ✅
├── /over/                     Over mij (E-E-A-T)
├── /werkwijze/  of /prijzen/  Hoe je werkt, wat het kost (veelgezocht!)
├── /blog/                     Kennisbank
│   └── /blog/<artikel>/
├── /contact/                  Aparte contactpagina (wordt ook los gezocht)
└── /privacy/                  Privacyverklaring
```

- [ ] **Dienstpagina's** (§6.2) — hoogste prioriteit
- [ ] **`/over/`**
- [ ] **`/contact/`**: kan dezelfde `Contact.astro`-component hergebruiken
- [ ] **`/freelance/`**: maak van de sectie een volwaardige pagina, en houd op de homepage een korte versie met een link
- [ ] **`/prijzen/` of `/werkwijze/`**: "wat kost het" is een van de meest gezochte vragen. Zelfs een indicatie ("websites vanaf €…") helpt bezoekers én Google
- [ ] **`/blog/`** (§8)
- [ ] **`/privacy/`** (§16)

### 6.2 Opbouw van een sterke dienstpagina

Een dienstpagina is je belangrijkste SEO-pagina. Richtlijn: 600 tot 1200 woorden echte, specifieke inhoud.

1. **H1** met de zoekterm, natuurlijk geformuleerd: *"Webshop laten maken — snel, vindbaar en zelf te beheren"*.
2. **Eerste alinea** die meteen antwoord geeft: wat je doet, voor wie, en het belangrijkste voordeel.
3. **Voor wie** is dit (en voor wie niet)?
4. **Wat je krijgt:** de onderdelen, concreet.
5. **Werkwijze in stappen.**
6. **Prijsindicatie** of waar de prijs van afhangt.
7. **Bewijs:** gerelateerde projecten (link naar `/werk/…`) en echte testimonials.
8. **Veelgestelde vragen**, als echte vragen van klanten met korte, directe antwoorden. Zie §11 over FAQ-markup.
9. **CTA:** "Plan een kennismaking" en het contactformulier.
10. **Interne links** naar andere diensten en relevante blogartikelen.

**In Astro:** maak een content collection `services` (net als `projects`) met een `[slug].astro`-template, of gewoon losse `.astro`-pagina's in `src/pages/diensten/`.

### 6.3 Lokale landingspagina's: voorzichtig

Pagina's als `/webdesigner-zwolle/`, `/webdesigner-deventer/` en `/webdesigner-apeldoorn/` met dezelfde tekst en een andere stadsnaam zijn **doorway pages**. Dat valt onder Googles spambeleid. Maak een stadspagina alleen als je er **echt unieke inhoud** voor hebt, zoals lokale klanten, lokale projecten of een lokaal netwerk. Begin met één pagina voor je eigen stad of regio.

### 6.4 Interne links

- [ ] Elke belangrijke pagina is **binnen 3 klikken** vanaf de homepage bereikbaar.
- [ ] **Beschrijvende linkteksten:** "bekijk hoe ik een Shopify-webshop bouwde" in plaats van "klik hier".
- [ ] **Projecten ↔ diensten:** link vanuit een case naar de dienstpagina ("Meer over webshops laten maken") en andersom.
- [ ] **Blog → diensten:** elk artikel linkt naar minstens één relevante dienst.
- [ ] **Geen weespagina's:** elke pagina krijgt minstens één interne link.
- [ ] Werk de **navigatie en footer** bij wanneer er nieuwe pagina's bijkomen (`components/Nav.astro`, `Footer.astro`).

---

## 7. On-page SEO per pagina

Gebruik deze checklist voor **elke** pagina die je maakt.

### 7.1 Title (`<title>`)

- [ ] **Maximaal ~60 tekens.** Langer wordt afgekapt.
- [ ] **Zoekterm vooraan**, merk achteraan: `Webshop laten maken in Shopify | Jonas Bosch`.
- [ ] **Uniek** per pagina.
- [ ] Schrijf voor **klikken**: concreet en met een reden om te klikken.
- Google herschrijft titles soms zelf als ze slecht aansluiten op de pagina. Een title die past bij de H1 en de inhoud blijft vaker staan.

*In deze site:* het `title`-attribuut van `<BaseLayout>`, en voor projecten het optionele veld `seoTitle`.

### 7.2 Meta description

- [ ] **120 tot 155 tekens.**
- [ ] Vat de pagina samen, noem de zoekterm en eindig met een reden om te klikken: *"Vaste prijs, reactie binnen één werkdag."*
- Het is **geen** rankingfactor, maar wel bepalend voor de CTR. Google gebruikt soms een eigen fragment.

### 7.3 Koppen en tekst

- [ ] **Precies één H1**, met (een variant van) de zoekterm.
- [ ] **Logische volgorde:** H2 voor secties, H3 daaronder. Sla geen niveaus over.
- [ ] **Antwoord eerst:** zet de kern in de eerste 100 woorden. Dat helpt Google, AI Overviews (§14) en haastige lezers.
- [ ] **Schrijf voor mensen.** Herhaal de zoekterm niet eindeloos (*keyword stuffing*). Gebruik synoniemen en verwante begrippen.
- [ ] **Korte alinea's**, tussenkoppen, opsommingen en tabellen waar dat helpt.
- [ ] **Concreet en specifiek:** "laadt in 1,2 seconden" is beter dan "razendsnel".

> ⚠️ **Je huidige H1 op de homepage** is "Websites die zichzelf terugverdienen." Creatief en sterk, maar er staat geen zoekterm in. Het advies is niet om hem te veranderen, maar om ervoor te zorgen dat de **title** (die al "Webdesign, webapps, SEO & webshops" bevat), de **eerste alinea** en de **regel boven de H1** (nu "Webdesign · Webapps · SEO · Webshops") de zoektermen dragen. Overweeg die regel te veranderen in bijvoorbeeld "Freelance webdesigner & developer in [stad]".

### 7.4 URL's

- [ ] **Kort, leesbaar, met kleine letters en streepjes:** `/diensten/webshop/` in plaats van `/page?id=12`.
- [ ] **Zoekterm erin**, maar zonder stopwoorden en jaartallen (een jaartal veroudert).
- [ ] **Verander een URL nooit** zonder een 301-redirect in `netlify.toml`.

### 7.5 Afbeeldingen

- [ ] Gebruik **`<Image />` of `<Picture />` uit `astro:assets`**. Die maken automatisch WebP of AVIF, de juiste afmetingen en `width`/`height` (geen verspringende layout).
- [ ] **Alt-tekst die beschrijft wat je ziet**, plus context: `alt="Productpagina van de Noord Atelier-webshop op mobiel"`. Decoratieve afbeeldingen krijgen `alt=""`.
- [ ] **Beschrijvende bestandsnamen:** `noord-atelier-productpagina.jpg` in plaats van `IMG_4821.jpg`.
- [ ] **De belangrijkste afbeelding bovenaan** (de LCP) krijgt `loading="eager"` en `fetchpriority="high"`, de rest wordt lazy geladen. Astro doet het lazy laden standaard.

### 7.6 Projectpagina's (case studies) sterker maken

Je projectpagina's zijn al goed opgezet. Maak ze rijker:

- [ ] **Echte screenshots** (desktop en mobiel) in plaats van alleen de CSS-mockup.
- [ ] **Meer tekst onder de frontmatter:** het probleem, de keuzes die je maakte en waarom, wat lastig was en wat je zou herhalen. 400 tot 800 woorden is mooi.
- [ ] **Link naar de live site** (`live:`) als de klant dat goedvindt.
- [ ] **Een echte quote** van de klant (`quote:`).
- [ ] **Link naar de bijbehorende dienstpagina.**

---

## 8. Contentstrategie en blog

Een blog of kennisbank is voor een freelancer de beste manier om (1) gevonden te worden op vragen, (2) expertise te tonen en (3) links te verdienen.

### 8.1 Opzet in Astro

- [ ] Maak een collection `blog` in `content.config.ts` met velden als `title`, `description`, `pubDate`, `updatedDate`, `tags` en `draft`.
- [ ] Maak `src/pages/blog/index.astro` (overzicht) en `src/pages/blog/[slug].astro` (artikel).
- [ ] Voeg **`Article`/`BlogPosting`-schema** toe met `datePublished`, `dateModified` en `author` (verwijzend naar je `Person`).
- [ ] Toon **auteur en datum** zichtbaar op de pagina, met een link naar `/over/`.
- [ ] Voeg optioneel een **RSS-feed** toe met `@astrojs/rss`.

### 8.2 Artikelideeën (beginnersvriendelijk en klantgericht)

**Voor klanten (commercieel en informatief):**
1. Wat kost een website laten maken in 2026? (met echte prijsopbouw)
2. Shopify of WooCommerce: welke past bij jouw webshop?
3. Website laten maken: 12 vragen die je moet stellen aan je webdesigner
4. Waarom is mijn website traag (en wat kost dat je)?
5. Wat zijn Core Web Vitals? Uitleg voor ondernemers
6. Zelf een website bouwen met Wix of Squarespace, of laten maken?
7. Hoe lang duurt het voordat je website in Google staat?
8. Checklist: je website klaarmaken voor een lancering
9. Lokale SEO voor kleine ondernemers: zo kom je in Google Maps
10. Wat is een headless webshop en heb je er één nodig?

**Laat je werk zien (Experience):**
- "Hoe ik mijn portfolio van HTML naar Astro omzette." Dat heb je net gedaan! Schrijf het op.
- Een *behind the scenes* van een project: de ontwerpkeuzes, voor en na.
- "Wat ik leerde van mijn eerste klantproject."

**Voor vakgenoten (links en netwerk):**
- Tutorials, bijvoorbeeld "Een premium hero-animatie bouwen met alleen CSS".
- Astro-tips. De Astro-community deelt graag.

### 8.3 Een artikel schrijven dat rankt

- [ ] **Één zoekvraag per artikel** (§5.4).
- [ ] **Bekijk eerst de top 5 in Google.** Welke vragen beantwoorden zij? Wat missen ze? Maak iets beters of persoonlijkers, niet iets langers.
- [ ] **Antwoord in de eerste alinea**, daarna de details.
- [ ] **Eigen ervaring en voorbeelden** toevoegen. Dat kan AI niet en het is precies wat Google beloont (de eerste "E" van E-E-A-T).
- [ ] **Zelfstandige secties:** elke H2-sectie moet op zichzelf begrijpelijk zijn. AI Overviews citeren *passages*, niet hele artikelen (§14).
- [ ] **Tabellen, stappenlijsten en concrete getallen.**
- [ ] **Bijwerken:** werk artikelen jaarlijks bij (prijzen, tools) en pas dan `updatedDate` aan.

### 8.4 AI gebruiken bij het schrijven

Google heeft geen probleem met AI-hulp, wel met **massaal geproduceerde content zonder toegevoegde waarde** (*scaled content abuse* in het spambeleid). Gebruik AI voor outlines, eerste versies en taalcorrectie, maar:
- voeg altijd **eigen ervaring, meningen en voorbeelden** toe;
- **controleer elk feit**;
- publiceer liever **1 goed artikel per maand** dan 10 middelmatige.

### 8.5 Publicatieritme

- **Start:** 4 artikelen in de eerste 2 maanden, gericht op je belangrijkste diensten.
- **Daarna:** 1 tot 2 per maand. Regelmaat wint van uitbarstingen.
- **Elk kwartaal:** bekijk in Search Console welke artikelen vertoningen krijgen maar weinig klikken (verbeter de title en description), en welke op positie 8 tot 20 staan (verbeter de inhoud en voeg interne links toe).

---

## 9. Technische SEO

Grotendeels geregeld door Astro (§1). Dit zijn de controles en aanvullingen.

### 9.1 Crawlen en indexeren

- [ ] **Controleer na livegang:** `https://<domein>/robots.txt` en `https://<domein>/sitemap-index.xml` laden zonder fouten.
- [ ] **Zoek `site:jouwdomein.nl` in Google:** hoeveel pagina's staan erin?
- [ ] **GSC → Pagina's:** los "Gecrawld, momenteel niet geïndexeerd" op met betere content en interne links, en "Duplicaat zonder canonical" met canonicals (al geregeld).
- [ ] Gebruik **`noindex`** (via de prop `noindex` op `BaseLayout`) voor pagina's die niet in Google horen: bedankpagina's, testpagina's en concepten.
- [ ] Een pagina die je **verwijdert**, geef je een 301-redirect naar de beste vervanger. Is er geen vervanger, dan mag hij een 404 geven.

### 9.2 Redirects en URL-hygiëne

- [x] Oude URL's zijn doorgestuurd in `netlify.toml`.
- [ ] Controleer na livegang of de oude URL's van je TanStack-site (zoals `/werk/maison-laurent`) netjes op `/werk/` uitkomen.
- [ ] **Geen redirect-ketens** (A → B → C). Stuur altijd direct naar de eindbestemming.
- [ ] **Alle interne links** wijzen naar de definitieve URL, met trailing slash.

### 9.3 Mobiel

Google indexeert **mobile-first**: de mobiele versie is leidend.
- [ ] Test elke nieuwe pagina op een echte telefoon.
- [ ] Knoppen en links zijn minimaal 44×44 px.
- [ ] Er is geen horizontale scroll (eerder getest en opgelost).

### 9.4 Toegankelijkheid (a11y)

Toegankelijkheid is geen directe rankingfactor, maar het overlapt sterk met SEO: semantische HTML, alt-teksten, duidelijke koppen en goede linkteksten. Vanaf juni 2025 geldt bovendien de **European Accessibility Act** voor veel webshops en digitale diensten. Dat is goede kennis om aan klanten te verkopen.
- [ ] Test met **Lighthouse → Accessibility** en met [WAVE](https://wave.webaim.org).
- [ ] Controleer het kleurcontrast, vooral van grijze tekst op donkere achtergronden.
- [ ] Alles moet met het toetsenbord bedienbaar zijn, met een zichtbare focus (al aanwezig).

### 9.5 Beveiliging (HTTPS en headers)

- [x] HTTPS via Netlify.
- [ ] Voeg **security headers** toe in `netlify.toml`. Dat is goed voor vertrouwen en voor tools die je site scannen:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Frame-Options = "SAMEORIGIN"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

(Een *Content-Security-Policy* is de volgende stap, maar test die goed, want hij kan scripts blokkeren.)

### 9.6 Open Graph-afbeelding (social previews)

Als iemand je site op LinkedIn of WhatsApp deelt, wil je een mooie preview. Die afbeelding ontbreekt nog.

- [ ] **Maak een afbeelding van 1200×630 px** (PNG of JPG), in je huisstijl en met je naam en tagline. Zet hem als `public/og/default.png` en geef hem standaard mee in `BaseLayout.astro`:
  ```astro
  image = "/og/default.png",
  imageAlt = "Jonas Bosch — webdesign, webapps, SEO & webshops",
  ```
- [ ] **Beter: automatisch een afbeelding per project.** Bekijk het package `astro-og-canvas`, of genereer een PNG met `satori` en `@resvg/resvg-js` in een endpoint `src/pages/og/[slug].png.ts`.
- [ ] Test met de [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) en [opengraph.xyz](https://www.opengraph.xyz).

### 9.7 Taal en internationaal

- [x] `<html lang="nl">` en `og:locale` `nl_NL`.
- [ ] Wil je later een **Engelse versie** (`/en/`)? Gebruik dan de i18n-routing van Astro en **`hreflang`-tags** die de NL- en EN-versie aan elkaar koppelen. Vertaal echt; machinevertaling zonder controle levert dunne content op.

### 9.8 Regelmatige technische audit

- [ ] **[Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)** (gratis tot 500 URL's): vindt kapotte links, ontbrekende titles, dubbele descriptions en redirect-ketens.
- [ ] **Ahrefs Webmaster Tools:** gratis site-audit van je eigen site.
- [ ] **Lighthouse** in Chrome DevTools: SEO, prestaties en toegankelijkheid.
- [ ] **`npx astro check`** (installeert de eerste keer `@astrojs/check`): vangt fouten in je code en content.

---

## 10. Snelheid en Core Web Vitals

Core Web Vitals meten de gebruikservaring. Ze zijn een **bevestigde maar relatief kleine** rankingfactor: relevantie wint, en snelheid beslist vaak bij gelijke kwaliteit. Voor conversie zijn ze wel heel belangrijk, en als webdesigner is een snelle site je visitekaartje.

### 10.1 De drempels (onveranderd in 2026)

Gemeten bij het **75e percentiel** van echte bezoekers, apart voor mobiel en desktop:

| Metric | Wat | Goed | Slecht |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Hoe snel het grootste element zichtbaar is | ≤ 2,5 s | > 4,0 s |
| **INP** (Interaction to Next Paint) | Hoe snel de pagina reageert op klikken en typen | ≤ 200 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | Hoeveel de layout verspringt | ≤ 0,1 | > 0,25 |

### 10.2 Al goed in deze site

Statische HTML, vrijwel geen JavaScript, zelf-gehoste lettertypes met preload en vervangende lettertypes (minder CLS), prefetch, en cache-headers voor assets.

### 10.3 Aandachtspunten in déze site

- [ ] **Zware visuele effecten in de hero:** de bewegende lichtgloed (drie elementen met `filter: blur(90px)` en `mix-blend-mode`), de korrel over de hele pagina (`body::after` met een animatie) en de 3D-showcase kosten rekenkracht op goedkope telefoons. Dat kan INP en de vloeiendheid raken.
  - Test op een middenklasse Android-telefoon, of in Chrome DevTools met *Performance → CPU: 4× slowdown*.
  - Mogelijke optimalisaties: zet de korrelanimatie uit op mobiel, verklein de blur-radius, of vervang de bewegende gloed door één vooraf gerenderde, gecomprimeerde achtergrondafbeelding (AVIF).
- [ ] **De intro-animatie** (het donkere scherm met "jb", ongeveer 1,75 s) en de hero-tekst die pas na ongeveer 1 s verschijnt kunnen je **LCP vertragen**: het grootste element (de H1) is pas laat zichtbaar. Meet het met PageSpeed Insights. Is de LCP te hoog, overweeg dan om de intro korter te maken of te schrappen, of de H1 direct te tonen.
- [ ] **Screenshots straks:** gebruik altijd `<Image />` met de juiste `widths`/`sizes`, en geef de belangrijkste afbeelding `fetchpriority="high"`.

### 10.4 Meten

- [ ] **[PageSpeed Insights](https://pagespeed.web.dev):** toont labdata (Lighthouse) én velddata (echte gebruikers, CrUX), zodra je genoeg verkeer hebt.
- [ ] **GSC → Core Web Vitals:** velddata per groep pagina's.
- [ ] **Chrome DevTools → Performance:** om problemen te debuggen.
- [ ] **Doel:** Lighthouse-score 90+ op mobiel. Dat beloof je ook op je site ("90+ PageSpeed-doel per site"), dus je eigen site moet het voorbeeld zijn.

---

## 11. Gestructureerde data (schema.org)

Gestructureerde data helpt Google begrijpen *wat* er op een pagina staat en *wie* je bent. Sommige soorten leveren een **rich result** op (bijvoorbeeld een kruimelpad in de zoekresultaten). Alles moet **overeenkomen met wat zichtbaar op de pagina staat.**

### 11.1 Al aanwezig

| Pagina | Schema | Bestand |
|---|---|---|
| Homepage | `WebSite`, `Person`, `ProfessionalService` | `src/data/schema.ts` |
| `/werk/` | `CollectionPage` + `ItemList`, `BreadcrumbList` | `src/pages/werk/index.astro` |
| `/werk/<project>/` | `CreativeWork`, `BreadcrumbList` | `src/pages/werk/[slug].astro` |

### 11.2 Aanvullen

- [ ] **`Person`:** vul `sameAs` aan met LinkedIn en andere profielen (via `socials` in `data/site.ts`), en voeg `image` toe (je foto) zodra je die hebt.
- [ ] **`ProfessionalService`:** voeg `address` (alleen plaats en land als je vanuit huis werkt), `telephone` en eventueel `priceRange` toe, maar alleen echte gegevens.
- [ ] **Dienstpagina's:** `Service`-schema met `serviceType`, `provider` (verwijzing naar `#person`) en `areaServed`.
- [ ] **Blogartikelen:** `BlogPosting` met `headline`, `datePublished`, `dateModified`, `author` en `image`.
- [ ] **Projectafbeeldingen:** voeg `image` toe aan `CreativeWork` zodra je screenshots hebt.

### 11.3 Wat er veranderd is (2025–2026)

- **FAQ rich results bestaan niet meer.** Sinds 7 mei 2026 toont Google geen uitklapbare FAQ's meer in de zoekresultaten, voor geen enkele site. Het `FAQPage`-type zelf is niet afgeschaft: Google gebruikt het nog om pagina's te begrijpen. Een FAQ-blok op je dienstpagina's blijft dus nuttig voor bezoekers en AI-antwoorden, maar verwacht er geen extra zichtbaarheid van.
- **HowTo rich results** zijn al sinds 2023 verdwenen.
- In **juni 2025** schrapte Google onder meer Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing en Book Actions als rich result.
- **Reviewsterren:** reviews die je over jezelf op je eigen site zet (`Review`/`AggregateRating` op je eigen `Organization` of `LocalBusiness`) gelden als *self-serving* en leveren **geen sterren** op. Verzamel reviews liever in je Google Bedrijfsprofiel (§12).
- Er bestaat **geen speciale markup voor AI Overviews.** Google zegt dat letterlijk.

### 11.4 Testen

- [ ] **[Rich Results Test](https://search.google.com/test/rich-results):** wat Google ervan maakt.
- [ ] **[Schema Markup Validator](https://validator.schema.org):** controleert alle schema.org-syntax.
- [ ] **GSC → Verbeteringen:** fouten na indexering.

---

## 12. Lokale SEO en Google Bedrijfsprofiel

Voor een freelancer die (ook) lokale klanten wil, is dit vaak **de snelste route naar aanvragen**: verschijnen in Google Maps en in het kaartblok bij zoektermen als "webdesigner [stad]".

### 12.1 Google Bedrijfsprofiel aanmaken

- [ ] Ga naar [business.google.com](https://business.google.com) en maak een profiel aan.
- [ ] **Kies "servicegebied-bedrijf" (Service Area Business).** Werk je vanuit huis en ontvang je geen klanten op je adres, dan **verberg je je adres**. Dat is precies hoe Google het bedoeld heeft. Google heeft je adres wel nodig voor de verificatie.
  - Een **postbus of virtueel kantoor is niet toegestaan.**
  - **Servicegebied:** steden of regio's binnen ongeveer **2 uur rijden**. Sinds juni 2025 mag je **geen landen of provincies/staten** meer als servicegebied opgeven.
- [ ] **Hoofdcategorie:** bijvoorbeeld "Websiteontwerper". Voeg aanvullende categorieën toe die echt kloppen, zoals "Internetmarketingbureau" of "Softwarebedrijf".
- [ ] **Bedrijfsnaam:** precies je echte handelsnaam, zoals in de KvK. Zet er **geen zoektermen bij** ("Jonas Bosch | Webdesign Zwolle Goedkoop"). Dat is tegen de richtlijnen en kan tot schorsing leiden.
- [ ] **Beschrijving** (750 tekens): wat je doet, voor wie en waar, in natuurlijke taal.
- [ ] **Diensten** toevoegen, met korte beschrijvingen en eventueel prijzen.
- [ ] **Foto's:** je portret, je werkplek en screenshots van projecten. Profielen met foto's krijgen meer interactie.
- [ ] **Openingstijden** en **website-link** (naar je homepage of `/contact/`).
- [ ] **Verifiëren:** Google kiest de methode, meestal een video of een briefkaart.

### 12.2 Reviews: de belangrijkste lokale factor

- [ ] **Vraag elke klant om een Google-review.** Stuur na oplevering een directe link (die vind je in je profiel onder "Vraag om reviews").
- [ ] **Reageer op elke review**, persoonlijk en binnen een paar dagen.
- [ ] **Nooit** reviews kopen, ruilen of zelf schrijven, en geen korting geven in ruil voor (positieve) reviews. Dat is tegen het beleid van Google én verboden onder Europees consumentenrecht.
- [ ] Ook vrienden of familie voor wie je echt iets gemaakt hebt, mogen een eerlijke review schrijven.

### 12.3 Actief houden

- [ ] **Updates/posts** in je profiel (bijvoorbeeld "Nieuw project live: …"), ongeveer één keer per maand.
- [ ] **Vragen en antwoorden** zelf invullen met veelgestelde vragen.
- [ ] Houd **informatie actueel**: openingstijden rond vakanties, en diensten.

### 12.4 NAP-consistentie en vermeldingen

**NAP** = *Name, Address, Phone*. Zorg dat die overal identiek zijn.
- [ ] **KvK-handelsregister** (automatisch), [Bing Places](https://www.bingplaces.com) (te importeren uit Google) en [Apple Business Connect](https://businessconnect.apple.com) (Apple Maps en Siri).
- [ ] **Nederlandse platforms en gidsen**, alleen relevante: bijvoorbeeld [Hoofdkraan](https://www.hoofdkraan.nl), [Freelance.nl](https://www.freelance.nl), [Malt](https://www.malt.nl), Werkspot (als je daar klanten wilt), en eventueel lokale ondernemersverenigingen.
- [ ] **LinkedIn-bedrijfspagina** (optioneel naast je persoonlijke profiel).
- Kwaliteit boven kwantiteit: 10 relevante vermeldingen zijn beter dan 100 waardeloze gidsen.

---

## 13. Autoriteit en linkbuilding

**Backlinks** (links van andere sites naar de jouwe) blijven een van de sterkste signalen voor autoriteit. Eén link van een relevante, betrouwbare site is meer waard dan honderd van spamsites.

### 13.1 Makkelijke eerste links (maand 1–2)

- [ ] **Je eigen profielen:** LinkedIn (bij "Website"), GitHub-profiel en -README, Dribbble, Behance en X/Bluesky.
- [ ] **Portfolio- en showcaseplatforms:** [Awwwards](https://www.awwwards.com) (insturen kost geld, maar ook "Honorable Mention"-sites krijgen aandacht), [CSS Design Awards](https://www.cssdesignawards.com), [Godly](https://godly.website), [Land-book](https://land-book.com), [Lapa Ninja](https://www.lapa.ninja) en **de [Astro Showcase](https://astro.build/showcase/)**. Je site is gebouwd in Astro, dus stuur hem in!
- [ ] **Freelanceplatforms** (§12.4) met een link naar je site.
- [ ] **Opleiding/school:** alumni- of studentenpagina's.

### 13.2 Structurele links

- [ ] **"Ontworpen & gebouwd door Jonas Bosch"** in de footer van elke klantsite (met toestemming). Gebruik bij voorkeur een normale link naar je homepage of de projectpagina. Een link uit elke footer van een site met veel pagina's kan als onnatuurlijk worden gezien; overweeg in dat geval een link alleen vanaf de homepage of de colofonpagina van de klant.
- [ ] **Case studies die klanten zelf delen:** vraag ze je projectpagina te linken in hun nieuws of blog.
- [ ] **Partnerships:** bureaus waarvoor je freelancet, copywriters, fotografen en marketeers. Wederzijds doorverwijzen levert natuurlijke links (en werk) op.
- [ ] **Lokaal:** ondernemersverenigingen, netwerkclubs, sponsoring van een lokale club of evenement (vaak met een link), en een gastles op een school.

### 13.3 Links verdienen met content (digital PR)

- [ ] **Bruikbare gratis tools of resources:** een "website-kosten-calculator", een Astro-starter-template op GitHub, of een checklist als pdf. Die worden gedeeld en gelinkt.
- [ ] **Origineel onderzoek:** bijvoorbeeld "Ik testte de snelheid van 100 websites van Zwolse ondernemers: dit zijn de resultaten." Lokale media en blogs linken naar zulke data.
- [ ] **Gastartikelen** op relevante Nederlandse blogs over ondernemen, marketing of webdevelopment, met een échte bijdrage en niet alleen voor de link.
- [ ] **Journalisten helpen:** platforms als Qwoted of Featured, en reageren op vragen van journalisten op LinkedIn.
- [ ] **Podcasts en meetups:** vertel over je werk en word gelinkt in de shownotes.

### 13.4 Niet doen

- ❌ **Links kopen**, linkruil op grote schaal, PBN's (netwerken van nepsites) en spammy gidsen. Dat valt allemaal onder *link spam* in het spambeleid van Google.
- ❌ Dezelfde exact-match ankertekst overal ("webdesigner zwolle"). Natuurlijke links gebruiken je naam, je URL of een variatie.

---

## 14. AI-zoekmachines

*AI Overviews, AI Mode, ChatGPT en Perplexity. Ook wel "GEO" (Generative Engine Optimization) of "AEO" genoemd.*

Steeds meer zoekopdrachten krijgen een AI-antwoord. Wat werkt hier in 2026?

### 14.1 Wat Google officieel zegt

Uit de documentatie van Google over AI-functies (bijgewerkt december 2025):
- Er zijn **geen extra vereisten** om in AI Overviews of AI Mode te verschijnen. Je pagina moet geïndexeerd zijn en geschikt om met een fragment (snippet) getoond te worden.
- **Geen speciale optimalisaties, geen nieuwe bestanden of markup, geen speciale gestructureerde data nodig.**
- Wat wel helpt, zijn gewoon goede SEO-basics: crawlbaar zijn, interne links, een goede paginabeleving, belangrijke content als tekst, goede afbeeldingen, gestructureerde data die klopt met de zichtbare tekst, en een actueel Bedrijfsprofiel.
- Verkeer uit AI-functies telt mee in Search Console onder "Web". Volgens Google zijn klikken vanuit AI Overviews gemiddeld van hogere kwaliteit.
- **Controle:** met `nosnippet`, `data-nosnippet`, `max-snippet` of `noindex` beperk je wat getoond wordt. Met **Google-Extended** in `robots.txt` bepaal je of je content gebruikt mag worden voor training en *grounding* van Gemini-modellen buiten Search. **Google-Extended heeft geen invloed op je zichtbaarheid in Google Search.**

### 14.2 Wat in de praktijk lijkt te werken

*Gebaseerd op analyses van SEO-bedrijven: correlaties en geen garanties.*
- **Eerst goed ranken:** de grote meerderheid van de citaties in AI Overviews komt van pagina's die al op pagina 1 staan.
- **Query fan-out:** AI Mode splitst een vraag op in deelvragen. Pagina's die meerdere deelvragen goed beantwoorden (bijvoorbeeld "wat kost een webshop" + "shopify of woocommerce" + "hoe lang duurt het"), worden vaker geciteerd. Dit pleit voor complete, goed gestructureerde pagina's en interne links tussen gerelateerde artikelen.
- **Zelfstandige passages:** schrijf secties die zonder context begrijpelijk zijn ("Een webshop laten maken kost in Nederland doorgaans tussen €X en €Y, afhankelijk van…").
- **Antwoord vooraan** in de pagina en in elke sectie.
- **Duidelijke, controleerbare feiten:** concrete getallen, data en definities.
- **Consistente entiteit:** dezelfde naam, functie en bio overal, met `sameAs`-links. Zo "weet" een AI wie Jonas Bosch is.
- **Vermeld worden op andere sites** (§13). AI-systemen leunen op wat derden over je zeggen.

### 14.3 ChatGPT, Copilot en Perplexity

- [ ] **Bing Webmaster Tools** instellen (§3.2). ChatGPT Search en Copilot leunen (deels) op de index van Bing.
- [ ] **Laat de zoekcrawlers van AI-diensten toe** in `robots.txt`. Dat doet je huidige `robots.txt` al, want die staat alles toe. Wil je **training** blokkeren maar **zoekzichtbaarheid** houden, dan maak je onderscheid:

  | Crawler | Van | Doel |
  |---|---|---|
  | `OAI-SearchBot` | OpenAI | Zoekresultaten in ChatGPT, **toelaten** |
  | `GPTBot` | OpenAI | Training van modellen, jouw keuze |
  | `ChatGPT-User` | OpenAI | Ophalen als een gebruiker erom vraagt |
  | `PerplexityBot` | Perplexity | Zoekindex, **toelaten** |
  | `Google-Extended` | Google | Gemini-training en grounding (niet Search), jouw keuze |
  | `Bingbot` | Microsoft | Bing, Copilot en ChatGPT-voeding, **zeker toelaten** |

  Voorbeeld als je training wilt blokkeren (aanpassen in `src/pages/robots.txt.ts`):
  ```
  User-agent: GPTBot
  Disallow: /

  User-agent: Google-Extended
  Disallow: /

  User-agent: *
  Allow: /
  ```
  **Advies voor jou:** laat alles open. Als freelancer wil je zo vaak mogelijk genoemd worden, en je portfolio bevat geen geheimen.

- **`llms.txt`:** een voorgesteld bestand met een samenvatting van je site voor taalmodellen. Google zegt expliciet dat je het **niet nodig hebt** en dat het niet gebruikt wordt voor Search, AI Overviews of AI Mode. Lighthouse in Chrome controleert het inmiddels wel, en sommige AI-tools lezen het mogelijk. Het kost 10 minuten en kan geen kwaad, maar **verwacht er niets van**. Lage prioriteit.

### 14.4 Meten

- [ ] **GSC → Generatieve AI-rapport** (als het voor je site beschikbaar is): vertoningen in AI Overviews en AI Mode.
- [ ] **Verwijzingen in je analytics** van `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com` en `gemini.google.com`.
- [ ] **Test af en toe zelf:** vraag ChatGPT of Perplexity om "een freelance webdesigner in [stad] die met Astro werkt". Word je genoemd?

---

## 15. Conversie: van bezoeker naar aanvraag

SEO brengt bezoekers. Pas als ze contact opnemen, levert het iets op.

### 15.1 Contactformulier: maak het echt (Netlify Forms)

Het formulier opent nu het mailprogramma van de bezoeker. Dat werkt niet als iemand geen mailprogramma heeft ingesteld, zoals op veel werkcomputers of bij webmail. Met **Netlify Forms** ontvang je de aanvraag direct, gratis tot 100 per maand.

- [ ] In `components/home/Contact.astro`: voeg `name="contact"`, `method="POST"` en `data-netlify="true"` toe aan het `<form>`, plus een verborgen veld en een honeypot tegen spam:
  ```astro
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" ...>
    <input type="hidden" name="form-name" value="contact" />
    <p hidden><label>Niet invullen: <input name="bot-field" /></label></p>
    ...
  ```
- [ ] In `scripts/home.ts`: vervang de `mailto:`-regel door een `fetch`:
  ```ts
  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form) as any).toString(),
  });
  done.hidden = false;
  ```
- [ ] In Netlify: *Forms → Form notifications* → e-mail naar je eigen adres.
- [ ] Pas de bevestigingstekst aan ("Dank je, ik heb je bericht ontvangen").
- [ ] **Meet het** als conversie in je analytics.

### 15.2 Drempels verlagen

- [ ] **Agenda-link** (Cal.com of Calendly) voor "Plan direct een kennismaking van 20 minuten".
- [ ] **Telefoonnummer en/of WhatsApp-knop**, als je dat wilt. Veel MKB'ers bellen liever.
- [ ] **CTA op elke pagina:** de projectpagina's hebben er al een, voeg er ook een toe aan de dienst- en blogpagina's.

### 15.3 Vertrouwen

- [ ] Echte testimonials en reviews (§2, §12).
- [ ] Je foto en naam (§2.3).
- [ ] Een duidelijke werkwijze en prijsindicatie (§6).
- [ ] KvK-nummer, privacyverklaring en algemene voorwaarden (§16).

---

## 16. Juridisch en vertrouwen (Nederland)

Geen directe SEO-factoren, maar wel signalen van betrouwbaarheid (*Trust*), en een deel ervan is verplicht.

- [ ] **KvK-nummer op je website.** Ondernemers in het Handelsregister moeten hun KvK-nummer vermelden op hun website en correspondentie. Dat staat al in de footer; vul je echte nummer in.
- [ ] **Contactgegevens:** een bereikbaar e-mailadres (verplicht voor dienstverleners volgens het Burgerlijk Wetboek / de Dienstenrichtlijn).
- [ ] **Btw-identificatienummer** vermelden is verplicht als je online diensten of producten verkoopt. Twijfel je, vermeld het dan gewoon.
- [ ] **Privacyverklaring** (`/privacy/`): welke gegevens je verwerkt (contactformulier, analytics), waarom, hoe lang, en de rechten van bezoekers. Verplicht onder de AVG zodra je persoonsgegevens verwerkt, en dat doet het contactformulier.
- [ ] **Cookiebanner:** alleen nodig als je tracking- of marketingcookies plaatst (zoals GA4 met standaardinstellingen). Met cookieloze analytics (§3.3) heb je er geen nodig.
- [ ] **Algemene voorwaarden** voor je diensten, bijvoorbeeld via een branchevereniging of een jurist. Link ernaar in de footer en in je offertes.
- [ ] **Geen misleidende claims** (§2). Ook dit is consumentenrecht.

---

## 17. Onderhoud en monitoring

### Wekelijks (10 minuten)
- [ ] Search Console openen: nieuwe fouten? Meldingen?
- [ ] Nieuwe aanvragen beantwoorden (binnen 1 werkdag, zoals beloofd!).

### Maandelijks (1 uur)
- [ ] **GSC → Prestaties**, laatste 28 dagen tegenover de periode daarvoor: welke zoektermen en pagina's stijgen of dalen?
- [ ] **Kansen zoeken:** zoektermen op positie 8 tot 20 (verbeter de pagina en voeg interne links toe), en pagina's met veel vertoningen maar een lage CTR (herschrijf de title en description).
- [ ] 1 tot 2 nieuwe blogartikelen of projecten publiceren.
- [ ] Een post plaatsen in je Google Bedrijfsprofiel en reviews beantwoorden.
- [ ] Afhankelijkheden bijwerken (`npm outdated`, `npx @astrojs/upgrade`) en daarna testen.

### Elk kwartaal (een halve dag)
- [ ] **Technische audit** met Screaming Frog of Ahrefs (§9.8).
- [ ] **PageSpeed Insights** voor de homepage, `/werk/` en een projectpagina.
- [ ] **Content-audit:** verouderde artikelen bijwerken, dunne pagina's samenvoegen of verbeteren.
- [ ] **Keyword mapping** bijwerken met nieuwe inzichten uit GSC.
- [ ] **Backlinks** controleren in Ahrefs Webmaster Tools of GSC → Links.

### Bij een Google-update
- Volg het **[Google Search Status Dashboard](https://status.search.google.com)** en de **[Search Central Blog](https://developers.google.com/search/blog)**.
- **Geen paniek** bij schommelingen tijdens een update; die duurt vaak 2 weken. Beoordeel pas na afloop.
- Volgens Google is een daling na een core update **geen straf**. Andere pagina's worden dan als relevanter gezien. Het antwoord is altijd: betere, behulpzamere content.

---

## 18. Tijdlijn: week voor week

### Week 1 — Fundament
- [ ] Voorbeeldcontent vervangen of verwijderen (§2.1). **Eerst dit!**
- [ ] Echte gegevens in `src/data/site.ts` (e-mail, KvK, socials).
- [ ] Astro-site live zetten op Netlify (README → Online zetten).
- [ ] Search Console controleren, sitemap indienen, homepage laten indexeren (§3.1).
- [ ] Bing Webmaster Tools via import uit GSC (§3.2).
- [ ] Analytics kiezen en installeren (§3.3).

### Week 2 — Domein en profiel
- [ ] Eigen domein kopen en koppelen, `site` aanpassen (§4).
- [ ] Google Bedrijfsprofiel aanmaken en verificatie starten (§12.1).
- [ ] Open Graph-afbeelding maken (§9.6).
- [ ] Netlify Forms instellen (§15.1).
- [ ] Privacyverklaring (§16).

### Week 3–4 — Zoekwoorden en structuur
- [ ] Zoekwoordonderzoek en keyword mapping (§5).
- [ ] Pagina's `/over/` (met foto) en `/contact/` (§6).
- [ ] Eerste 2 dienstpagina's, te beginnen met wat je het liefst verkoopt (§6.2).
- [ ] Profielen en showcases met links naar je site (§13.1).

### Maand 2
- [ ] Overige dienstpagina's.
- [ ] Blog opzetten en de eerste 2 artikelen (§8).
- [ ] Eerste echte projecten als case study, met screenshots (§7.6).
- [ ] Security headers (§9.5).
- [ ] Prestaties meten en optimaliseren (§10.3).

### Maand 3
- [ ] Nog 2 blogartikelen.
- [ ] Reviews verzamelen van je eerste klanten (§12.2).
- [ ] `/prijzen/` of `/werkwijze/`.
- [ ] Eerste maandelijkse GSC-analyse en titles en descriptions bijsturen (§17).
- [ ] Insturen bij de Astro Showcase en andere galerieën (§13.1).

### Maand 4–6
- [ ] 1 tot 2 artikelen per maand.
- [ ] Een linkwaardige resource of klein onderzoek (§13.3).
- [ ] Partnerships met bureaus en andere freelancers.
- [ ] Eerste kwartaalaudit (§17).
- [ ] Evalueren: welke pagina's trekken verkeer en aanvragen? Daar meer van maken.

### Doorlopend
- Het onderhoudsritme uit §17.

---

## 19. Valkuilen om te vermijden

1. **Verzonnen projecten, cijfers, logo's of reviews.** Dat schaadt vertrouwen, Google en is in strijd met de wet. (§2)
2. **Eén lange homepage in plaats van aparte pagina's per onderwerp.** (§6)
3. **Doorway pages:** tien stadspagina's met dezelfde tekst. (§6.3)
4. **Keyword stuffing:** onnatuurlijk vaak de zoekterm herhalen.
5. **Massaal AI-content publiceren** zonder eigen inbreng. (§8.4)
6. **Links kopen** of linkruilnetwerken. (§13.4)
7. **URL's veranderen zonder redirect.**
8. **Een zoekterm in je Google Bedrijfsprofiel-naam** stoppen. (§12.1)
9. **Zware animaties** die de site op mobiel traag maken. (§10.3)
10. **Te vroeg conclusies trekken:** SEO-effecten zie je na maanden, niet na dagen.
11. **Alleen op Google focussen:** Bing (en daarmee ChatGPT), je Bedrijfsprofiel, LinkedIn en je netwerk zijn ook kanalen.
12. **SEO-"specialisten" die garanties geven** ("binnen 30 dagen #1 in Google"). Bestaat niet.

---

## 20. Bronnen en tools

### Officiële documentatie
- [Google Search Central — SEO-startgids](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google — Behulpzame, betrouwbare content maken](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google — Spambeleid](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google — AI-functies en je website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google — Gestructureerde data: overzicht](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Google Search Status Dashboard](https://status.search.google.com)
- [web.dev — Core Web Vitals](https://web.dev/articles/vitals)
- [Google Bedrijfsprofiel — richtlijnen](https://support.google.com/business/answer/3038177)
- [Astro — Content collections](https://docs.astro.build/en/guides/content-collections/), [Fonts](https://docs.astro.build/en/guides/fonts/), [Afbeeldingen](https://docs.astro.build/en/guides/images/)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a)

### Achtergrond bij dit plan (2026)
- Core updates 2026: [TechWyse — May 2026 Core Update](https://www.techwyse.com/news/ai-search/google-may-2026-core-update), [TripleDart — March 2026 Core Update](https://www.tripledart.com/google-algorithm-update-tracker/march-2026-core-update)
- FAQ rich results gestopt: [TechWyse — FAQ rich results deprecated](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026), [jsonld.com](https://jsonld.com/google-faq-rich-results-deprecated/)
- Search Console AI-rapporten: [PPC Land](https://ppc.land/google-finally-gives-search-console-its-own-generative-ai-visibility-reports/), [Evolv Agency](https://evolvagency.io/learn/google-search-console-generative-ai-performance-reports)
- llms.txt: [Digital Applied](https://www.digitalapplied.com/blog/google-llms-txt-no-seo-value-lighthouse-audit-2026), [Pixelmojo](https://www.pixelmojo.io/blogs/google-says-you-dont-need-llms-txt)
- Servicegebied-bedrijven: [Google Business Profile Help](https://support.google.com/business/answer/2853879?hl=en), [BrightLocal](https://www.brightlocal.com/learn/google-business-profile/getting-started/how-to-set-up-and-optimize-a-service-area-listing-in-google-business-profile/), [PPC Land](https://ppc.land/google-bans-countries-and-states-from-business-profile-service-areas/)
- ChatGPT en Bing: [Tenten GEO](https://geo.tenten.co/en/blog/bing-webmaster-chatgpt-visibility), [AI Advantage Agency](https://aiadvantageagency.com/chatgpt-search-2026-readiness/)

### Gratis tools
| Tool | Waarvoor |
|---|---|
| [Google Search Console](https://search.google.com/search-console) | Indexering, zoektermen, fouten |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Bing, ChatGPT-voeding, IndexNow |
| [PageSpeed Insights](https://pagespeed.web.dev) | Snelheid en Core Web Vitals |
| [Rich Results Test](https://search.google.com/test/rich-results) | Gestructureerde data |
| [Schema Markup Validator](https://validator.schema.org) | Schema.org-syntax |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) | Technische crawl (≤500 URL's gratis) |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Audit en backlinks van je eigen site |
| [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) | Zoekvolumes |
| [AnswerThePublic](https://answerthepublic.com) | Vragen rond een onderwerp |
| [WAVE](https://wave.webaim.org) | Toegankelijkheid |
| [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) | Social preview testen |

---

*Tip: zet dit bestand in je repository en vink taken af met `[x]`. Zo zie je in je Git-geschiedenis precies wanneer je wat gedaan hebt.*
