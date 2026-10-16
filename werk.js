// Gedeelde logica voor werk.html en project.html.
// De projecten zelf staan in projects.js.

const PROJECTS = window.PROJECTS || [];
const LABELS = window.CATEGORY_LABELS || {};
const page = document.body.dataset.page;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const projectUrl = (p) => `project.html#${encodeURIComponent(p.slug)}`;

// ---------- Mockup (zelfde stijl als op de homepage) ----------
const screens = {
  shop: (p) => `
    <div class="screen screen--shop">
      <div class="s-nav"><b>${esc(p.screen?.brand || p.name.toUpperCase())}</b><span></span><span></span><span></span></div>
      <div class="s-hero">
        <div class="s-hero__text"><em>${p.screen?.title || esc(p.name)}</em><span class="s-btn"></span></div>
        <div class="s-hero__img"></div>
      </div>
      <div class="s-grid"><span></span><span></span><span></span><span></span></div>
    </div>`,
  app: () => `
    <div class="screen screen--app">
      <aside><span></span><span></span><span></span><span></span></aside>
      <div class="s-dash">
        <div class="s-kpis"><span></span><span></span><span></span></div>
        <div class="s-chart">${[40, 55, 48, 70, 62, 85, 78, 95].map((h) => `<i style="--h:${h}%"></i>`).join("")}</div>
      </div>
    </div>`,
  serp: () => `
    <div class="screen screen--serp">
      <div class="s-search"><span></span></div>
      <div class="s-result s-result--top"><b></b><span></span><span></span></div>
      <div class="s-result"><b></b><span></span><span></span></div>
      <div class="s-result"><b></b><span></span></div>
      <div class="s-rank">#1</div>
    </div>`,
  pdp: (p) => `
    <div class="screen screen--pdp">
      <div class="s-pdp__img"><span></span></div>
      <div class="s-pdp__info">
        <em>${p.screen?.title || esc(p.name)}</em>
        <span></span><span></span><span class="short"></span>
        <div class="s-swatches"><i></i><i></i><i></i></div>
        <span class="s-btn"></span>
      </div>
    </div>`,
};

const visual = (p) => `
  <div class="case__visual" style="--c1:${p.palette.c1};--c2:${p.palette.c2};--c3:${p.palette.c3}">
    <div class="browser">
      <div class="browser__bar"><i></i><i></i><i></i><span>${esc(p.domain)}</span></div>
      ${(screens[p.visual] || screens.shop)(p)}
    </div>
  </div>`;

// ---------- Overzichtspagina ----------
function renderIndex() {
  const grid = document.getElementById("projectGrid");
  const filters = document.getElementById("filters");
  const count = document.getElementById("projectCount");

  const options = [["alle", "Alle"], ...Object.entries(LABELS), ["persoonlijk", "Persoonlijk"]];
  const countFor = (key) => PROJECTS.filter((p) => matches(p, key)).length;
  const matches = (p, key) =>
    key === "alle" || (key === "persoonlijk" ? p.type === "Persoonlijk project" : p.categories.includes(key));

  filters.innerHTML = options
    .filter(([key]) => countFor(key) > 0)
    .map(([key, label]) => `<button type="button" data-filter="${key}" aria-pressed="false">${label}<sup>${countFor(key)}</sup></button>`)
    .join("");

  const card = (p, i) => `
    <article class="case">
      <a href="${projectUrl(p)}" class="case__link" aria-label="Bekijk project ${esc(p.name)}">
        ${visual(p)}
        <div class="case__body">
          <div class="case__meta">
            <span class="case__no">(${String(i + 1).padStart(2, "0")})</span>
            <span>${esc(p.label)}</span><span>${esc(p.tags)}</span><span>${p.year}</span>
            ${p.type === "Persoonlijk project" ? `<span class="case__type">Persoonlijk</span>` : ""}
          </div>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.summary)}</p>
          <span class="case__more">Bekijk project <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </article>`;

  const apply = (key) => {
    const list = PROJECTS.filter((p) => matches(p, key));
    grid.innerHTML = list.map(card).join("") || `<p class="empty">Nog geen projecten in deze categorie.</p>`;
    count.textContent = `${list.length} ${list.length === 1 ? "project" : "projecten"}`;
    filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === key)));
    grid.querySelectorAll(".case").forEach((el, i) => {
      el.style.animationDelay = `${i * 70}ms`;
      el.classList.add("case--in");
    });
    bindCursor();
  };

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;
    history.replaceState(null, "", btn.dataset.filter === "alle" ? "werk.html" : `#${btn.dataset.filter}`);
    apply(btn.dataset.filter);
  });

  const start = location.hash.slice(1);
  apply(options.some(([k]) => k === start) ? start : "alle");
}

// ---------- Projectpagina ----------
function renderProject() {
  const slug = decodeURIComponent(location.hash.slice(1)) || new URLSearchParams(location.search).get("p");
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const root = document.getElementById("project");

  if (index === -1) {
    root.innerHTML = `
      <section class="page-hero work"><div class="wrap">
        <a href="werk.html" class="back">← Alle projecten</a>
        <h1 class="page-title">Project niet gevonden.</h1>
        <p class="page-lede">Dit project bestaat niet (meer). Bekijk het overzicht van al mijn werk.</p>
      </div></section>`;
    return;
  }

  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = `${p.name} — Jonas Bosch`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", p.summary);

  const fact = (label, value) => (value ? `<div><dt>${label}</dt><dd>${value}</dd></div>` : "");
  const liveLink = p.live
    ? `<a href="${esc(p.live)}" ${/^https?:/.test(p.live) ? 'target="_blank" rel="noopener"' : ""}>Bekijk live <span aria-hidden="true">↗</span></a>`
    : "";

  root.innerHTML = `
    <section class="page-hero work">
      <div class="wrap">
        <a href="werk.html" class="back reveal">← Alle projecten</a>
        <div class="case__meta reveal">
          <span>${esc(p.type)}</span><span>${esc(p.label)}</span><span>${esc(p.tags)}</span><span>${p.year}</span>
        </div>
        <h1 class="page-title reveal">${esc(p.name)}</h1>
        <p class="page-lede reveal">${esc(p.summary)}</p>
        <dl class="facts reveal">
          ${fact("Rol", esc(p.role))}
          ${fact("Duur", esc(p.duration))}
          ${fact("Diensten", p.services.map(esc).join(", "))}
          ${fact("Tools", p.stack.map(esc).join(", "))}
          ${fact("Live", liveLink)}
        </dl>
        <div class="project__visual reveal">${visual(p)}</div>
      </div>
    </section>

    <section class="project-body wrap">
      <div class="project-row reveal">
        <h2><span>01</span> De uitdaging</h2>
        <p class="project-lead">${esc(p.challenge)}</p>
      </div>
      <div class="project-row reveal">
        <h2><span>02</span> Aanpak</h2>
        <ol class="steps">${p.approach.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </div>
      ${p.results?.length ? `
      <div class="project-row reveal">
        <h2><span>03</span> Resultaat</h2>
        <ul class="results">${p.results.map((r) => `<li><strong>${esc(r.value)}</strong><span>${esc(r.label)}</span></li>`).join("")}</ul>
      </div>` : ""}
      ${p.quote ? `
      <figure class="quote reveal"><blockquote><p>“${esc(p.quote.text)}”</p></blockquote><figcaption>${esc(p.quote.author)}</figcaption></figure>` : ""}
    </section>

    <section class="project-cta wrap">
      <a href="${projectUrl(next)}" class="next-project reveal">
        <span>Volgend project</span>
        <strong>${esc(next.name)} <span aria-hidden="true">→</span></strong>
      </a>
      <div class="cta-card reveal">
        <h2>Een vergelijkbaar project <em>in gedachten?</em></h2>
        <p>Vertel me er kort over. Je hoort binnen één werkdag van me.</p>
        <a href="index.html#contact" class="btn btn--solid magnetic">Start een project <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

// ---------- Navigatie, reveal, cursor ----------
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const progress = document.getElementById("progress");
const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
  const line = nav.offsetHeight / 2;
  nav.classList.toggle("is-dark", [...document.querySelectorAll(".work, .footer")].some((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= line && r.bottom >= line;
  }));
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};
window.addEventListener("scroll", onScroll, { passive: true });

const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

const cursor = document.getElementById("cursor");
let cursorBound = false;
function bindCursor() {
  if (!finePointer || reduceMotion || cursorBound) return;
  cursorBound = true;
  window.addEventListener("pointermove", (e) => {
    cursor.style.setProperty("--x", `${e.clientX}px`);
    cursor.style.setProperty("--y", `${e.clientY}px`);
    cursor.classList.toggle("is-on", !!e.target.closest?.(".case__link .case__visual"));
  }, { passive: true });
  window.addEventListener("scroll", () => cursor.classList.remove("is-on"), { passive: true });
}

if (page === "werk") renderIndex();
if (page === "project") {
  renderProject();
  // "Volgend project" wijzigt alleen de #, dus opnieuw tekenen
  window.addEventListener("hashchange", () => { renderProject(); window.scrollTo(0, 0); revealAll(); });
}

document.getElementById("year").textContent = new Date().getFullYear();
onScroll();

const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 })
  : null;
function revealAll() {
  document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));
}
revealAll();

if (finePointer && !reduceMotion) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}
