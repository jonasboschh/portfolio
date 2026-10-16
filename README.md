# Portfolio — Jonas Bosch

Persoonlijke portfoliosite voor webdesign, webapplicaties, SEO en webshops.

Gebouwd zonder framework of build-stap: alleen HTML, CSS en JavaScript.

## Structuur

| Bestand | Wat |
|---|---|
| `index.html` | Homepage |
| `werk.html` | Overzicht van alle projecten, met filters |
| `project.html` | Detailpagina per project (`project.html#<slug>`) |
| `projects.js` | **Alle projectdata** — voeg hier nieuwe projecten toe |
| `styles.css` | Alle styling |
| `script.js` | Interactie op de homepage |
| `werk.js` | Interactie en rendering voor werk- en projectpagina's |

## Lokaal bekijken

```bash
npx serve .
```

## Online zetten

Netlify serveert de map direct (zie `netlify.toml`), er is geen build nodig.
