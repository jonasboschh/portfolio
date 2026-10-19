// Alleen voor de homepage: hero-showcase, contactformulier en kleine extra's.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Hero: showcase kantelt mee + lichtvlek volgt de muis
const hero = document.querySelector<HTMLElement>(".hero");
const stage = document.getElementById("stage");
if (hero && stage && finePointer && !reduceMotion) {
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

// Lokale tijd (alleen als 'Over mij' aan staat)
const timeEl = document.getElementById("localTime");
if (timeEl) {
  const tick = () => {
    timeEl.textContent = new Intl.DateTimeFormat("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Amsterdam",
    }).format(new Date());
  };
  tick();
  setInterval(tick, 30000);
}

// E-mailadres kopiëren
const copyBtn = document.getElementById("copyBtn") as HTMLButtonElement | null;
copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email ?? "");
    copyBtn.textContent = "Gekopieerd ✓";
  } catch {
    copyBtn.textContent = "Selecteer & kopieer";
  }
  setTimeout(() => (copyBtn.textContent = "Kopieer"), 2000);
});

// Contactformulier — stelt een kant-en-klare e-mail op.
// Tip: op Netlify kun je dit vervangen door Netlify Forms (zie SEO-STAPPENPLAN.md).
const form = document.getElementById("contactForm") as HTMLFormElement | null;
const done = document.getElementById("formDone");

if (form && done) {
  const fieldOf = (input: HTMLInputElement) => input.closest(".field")!;
  const validate = (input: HTMLInputElement) => {
    const ok =
      input.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()) : input.value.trim() !== "";
    fieldOf(input).classList.toggle("is-invalid", !ok);
    return ok;
  };
  const required = [...form.querySelectorAll<HTMLInputElement>("input[required]")];
  required.forEach((input) => {
    input.addEventListener("blur", () => input.value && validate(input));
    input.addEventListener("input", () => fieldOf(input).classList.contains("is-invalid") && validate(input));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = required.map(validate).every(Boolean);
    if (!valid) {
      required.find((i) => fieldOf(i).classList.contains("is-invalid"))?.focus();
      return;
    }

    const data = new FormData(form);
    const services = data.getAll("service").join(", ") || "Niet opgegeven";
    const budget = (data.get("budget") as string) || "Niet opgegeven";
    const name = String(data.get("name")).trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      "Hoi Jonas,",
      "",
      message || "Ik wil graag eens praten over een project.",
      "",
      `— Op zoek naar: ${services}`,
      `— Budget: ${budget}`,
      "",
      name,
      String(data.get("email")).trim(),
    ].join("\n");

    const subject = `Nieuwe projectaanvraag — ${name}`;
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    done.hidden = false;
  });

  // Knoppen met data-preset vinken alvast de juiste optie aan
  document.querySelectorAll<HTMLElement>("[data-preset]").forEach((link) => {
    link.addEventListener("click", () => {
      const box = form.querySelector<HTMLInputElement>(`input[name="service"][value="${link.dataset.preset}"]`);
      if (box) box.checked = true;
    });
  });
}
