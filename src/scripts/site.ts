// Gedeeld gedrag op elke pagina: navigatie, scrollvoortgang, reveal, cursor en magnetische knoppen.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Navigatie: achtergrond, donkere variant boven donkere secties, voortgangsbalk
const nav = document.getElementById("nav")!;
const progress = document.getElementById("progress")!;
const darkSections = document.querySelectorAll<HTMLElement>(".hero, .work, .contact, .footer");

const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
  const line = nav.offsetHeight / 2;
  nav.classList.toggle(
    "is-dark",
    [...darkSections].some((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= line && r.bottom >= line;
    }),
  );
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobiel menu
const toggle = document.getElementById("navToggle")!;
const setMenu = (open: boolean) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Elementen tonen bij scrollen
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// Eigen cursor boven projectkaarten
const cursor = document.getElementById("cursor")!;
if (finePointer && !reduceMotion) {
  window.addEventListener(
    "pointermove",
    (e) => {
      cursor.style.setProperty("--x", `${e.clientX}px`);
      cursor.style.setProperty("--y", `${e.clientY}px`);
      cursor.classList.toggle("is-on", !!(e.target as Element).closest?.(".case__link .case__visual"));
    },
    { passive: true },
  );
  window.addEventListener("scroll", () => cursor.classList.remove("is-on"), { passive: true });
  document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
}

// Magnetische knoppen
if (finePointer && !reduceMotion) {
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}
