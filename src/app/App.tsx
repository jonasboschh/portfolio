import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Globe,
  ShoppingCart,
  Search,
  Code2,
  ChevronDown,
  Star,
  ExternalLink,
  Send,
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Users,
  Award,
} from "lucide-react";

// ── THEME ─────────────────────────────────────────────────────────────────────

const LIME = "#D6FF00";
const CORAL = "#FF3D1F";

function theme(dark: boolean) {
  return {
    bg: dark ? "#080808" : "#F0EDE4",
    bgAlt: dark ? "#0D0D0D" : "#E8E4DA",
    fg: dark ? "#F0EDE6" : "#0A0A0A",
    fgMuted: dark ? "rgba(240,237,230,0.6)" : "rgba(10,10,10,0.55)",
    fgSubtle: dark ? "rgba(240,237,230,0.4)" : "rgba(10,10,10,0.38)",
    fgGhost: dark ? "rgba(240,237,230,0.25)" : "rgba(10,10,10,0.18)",
    card: dark ? "#111111" : "#E6E2D8",
    border: dark ? "rgba(240,237,230,0.1)" : "rgba(10,10,10,0.1)",
    borderStrong: dark ? "rgba(240,237,230,0.2)" : "rgba(10,10,10,0.2)",
    gridLine: dark ? "rgba(214,255,0,0.04)" : "rgba(10,10,10,0.05)",
    input: dark ? "#111111" : "#DDD9CF",
    inputBorder: dark ? "rgba(240,237,230,0.12)" : "rgba(10,10,10,0.14)",
    navBg: dark ? "rgba(8,8,8,0.95)" : "rgba(240,237,228,0.96)",
    navBorder: dark ? "rgba(240,237,230,0.08)" : "rgba(10,10,10,0.1)",
    ghostStroke: dark ? "rgba(240,237,230,0.04)" : "rgba(10,10,10,0.055)",
    gapBg: dark ? "rgba(240,237,230,0.06)" : "rgba(10,10,10,0.08)",
    lime: LIME,
    coral: CORAL,
    cyan: dark ? "#00C8FF" : "#0080CC",
    purple: dark ? "#B400FF" : "#8800CC",
    statA: dark ? LIME : "#080808",
    statB: CORAL,
    logoAccent: dark ? LIME : "#080808",
    logoBase: dark ? "#F0EDE6" : "#0A0A0A",
    ctaBtn: dark ? LIME : "#0A0A0A",
    ctaBtnFg: dark ? "#080808" : "#F0EDE4",
  };
}

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

// ── DATA ──────────────────────────────────────────────────────────────────────

const mkServices = (t: ReturnType<typeof theme>) => [
  {
    icon: Globe,
    number: "01",
    title: "Web Design",
    subtitle: "Visuele Impact",
    description:
      "Websites die bezoekers stoppen in hun scroll. Elk pixel is doelbewust. Elk ontwerp vertelt uw verhaal met brutale duidelijkheid — geen templates, geen compromissen.",
    tags: ["UI/UX", "Responsive", "Animatie", "Branding"],
    color: t.lime,
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Webshops",
    subtitle: "Verkoop 24/7",
    description:
      "WooCommerce, Shopify, maatwerk — wij bouwen webshops die converteren. Snelle laadtijden, naadloze checkout, en een koopervaring die klanten terugbrengt.",
    tags: ["WooCommerce", "Shopify", "Betalingen", "Conversie"],
    color: t.coral,
  },
  {
    icon: Search,
    number: "03",
    title: "SEO Optimalisatie",
    subtitle: "Gevonden Worden",
    description:
      "Google pagina 1 is geen geluk — het is strategie. Technische SEO, contentstrategie, linkbuilding. Wij zorgen dat uw klanten u vinden vóór de concurrent.",
    tags: ["On-page SEO", "Technisch", "Content", "Analytics"],
    color: t.cyan,
  },
  {
    icon: Code2,
    number: "04",
    title: "Software",
    subtitle: "Op Maat Gebouwd",
    description:
      "Van API-integraties tot volledige SaaS-platforms. Maatwerksoftware die exact doet wat uw bedrijf nodig heeft — schaalbaar, snel en toekomstbestendig.",
    tags: ["React", "Node.js", "API's", "Databases"],
    color: t.purple,
  },
];

// const siteStats = [
//   { value: "147+", label: "Projecten Opgeleverd" },
//   { value: "98%",  label: "Klanten Tevreden"     },
//   { value: "3×",   label: "Meer Verkeer"          },
//   { value: "24h",  label: "Reactietijd"           },
// ];

type CaseStudy = {
  title: string;
  category: string;
  accentKey: "lime" | "coral" | "cyan";
  img: string;
  heroImg: string;
  galleryImgs: string[];
  result: string;
  year: string;
  sector: string;
  duration: string;
  tagline: string;
  intro: string;
  challenge: { heading: string; body: string };
  approach: { heading: string; steps: { label: string; text: string }[] };
  results: { icon: typeof TrendingUp; value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
  tags: string[];
};

const work: CaseStudy[] = [
  {
    title: "Maison Laurent",
    category: "Webshop + Branding",
    accentKey: "lime",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&auto=format",
    heroImg:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop&auto=format",
    galleryImgs: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=600&fit=crop&auto=format",
    ],
    result: "+340% omzet in 6 maanden",
    year: "2024",
    sector: "Fashion & Lifestyle",
    duration: "8 weken",
    tagline: "Van boutique tot online powerhouse.",
    intro:
      "Maison Laurent — een Amsterdams modelabel met een sterke offline reputatie — had een online aanwezigheid die hun merkwaarde tegenwerkte. De website was verouderd, traag en converteerde nauwelijks. Wij kregen de opdracht: bouw een webshop die net zo exclusief aanvoelt als het merk zelf.",
    challenge: {
      heading: "De Uitdaging",
      body: "Het merk had een loyale klantenbasis in de winkel maar bijna geen online verkoop. De bestaande Shopify-store miste brand identity en had een checkout-abandonmentrate van 78%. Elke maand verloren ze gemiddeld €14.000 aan afgebroken bestellingen.",
    },
    approach: {
      heading: "Onze Aanpak",
      steps: [
        {
          label: "01 — Discovery",
          text: "Gebruikersonderzoek met 12 bestaande klanten. Heatmaps en sessie-opnames geanalyseerd. Concurrentieanalyse van 8 directe concurrenten.",
        },
        {
          label: "02 — Design",
          text: "Volledig nieuw visueel systeem: typografie, kleurpalet, fotografie-richtlijnen. Mobiel-eerst wireframes, iteratief getest met doelgroep.",
        },
        {
          label: "03 — Development",
          text: "Shopify 2.0 met custom liquid-componenten. 360°-foto's, zoomfunctie. PageSpeed 98/100. Naadloze ERP-integratie.",
        },
        {
          label: "04 — Launch & Groei",
          text: "Gefaseerde lancering met A/B-tests. SEO-structuur heropgebouwd. Google Shopping-campagne geconfigureerd.",
        },
      ],
    },
    results: [
      { icon: TrendingUp, value: "+340%", label: "Omzetstijging (6 mnd)" },
      { icon: Users, value: "−62%", label: "Checkout Abandonment" },
      { icon: Clock, value: "0.8s", label: "Laadtijd (was 4.2s)" },
      { icon: Award, value: "4.9★", label: "Klantwaardering" },
    ],
    testimonial: {
      quote:
        "Onze omzet verdrievoudigde binnen vier maanden. Dit team denkt niet alleen in design — ze denken in resultaten. De beste investering die we ooit hebben gedaan.",
      name: "Sarah de Vries",
      role: "CEO, Maison Laurent",
    },
    tags: [
      "Shopify 2.0",
      "Custom Theme",
      "ERP-integratie",
      "SEO",
      "Fotografie",
      "Branding",
    ],
  },
  {
    title: "ProFit Gym",
    category: "Web Design + SEO",
    accentKey: "coral",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format",
    heroImg:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop&auto=format",
    galleryImgs: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&h=600&fit=crop&auto=format",
    ],
    result: "#1 Google positie bereikt",
    year: "2023",
    sector: "Fitness & Wellness",
    duration: "6 weken",
    tagline: "Van onzichtbaar naar onverslaanbaar online.",
    intro:
      "ProFit Gym had drie vestigingen in Rotterdam maar stond op pagina 4 van Google. Nieuwe leden kwamen bijna uitsluitend via mond-tot-mondreclame. Met een nieuw fitnesscentrum dat 200 meter verderop opende, moest er snel gehandeld worden.",
    challenge: {
      heading: "De Uitdaging",
      body: "Drie concurrenten domineerden de eerste pagina van Google voor alle relevante zoektermen in Rotterdam. De website was niet mobielvriendelijk en laadde in 6,4 seconden. Google My Business-profielen waren onvolledig.",
    },
    approach: {
      heading: "Onze Aanpak",
      steps: [
        {
          label: "01 — SEO Audit",
          text: "Complete technische audit: 234 issues geïdentificeerd. Zoekwoordenonderzoek voor Rotterdam + omgeving. Welke zoektermen zijn winbaar binnen 90 dagen?",
        },
        {
          label: "02 — Nieuwe Website",
          text: "Volledig nieuw ontwerp, mobiel-eerst. Elke vestiging eigen geoptimaliseerde landingspagina. Core Web Vitals groen op alle metrics.",
        },
        {
          label: "03 — Content Strategie",
          text: "12 SEO-geoptimaliseerde blogartikelen. FAQ-secties met long-tail keywords. Linkbuilding via 18 lokale partnerships.",
        },
        {
          label: "04 — Google My Business",
          text: "Alle drie GMB-profielen geoptimaliseerd. Review-strategie: van 23 naar 180+ reviews. Posts en Q&A wekelijks bijgehouden.",
        },
      ],
    },
    results: [
      { icon: TrendingUp, value: "#1", label: "Google Positie (Rotterdam)" },
      { icon: Users, value: "+218%", label: "Organisch Verkeer" },
      { icon: Clock, value: "1.1s", label: "Laadtijd (was 6.4s)" },
      { icon: Award, value: "180+", label: "Nieuwe Google Reviews" },
    ],
    testimonial: {
      quote:
        "Van pagina 4 naar positie 1 in 90 dagen. Ze beloofden het en ze leverden het. Ons ledenbestand groeide met 40% in één jaar.",
      name: "Mark Jansen",
      role: "Eigenaar, ProFit Gym",
    },
    tags: [
      "SEO",
      "Lokale SEO",
      "WordPress",
      "Google My Business",
      "Content",
      "Linkbuilding",
    ],
  },
  {
    title: "LogiTrack Pro",
    category: "Maatwerk Software",
    accentKey: "cyan",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    heroImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format",
    galleryImgs: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&h=600&fit=crop&auto=format",
    ],
    result: "60% minder administratietijd",
    year: "2024",
    sector: "Logistiek & Supply Chain",
    duration: "16 weken",
    tagline: "Drie uur per dag terug — elke dag.",
    intro:
      "LogiTrack beheerde de distributie van 12 groothandels via een patchwork van Excel-bestanden en een verouderd ERP dat niet communiceerde met hun magazijnsoftware. Elke dag ging drie uur verloren aan handmatige invoer en foutcorrectie.",
    challenge: {
      heading: "De Uitdaging",
      body: "Het bedrijf draaide op Excel-bestanden die door 8 medewerkers simultaan werden bijgehouden. Orders werden dubbel ingevoerd, leveringen gingen mis, en het management had geen real-time inzicht. Bestaande software sloot niet aan op hun werkprocessen.",
    },
    approach: {
      heading: "Onze Aanpak",
      steps: [
        {
          label: "01 — Procesanalyse",
          text: "Twee weken meelopen met het team. Elk werkproces gedocumenteerd. User stories geschreven samen met eindgebruikers — niet de managers.",
        },
        {
          label: "02 — Architectuur",
          text: "React-frontend, Node.js/Express backend, PostgreSQL. Real-time via WebSockets. REST API voor ERP- en magazijnintegratie.",
        },
        {
          label: "03 — Development",
          text: "Agile sprints van 2 weken met demo per sprint. Gebruikers getest elke sprint. Uitrol via CI/CD pipeline.",
        },
        {
          label: "04 — Migratie & Training",
          text: "Data-migratie van 3 jaar Excel-data. Training voor 24 medewerkers. Twee weken parallel draaien als vangnet. Go-live zonder downtime.",
        },
      ],
    },
    results: [
      { icon: Clock, value: "−60%", label: "Administratietijd" },
      { icon: TrendingUp, value: "−89%", label: "Invoerfouten" },
      { icon: Users, value: "24", label: "Gebruikers Onboarded" },
      { icon: Award, value: "4.8★", label: "Gebruikerswaardering" },
    ],
    testimonial: {
      quote:
        "De software bespaart ons drie uur per dag — elke dag. Vlekkeloos opgeleverd, op tijd, binnen budget. We zijn al bezig met fase 2.",
      name: "Tom Bakker",
      role: "Operations Director, LogiTrack",
    },
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "REST API",
      "ERP-integratie",
      "CI/CD",
    ],
  },
];

const testimonialList = [
  {
    quote:
      "Onze omzet verdrievoudigde binnen vier maanden na de nieuwe webshop. Dit team denkt niet alleen in design — ze denken in resultaten.",
    name: "Sarah de Vries",
    role: "CEO, Maison Laurent",
  },
  {
    quote:
      "Van pagina 4 naar positie 1 op Google. Niet met trucjes, maar met echte strategie. De beste investering die we ooit gedaan hebben.",
    name: "Mark Jansen",
    role: "Eigenaar, ProFit Gym",
  },
  {
    quote:
      "De software die ze bouwden bespaart ons 3 uur per dag. Vlekkeloos opgeleverd, op tijd, binnen budget. Aanrader.",
    name: "Tom Bakker",
    role: "Operations Director, LogiTrack",
  },
];

// ── THEME TOGGLE (modern pill) ────────────────────────────────────────────────

function ThemeToggle({
  dark,
  onToggle,
  t,
}: {
  dark: boolean;
  onToggle: () => void;
  t: ReturnType<typeof theme>;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Naar dagmodus" : "Naar nachtmodus"}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "52px",
        height: "28px",
        borderRadius: "14px",
        background: dark ? "#1C1C1C" : "#C8C4BA",
        border: `1.5px solid ${dark ? "rgba(240,237,230,0.15)" : "rgba(10,10,10,0.18)"}`,
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.35s, border-color 0.35s",
        padding: 0,
      }}
    >
      {/* Sliding thumb */}
      <span
        style={{
          position: "absolute",
          top: "3px",
          left: dark ? "25px" : "3px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: dark ? LIME : "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "left 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.35s",
          boxShadow: dark ? `0 0 8px ${LIME}55` : "0 1px 4px rgba(0,0,0,0.25)",
        }}
      >
        {/* Sun rays (day) / crescent (night) drawn with CSS */}
        {dark ? (
          // Moon crescent via clipped circle
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M10 6.5A4.5 4.5 0 0 1 5.5 2a4.5 4.5 0 1 0 4.5 4.5z"
              fill="#080808"
            />
          </svg>
        ) : (
          // Sun
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2.5" fill="#F0EDE4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1={6 + 3.8 * Math.cos((deg * Math.PI) / 180)}
                y1={6 + 3.8 * Math.sin((deg * Math.PI) / 180)}
                x2={6 + 5.2 * Math.cos((deg * Math.PI) / 180)}
                y2={6 + 5.2 * Math.sin((deg * Math.PI) / 180)}
                stroke="#F0EDE4"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            ))}
          </svg>
        )}
      </span>

      {/* Background icons on track */}
      <span
        style={{
          position: "absolute",
          left: "6px",
          opacity: dark ? 0.25 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="2.2" fill={LIME} />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1={6 + 3.4 * Math.cos((deg * Math.PI) / 180)}
              y1={6 + 3.4 * Math.sin((deg * Math.PI) / 180)}
              x2={6 + 4.6 * Math.cos((deg * Math.PI) / 180)}
              y2={6 + 4.6 * Math.sin((deg * Math.PI) / 180)}
              stroke={LIME}
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </span>
      <span
        style={{
          position: "absolute",
          right: "6px",
          opacity: dark ? 0 : 0.3,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M9.5 6.2A3.8 3.8 0 0 1 5.8 2.5a3.8 3.8 0 1 0 3.7 3.7z"
            fill="#0A0A0A"
          />
        </svg>
      </span>
    </button>
  );
}

// ── CASE STUDY OVERLAY ────────────────────────────────────────────────────────

function CaseStudy({
  cs,
  onClose,
  onNext,
  onPrev,
  index,
  total,
  dark,
}: {
  cs: CaseStudy;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  index: number;
  total: number;
  dark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const t = theme(dark);
  const accent = t[cs.accentKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0;
  }, [cs]);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] overflow-y-auto"
      style={{
        background: t.bg,
        fontFamily: "'DM Sans', sans-serif",
        color: t.fg,
      }}
    >
      {/* Top bar */}
      <div
        className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4"
        style={{
          background: t.navBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${t.navBorder}`,
        }}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs tracking-widest uppercase"
          style={{ color: t.fgSubtle }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = t.fgSubtle)}
        >
          <ArrowLeft size={13} />{" "}
          <span className="hidden sm:inline">Terug naar Werk</span>
          <span className="sm:hidden">Terug</span>
        </button>
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.05em",
            color: t.logoAccent,
          }}
        >
          PIXEL<span style={{ color: t.logoBase }}>FORGE</span>
        </span>
        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 text-xs"
            style={{ color: t.fgSubtle, fontFamily: "'DM Mono', monospace" }}
          >
            <button
              onClick={onPrev}
              aria-label="Vorig"
              style={{ color: t.fgSubtle }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = t.fgSubtle)}
            >
              <ArrowLeft size={13} />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={onNext}
              aria-label="Volgend"
              style={{ color: t.fgSubtle }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = t.fgSubtle)}
            >
              <ArrowRight size={13} />
            </button>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center"
            style={{ border: `1px solid ${t.borderStrong}`, color: t.fg }}
            aria-label="Sluiten"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: "clamp(320px, 55vw, 600px)" }}
      >
        <img
          src={cs.heroImg}
          alt={cs.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: dark
              ? "grayscale(25%) contrast(1.1)"
              : "grayscale(15%) contrast(1.05) brightness(0.88)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.88) 70%, #080808 100%)"
              : "linear-gradient(to bottom, rgba(240,237,228,0.4) 0%, rgba(240,237,228,0.84) 70%, #F0EDE4 100%)",
          }}
        />
        <div
          className="relative z-10 flex flex-col justify-end px-4 sm:px-8 md:px-16 pb-10 sm:pb-14 pt-16 sm:pt-20"
          style={{ minHeight: "clamp(320px, 55vw, 600px)" }}
        >
          <div
            className="flex items-center gap-3 mb-3 sm:mb-4 text-xs tracking-[0.25em] uppercase"
            style={{ color: accent }}
          >
            <span className="w-6 h-px" style={{ background: accent }} />
            {cs.category} · {cs.year}
          </div>
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(2.2rem, 7vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: t.fg,
              maxWidth: "800px",
            }}
          >
            {cs.title.toUpperCase()}
          </h1>
          <p
            className="mt-3 sm:mt-4 text-base sm:text-xl font-light max-w-xl"
            style={{ color: t.fgMuted }}
          >
            {cs.tagline}
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-8 mt-6 sm:mt-8">
            {[
              { label: "Sector", label2: cs.sector },
              { label: "Doorlooptijd", label2: cs.duration },
              { label: "Categorie", label2: cs.category },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{
                    color: t.fgSubtle,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {m.label}
                </div>
                <div
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: t.fg }}
                >
                  {m.label2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-8 md:px-16 pb-20 sm:pb-32">
        {/* Intro */}
        <div
          className="max-w-[860px] py-10 sm:py-14 border-b"
          style={{ borderColor: t.border }}
        >
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed font-light"
            style={{ color: t.fgMuted }}
          >
            {cs.intro}
          </p>
        </div>

        {/* Challenge + Approach */}
        <div
          className="grid md:grid-cols-2 gap-px mt-px"
          style={{ background: t.gapBg }}
        >
          <div className="py-10 sm:py-12 md:pr-10" style={{ background: t.bg }}>
            <div
              className="flex items-center gap-3 mb-4 sm:mb-5 text-xs tracking-[0.25em] uppercase"
              style={{ color: accent }}
            >
              <span className="w-5 h-px" style={{ background: accent }} />
              {cs.challenge.heading}
            </div>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: t.fgMuted }}
            >
              {cs.challenge.body}
            </p>
          </div>
          <div
            className="py-10 sm:py-12 md:pl-10 border-t md:border-t-0 md:border-l"
            style={{ background: t.bg, borderColor: t.gapBg }}
          >
            <div
              className="flex items-center gap-3 mb-5 sm:mb-6 text-xs tracking-[0.25em] uppercase"
              style={{ color: accent }}
            >
              <span className="w-5 h-px" style={{ background: accent }} />
              {cs.approach.heading}
            </div>
            <div className="space-y-5">
              {cs.approach.steps.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: accent, fontFamily: "'DM Mono',monospace" }}
                  >
                    {s.label}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: t.fgMuted }}
                  >
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: t.gapBg }}
        >
          {cs.results.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 text-center"
                style={{ background: t.bg }}
              >
                <Icon
                  size={16}
                  style={{ color: accent, marginBottom: "0.6rem" }}
                />
                <span
                  style={{
                    fontFamily: "'Anton',sans-serif",
                    fontSize: "clamp(1.8rem,4.5vw,3rem)",
                    color: accent,
                    lineHeight: 1,
                  }}
                >
                  {r.value}
                </span>
                <span
                  className="mt-2 text-xs tracking-widest uppercase leading-tight"
                  style={{
                    color: t.fgSubtle,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {r.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="mt-12 sm:mt-14">
          <div
            className="flex items-center gap-3 mb-5 sm:mb-6 text-xs tracking-[0.25em] uppercase"
            style={{ color: accent }}
          >
            <span className="w-5 h-px" style={{ background: accent }} />
            Project Impressies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            {cs.galleryImgs.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ aspectRatio: "4/3", background: t.card }}
              >
                <img
                  src={img}
                  alt={`${cs.title} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs tracking-widest uppercase"
              style={{
                border: `1px solid ${accent}40`,
                color: accent,
                fontFamily: "'DM Mono',monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className="mt-12 sm:mt-14 p-6 sm:p-10 md:p-12 relative overflow-hidden"
          style={{ background: t.card, border: `1px solid ${accent}20` }}
        >
          <div
            className="absolute top-2 left-5 select-none pointer-events-none"
            style={{
              fontFamily: "'Anton',sans-serif",
              fontSize: "6rem",
              lineHeight: 0.7,
              color: accent,
              opacity: 0.07,
            }}
          >
            "
          </div>
          <div className="relative z-10">
            <p
              className="text-base sm:text-xl md:text-2xl leading-relaxed font-light max-w-3xl"
              style={{ color: t.fg }}
            >
              "{cs.testimonial.quote}"
            </p>
            <div className="flex items-center gap-4 mt-6 sm:mt-8">
              <div className="w-8 h-px" style={{ background: accent }} />
              <div>
                <div className="font-bold text-sm" style={{ color: t.fg }}>
                  {cs.testimonial.name}
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: t.fgSubtle }}
                >
                  {cs.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div
          className="mt-12 sm:mt-14 grid grid-cols-2 gap-px"
          style={{ background: t.gapBg }}
        >
          {[
            {
              label: "Vorig Project",
              dir: "prev",
              icon: <ArrowLeft size={11} />,
              proj: work[(index - 1 + work.length) % work.length],
              align: "left",
            },
            {
              label: "Volgend Project",
              dir: "next",
              icon: <ArrowRight size={11} />,
              proj: work[(index + 1) % work.length],
              align: "right",
            },
          ].map((item) => (
            <button
              key={item.dir}
              onClick={item.dir === "prev" ? onPrev : onNext}
              className="py-8 sm:py-10 px-5 sm:px-8 flex flex-col gap-1.5 transition-colors"
              style={{
                background: t.bg,
                textAlign: item.align as "left" | "right",
                alignItems: item.align === "right" ? "flex-end" : "flex-start",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = t.card)}
              onMouseLeave={(e) => (e.currentTarget.style.background = t.bg)}
            >
              <span
                className="text-xs tracking-widest uppercase flex items-center gap-1.5"
                style={{ color: t.fgSubtle }}
              >
                {item.dir === "prev" && item.icon}
                {item.label}
                {item.dir === "next" && item.icon}
              </span>
              <span
                style={{
                  fontFamily: "'Anton',sans-serif",
                  fontSize: "clamp(1rem,3vw,1.4rem)",
                  color: t.fg,
                  letterSpacing: "0.02em",
                }}
              >
                {item.proj.title.toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-sm mb-4" style={{ color: t.fgSubtle }}>
            Zin in soortgelijke resultaten?
          </p>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 font-bold tracking-widest uppercase text-sm transition-all duration-200 hover:gap-5"
            style={{ background: t.ctaBtn, color: t.ctaBtnFg }}
          >
            Start Uw Project <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const dark = true;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const scrollY = useScrollY();
  const t = theme(dark);
  const svcs = mkServices(t);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const navLinks = ["Diensten", "Werk", "Over Ons", "Contact"];

  return (
    <>
      {selectedWork !== null && (
        <CaseStudy
          cs={work[selectedWork]}
          index={selectedWork}
          total={work.length}
          dark={dark}
          onClose={() => setSelectedWork(null)}
          onNext={() => setSelectedWork((selectedWork + 1) % work.length)}
          onPrev={() =>
            setSelectedWork((selectedWork - 1 + work.length) % work.length)
          }
        />
      )}

      <div
        className="min-h-screen overflow-x-hidden"
        style={{
          background: t.bg,
          color: t.fg,
          fontFamily: "'DM Sans',sans-serif",
          transition: "background 0.35s, color 0.35s",
        }}
      >
        {/* ── NAV ── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4 transition-all duration-300"
          style={{
            background: scrollY > 40 ? t.navBg : "transparent",
            backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
            borderBottom: scrollY > 40 ? `1px solid ${t.navBorder}` : "none",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "'Anton',sans-serif",
              color: t.logoAccent,
              fontSize: "1.35rem",
              letterSpacing: "0.05em",
              flexShrink: 0,
            }}
          >
            PIXEL<span style={{ color: t.logoBase }}>FORGE</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-widest uppercase">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  style={{ color: t.fgSubtle, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = t.fg)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = t.fgSubtle)
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm tracking-widest uppercase font-bold transition-all duration-200 hover:gap-3"
              style={{ background: t.ctaBtn, color: t.ctaBtnFg }}
            >
              <span className="hidden md:inline">Start Project</span>
              <span className="md:hidden">Contact</span>
              <ArrowRight size={13} />
            </a>
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{ color: t.fg }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-6 sm:gap-8"
            style={{ background: t.bg }}
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-xl sm:text-2xl tracking-widest uppercase"
                style={{ color: t.fg, transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = t.logoAccent)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = t.fg)}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-8 py-3 text-sm font-bold tracking-widest uppercase"
              style={{ background: t.ctaBtn, color: t.ctaBtnFg }}
              onClick={() => setMenuOpen(false)}
            >
              Start Project
            </a>
          </div>
        )}

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{
            paddingTop: "clamp(6rem,15vw,10rem)",
            paddingBottom: "4rem",
            paddingLeft: "clamp(1.25rem,6vw,6rem)",
            paddingRight: "clamp(1.25rem,6vw,6rem)",
          }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Ghost word */}
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none w-full overflow-hidden"
            style={{
              fontFamily: "'Anton',sans-serif",
              fontSize: "clamp(5rem,25vw,22rem)",
              lineHeight: 0.85,
              color: "transparent",
              WebkitTextStroke: `1px ${t.ghostStroke}`,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            DIGITAL
          </div>

          <div className="relative z-10 max-w-[1100px]">
            <div
              className="inline-flex items-center gap-3 mb-5 sm:mb-7 text-xs tracking-[0.3em] uppercase"
              style={{ color: t.logoAccent }}
            >
              <span
                className="w-6 sm:w-8 h-px"
                style={{ background: t.logoAccent }}
              />
              Bureau voor Digitale Dominantie
            </div>

            <h1
              className="mb-6 sm:mb-8"
              style={{
                fontFamily: "'Anton',sans-serif",
                fontSize: "clamp(2.8rem,9vw,8.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                color: t.fg,
              }}
            >
              WIJ BOUWEN
              <br />
              <span style={{ color: t.logoAccent }}>WEBSITES</span>
              <br />
              DIE{" "}
              <span
                style={{
                  WebkitTextStroke: `2px ${CORAL}`,
                  color: "transparent",
                }}
              >
                WERKEN.
              </span>
            </h1>

            <p
              className="max-w-lg mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed"
              style={{ color: t.fgMuted }}
            >
              Web design, webshops, SEO-optimalisatie en maatwerksoftware —
              alles wat uw bedrijf nodig heeft om online te domineren.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-bold tracking-widest uppercase text-sm transition-all duration-200 hover:gap-5"
                style={{ background: t.ctaBtn, color: t.ctaBtnFg }}
              >
                Gratis Adviesgesprek <ArrowRight size={15} />
              </a>
              <a
                href="#werk"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-bold tracking-widest uppercase text-sm transition-all duration-200"
                style={{ border: `1px solid ${t.borderStrong}`, color: t.fg }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = t.fg)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = t.borderStrong)
                }
              >
                Bekijk Ons Werk
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: t.fgGhost }}
            >
              Scroll
            </span>
            <ChevronDown size={15} style={{ color: t.fgGhost }} />
          </div>

          <div
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 hidden xl:flex"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: t.fgGhost }}
            >
              PixelForge Studio © 2024
            </span>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div
          className="w-full overflow-hidden py-3 sm:py-4 border-y"
          style={{ borderColor: t.border, background: LIME }}
        >
          <div
            className="flex gap-10 sm:gap-12 whitespace-nowrap"
            style={{
              animation: "ticker 22s linear infinite",
              fontFamily: "'Anton',sans-serif",
              fontSize: "clamp(0.8rem,2.5vw,1.1rem)",
              letterSpacing: "0.05em",
              color: "#080808",
            }}
          >
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="flex items-center gap-10 sm:gap-12">
                  <span>WEB DESIGN</span>
                  <span style={{ color: CORAL }}>✦</span>
                  <span>WEBSHOPS</span>
                  <span style={{ color: CORAL }}>✦</span>
                  <span>SEO OPTIMALISATIE</span>
                  <span style={{ color: CORAL }}>✦</span>
                  <span>SOFTWARE OP MAAT</span>
                  <span style={{ color: CORAL }}>✦</span>
                </span>
              ))}
          </div>
        </div>

        <style>{`
          @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
          ::-webkit-scrollbar{width:4px}
          ::-webkit-scrollbar-track{background:transparent}
          ::-webkit-scrollbar-thumb{background:rgba(128,128,128,0.25)}
          ::-webkit-scrollbar-thumb:hover{background:rgba(214,255,0,0.45)}
        `}</style>

        {/* ── STATS ── *
        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-12 border-b" style={{ borderColor: t.border }}>
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: t.gapBg }}>
            {siteStats.map((s,i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:px-6 text-center" style={{ background: t.bg }}>
                <span style={{ fontFamily:"'Anton',sans-serif", fontSize:"clamp(2rem,5.5vw,4.5rem)", color: i%2===0?t.statA:t.statB, lineHeight:1 }}>
                  {s.value}
                </span>
                <span className="mt-2 sm:mt-3 text-xs tracking-widest uppercase leading-tight" style={{ color: t.fgSubtle }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>*/}

        {/* ── SERVICES ── */}
        <section id="diensten" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-14 gap-5">
              <div>
                <div
                  className="flex items-center gap-3 mb-3 sm:mb-4 text-xs tracking-[0.3em] uppercase"
                  style={{ color: t.logoAccent }}
                >
                  <span
                    className="w-6 sm:w-8 h-px"
                    style={{ background: t.logoAccent }}
                  />
                  Onze Diensten
                </div>
                <h2
                  style={{
                    fontFamily: "'Anton',sans-serif",
                    fontSize: "clamp(2rem,6vw,5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.01em",
                    color: t.fg,
                  }}
                >
                  WAT WIJ
                  <br />
                  <span style={{ color: t.logoAccent }}>VOOR U</span>
                  <br />
                  DOEN
                </h2>
              </div>
              <p
                className="max-w-sm text-sm leading-relaxed"
                style={{ color: t.fgMuted }}
              >
                Vier kerndiensten, één doel: uw bedrijf laten groeien online.
              </p>
            </div>

            <div
              className="grid sm:grid-cols-2 gap-px"
              style={{ background: t.gapBg }}
            >
              {svcs.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden p-6 sm:p-8 md:p-10 transition-colors duration-300"
                    style={{ background: t.bg }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = t.card)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = t.bg)
                    }
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 30% 30%,${s.color}08,transparent 70%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6 sm:mb-8">
                        <span
                          style={{
                            fontFamily: "'Anton',sans-serif",
                            fontSize: "clamp(2.5rem,6vw,4rem)",
                            lineHeight: 1,
                            color: t.fgGhost,
                          }}
                        >
                          {s.number}
                        </span>
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${s.color}18`,
                            border: `1px solid ${s.color}30`,
                          }}
                        >
                          <Icon size={20} style={{ color: s.color }} />
                        </div>
                      </div>
                      <div
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: s.color }}
                      >
                        {s.subtitle}
                      </div>
                      <h3
                        className="mb-3 sm:mb-4"
                        style={{
                          fontFamily: "'Anton',sans-serif",
                          fontSize: "clamp(1.6rem,4vw,2.25rem)",
                          lineHeight: 1,
                          color: t.fg,
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-6 sm:mb-8"
                        style={{ color: t.fgMuted }}
                      >
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 py-1 text-xs tracking-wider uppercase"
                            style={{
                              border: `1px solid ${s.color}30`,
                              color: s.color,
                              fontFamily: "'DM Mono',monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WORK ── */}
        <section
          id="werk"
          className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-t"
          style={{ borderColor: t.border }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div
              className="flex items-center gap-3 mb-3 sm:mb-4 text-xs tracking-[0.3em] uppercase"
              style={{ color: CORAL }}
            >
              <span className="w-6 sm:w-8 h-px" style={{ background: CORAL }} />
              Geselecteerd Werk
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4">
              <h2
                style={{
                  fontFamily: "'Anton',sans-serif",
                  fontSize: "clamp(2rem,6vw,5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                  color: t.fg,
                }}
              >
                RESULTATEN DIE
                <br />
                <span
                  style={{
                    WebkitTextStroke: `2px ${CORAL}`,
                    color: "transparent",
                  }}
                >
                  SPREKEN
                </span>
              </h2>
              <p className="text-sm" style={{ color: t.fgSubtle }}>
                Klik op een project voor de volledige case study.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {work.map((w, i) => {
                const accent = t[w.accentKey];
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedWork(i)}
                    className="group relative overflow-hidden text-left focus:outline-none"
                    style={{ aspectRatio: "4/3", background: t.card }}
                    aria-label={`Bekijk case study: ${w.title}`}
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: dark
                          ? "grayscale(30%) contrast(1.1)"
                          : "grayscale(20%) contrast(1.05)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ boxShadow: `inset 0 0 0 2px ${accent}` }}
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6"
                      style={{
                        background: dark
                          ? "linear-gradient(to top,rgba(8,8,8,0.95) 0%,rgba(8,8,8,0.2) 60%,transparent 100%)"
                          : "linear-gradient(to top,rgba(10,10,10,0.88) 0%,rgba(10,10,10,0.15) 60%,transparent 100%)",
                      }}
                    >
                      <div
                        className="text-xs tracking-widest uppercase mb-1.5"
                        style={{
                          color: accent,
                          fontFamily: "'DM Mono',monospace",
                        }}
                      >
                        {w.category}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Anton',sans-serif",
                          fontSize: "clamp(1.3rem,3.5vw,1.75rem)",
                          letterSpacing: "0.02em",
                          lineHeight: 1,
                          color: "#F0EDE6",
                        }}
                      >
                        {w.title}
                      </h3>
                      <div
                        className="mt-2 sm:mt-3 flex items-center gap-2 text-xs"
                        style={{ color: accent }}
                      >
                        <Star size={9} fill={accent} />
                        <span>{w.result}</span>
                      </div>
                      <div
                        className="mt-3 flex items-center gap-2 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                        style={{ color: "#F0EDE6" }}
                      >
                        <ExternalLink size={11} /> Bekijk Case Study
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-t"
          style={{ borderColor: t.border, background: t.bgAlt }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start md:items-center">
              <div>
                <div
                  className="flex items-center gap-3 mb-3 sm:mb-4 text-xs tracking-[0.3em] uppercase"
                  style={{ color: t.logoAccent }}
                >
                  <span
                    className="w-6 sm:w-8 h-px"
                    style={{ background: t.logoAccent }}
                  />
                  Klanten aan het Woord
                </div>
                <h2
                  style={{
                    fontFamily: "'Anton',sans-serif",
                    fontSize: "clamp(2rem,5vw,4rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.01em",
                    color: t.fg,
                  }}
                >
                  WAT ZE
                  <br />
                  <span style={{ color: t.logoAccent }}>ZEGGEN</span>
                </h2>
                <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-10">
                  {testimonialList.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className="h-1 transition-all duration-300"
                      style={{
                        width: i === activeTestimonial ? "3rem" : "1rem",
                        background:
                          i === activeTestimonial ? t.logoAccent : t.border,
                      }}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative" style={{ minHeight: "220px" }}>
                {testimonialList.map((te, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex flex-col justify-between transition-all duration-500"
                    style={{
                      opacity: i === activeTestimonial ? 1 : 0,
                      pointerEvents: i === activeTestimonial ? "auto" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Anton',sans-serif",
                        fontSize: "5rem",
                        lineHeight: 0.7,
                        color: t.logoAccent,
                        opacity: 0.1,
                      }}
                    >
                      "
                    </div>
                    <p
                      className="text-base sm:text-xl md:text-2xl leading-relaxed font-light"
                      style={{ color: t.fg }}
                    >
                      "{te.quote}"
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-4">
                      <div
                        className="w-8 h-px"
                        style={{ background: t.logoAccent }}
                      />
                      <div>
                        <div
                          className="font-bold text-sm"
                          style={{ color: t.fg }}
                        >
                          {te.name}
                        </div>
                        <div
                          className="text-xs tracking-widest uppercase mt-1"
                          style={{ color: t.fgSubtle }}
                        >
                          {te.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section
          className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden"
          style={{ background: LIME }}
        >
          <div
            className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "'Anton',sans-serif",
              fontSize: "clamp(4rem,18vw,18rem)",
              color: "rgba(8,8,8,0.06)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            LATEN WE BOUWEN
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10">
            <h2
              style={{
                fontFamily: "'Anton',sans-serif",
                fontSize: "clamp(2rem,6vw,5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                color: "#080808",
              }}
            >
              KLAAR OM TE
              <br />
              DOMINEREN?
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 font-bold tracking-widest uppercase text-sm transition-all duration-200 hover:gap-5 flex-shrink-0"
              style={{ background: "#080808", color: LIME }}
            >
              Start Nu <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-t"
          style={{ borderColor: t.border }}
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div
                className="flex items-center gap-3 mb-3 sm:mb-4 text-xs tracking-[0.3em] uppercase"
                style={{ color: t.logoAccent }}
              >
                <span
                  className="w-6 sm:w-8 h-px"
                  style={{ background: t.logoAccent }}
                />
                Contact
              </div>
              <h2
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: "'Anton',sans-serif",
                  fontSize: "clamp(2rem,6vw,4.5rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.01em",
                  color: t.fg,
                }}
              >
                LATEN WE
                <br />
                <span style={{ color: t.logoAccent }}>PRATEN</span>
              </h2>
              <p
                className="text-sm leading-relaxed mb-8 sm:mb-10"
                style={{ color: t.fgMuted }}
              >
                Vertel ons over uw project. Binnen 24 uur ontvangt u een
                persoonlijk antwoord — geen geautomatiseerde reacties, geen
                salespitch. Gewoon een eerlijk gesprek.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Email", value: "jonas@pixelforge.be" },
                  { label: "Telefoon", value: "+31 (0)479 555 822" },
                  { label: "Locatie", value: "Koekelare, België" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span
                      className="text-xs tracking-widest uppercase w-18 flex-shrink-0"
                      style={{
                        color: t.fgSubtle,
                        fontFamily: "'DM Mono',monospace",
                        minWidth: "4.5rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm" style={{ color: t.fg }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    id: "name",
                    label: "Naam",
                    type: "text",
                    ph: "Jan de Vries",
                    key: "name" as const,
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    ph: "jan@bedrijf.be",
                    key: "email" as const,
                  },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5 sm:gap-2">
                    <label
                      className="text-xs tracking-widest uppercase"
                      style={{
                        color: t.fgSubtle,
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={formData[f.key]}
                      onChange={(e) =>
                        setFormData({ ...formData, [f.key]: e.target.value })
                      }
                      placeholder={f.ph}
                      className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: t.input,
                        border: `1px solid ${t.inputBorder}`,
                        color: t.fg,
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = t.logoAccent)
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = t.inputBorder)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label
                  className="text-xs tracking-widest uppercase"
                  style={{
                    color: t.fgSubtle,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  Bericht
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Vertel ons over uw project, uw doelen en uw budget..."
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none resize-none transition-all duration-200"
                  style={{
                    background: t.input,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.fg,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = t.logoAccent)}
                  onBlur={(e) => (e.target.style.borderColor = t.inputBorder)}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 py-3.5 sm:py-4 font-bold tracking-widest uppercase text-sm transition-all duration-200 hover:gap-5"
                style={{
                  background: submitted ? CORAL : t.ctaBtn,
                  color: submitted ? "#F0EDE4" : t.ctaBtnFg,
                }}
              >
                {submitted ? (
                  "Verzonden! We nemen snel contact op."
                ) : (
                  <>
                    <span>Verstuur Bericht</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="py-8 sm:py-10 px-4 sm:px-8 md:px-12 border-t"
          style={{ borderColor: t.border }}
        >
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <span
              style={{
                fontFamily: "'Anton',sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                color: t.logoAccent,
              }}
            >
              PIXEL<span style={{ color: t.logoBase }}>FORGE</span>
            </span>
            <div
              className="flex flex-wrap justify-center gap-5 sm:gap-8 text-xs tracking-widest uppercase"
              style={{ color: t.fgSubtle }}
            >
              {["Diensten", "Werk", "Privacy", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{ transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = t.fg)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = t.fgSubtle)
                  }
                >
                  {l}
                </a>
              ))}
            </div>
            <span
              className="text-xs"
              style={{ color: t.fgGhost, fontFamily: "'DM Mono',monospace" }}
            >
              © 2024 PixelForge Studio
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
