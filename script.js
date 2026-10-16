// Je inbox — pas dit hier aan (en ook de mailto-link in index.html).
const CONTACT_EMAIL = "hallo@jonasbosch.nl";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Nav-achtergrond + scrollvoortgang
const nav = document.getElementById("nav");
const progress = document.getElementById("progress");
const darkSections = document.querySelectorAll(".hero, .work, .contact, .footer");
const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
  const line = nav.offsetHeight / 2;
  nav.classList.toggle("is-dark", [...darkSections].some((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= line && r.bottom >= line;
  }));
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobiel menu
const toggle = document.getElementById("navToggle");
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Cijfers optellen
const countUp = (el) => {
  const target = Number(el.dataset.count);
  if (reduceMotion) return;
  const start = performance.now();
  const dur = 1600;
  const step = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// Elementen tonen bij scrollen
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// Eigen cursor boven de cases
const cursor = document.getElementById("cursor");
if (finePointer && !reduceMotion) {
  window.addEventListener("pointermove", (e) => {
    cursor.style.setProperty("--x", `${e.clientX}px`);
    cursor.style.setProperty("--y", `${e.clientY}px`);
    cursor.classList.toggle("is-on", !!e.target.closest?.(".case__visual"));
  }, { passive: true });
  window.addEventListener("scroll", () => cursor.classList.remove("is-on"), { passive: true });
  document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
}

// Hero: showcase kantelt mee + lichtvlek volgt de muis
const hero = document.querySelector(".hero");
const stage = document.getElementById("stage");
if (finePointer && !reduceMotion) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
    hero.style.setProperty("--my", `${e.clientY - r.top}px`);
    stage.style.setProperty("--ry", `${nx * 14}deg`);
    stage.style.setProperty("--rx", `${-ny * 10}deg`);
  });
  hero.addEventListener("pointerleave", () => {
    stage.style.setProperty("--ry", "0deg");
    stage.style.setProperty("--rx", "0deg");
  });
}

// Magnetische knoppen
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}

// Lokale tijd + jaartal
const timeEl = document.getElementById("localTime");
const tick = () => {
  timeEl.textContent = new Intl.DateTimeFormat("nl-NL", {
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Amsterdam",
  }).format(new Date());
};
tick();
setInterval(tick, 30000);
document.getElementById("year").textContent = new Date().getFullYear();

// E-mailadres kopiëren
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    copyBtn.textContent = "Gekopieerd ✓";
  } catch {
    copyBtn.textContent = "Selecteer & kopieer";
  }
  setTimeout(() => (copyBtn.textContent = "Kopieer"), 2000);
});

// Contactformulier — stelt een kant-en-klare e-mail op.
// Wil je aanvragen direct ontvangen? Koppel dit dan aan Formspree, Netlify Forms of je eigen endpoint.
const form = document.getElementById("contactForm");
const done = document.getElementById("formDone");

const validate = (input) => {
  const ok = input.type === "email"
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
    : input.value.trim() !== "";
  input.closest(".field").classList.toggle("is-invalid", !ok);
  return ok;
};
form.querySelectorAll("input[required]").forEach((input) => {
  input.addEventListener("blur", () => input.value && validate(input));
  input.addEventListener("input", () => input.closest(".field").classList.contains("is-invalid") && validate(input));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const required = [...form.querySelectorAll("input[required]")];
  const valid = required.map(validate).every(Boolean);
  if (!valid) { required.find((i) => i.closest(".is-invalid"))?.focus(); return; }

  const data = new FormData(form);
  const services = data.getAll("service").join(", ") || "Niet opgegeven";
  const budget = data.get("budget") || "Niet opgegeven";
  const name = data.get("name").trim();
  const subject = `Nieuwe projectaanvraag — ${name}`;
  const body = [
    `Hoi Jonas,`,
    ``,
    data.get("message").trim() || "Ik wil graag eens praten over een project.",
    ``,
    `— Op zoek naar: ${services}`,
    `— Budget: ${budget}`,
    ``,
    `${name}`,
    `${data.get("email").trim()}`,
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  done.hidden = false;
});

// Knoppen met data-preset vinken alvast de juiste optie aan in het formulier
document.querySelectorAll("[data-preset]").forEach((link) => {
  link.addEventListener("click", () => {
    const box = form.querySelector(`input[name="service"][value="${link.dataset.preset}"]`);
    if (box) box.checked = true;
  });
});

// Aantal projecten bij de knop "Bekijk alle projecten"
const projectCount = document.querySelector("[data-project-count]");
if (projectCount && window.PROJECTS) projectCount.textContent = window.PROJECTS.length;
