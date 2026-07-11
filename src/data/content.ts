import {
	Award,
	Clock,
	Code2,
	Globe,
	type LucideIcon,
	Search,
	ShoppingCart,
	TrendingUp,
	Users,
} from "lucide-react";

export const site = {
	name: "PixelForge Studio",
	tagline: "Bureau voor Digitale Dominantie",
	description:
		"PixelForge Studio bouwt websites, webshops, SEO en maatwerksoftware voor bedrijven die online willen winnen. Gevestigd in Koekelare, België.",
	url: "https://boschh.netlify.app",
	email: "jonas@pixelforge.be",
	phone: "+32 (0)479 555 822",
	location: "Koekelare, België",
};

export const navLinks = [
	{ label: "Diensten", href: "/#diensten" },
	{ label: "Werk", href: "/#werk" },
	{ label: "Over Ons", href: "/#over-ons" },
	{ label: "Contact", href: "/#contact" },
];

export type Service = {
	icon: LucideIcon;
	number: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	accent: "lime" | "coral" | "cyan" | "violet";
};

export const services: Service[] = [
	{
		icon: Globe,
		number: "01",
		title: "Web Design",
		subtitle: "Visuele Impact",
		description:
			"Uw website is vaak het eerste echte contact met een klant — en de meeste laden traag, ogen generiek en zeggen niets over wie u bent. Wij ontwerpen vanaf nul: eigen typografie, eigen ritme, interacties die kloppen met uw merk in plaats van een sjabloon te volgen.",
		tags: ["UI/UX", "Responsive", "Animatie", "Branding"],
		accent: "lime",
	},
	{
		icon: ShoppingCart,
		number: "02",
		title: "Webshops",
		subtitle: "Verkoop 24/7",
		description:
			"Een webshop die er goed uitziet maar niet verkoopt, is een dure folder. Wij bouwen op Shopify, WooCommerce of maatwerk met checkout, laadtijd en productpresentatie als uitgangspunt — niet als bijzaak.",
		tags: ["WooCommerce", "Shopify", "Betalingen", "Conversie"],
		accent: "coral",
	},
	{
		icon: Search,
		number: "03",
		title: "SEO Optimalisatie",
		subtitle: "Gevonden Worden",
		description:
			"De eerste positie op Google wint bijna altijd het meeste verkeer, en bijna niemand bladert door naar pagina twee. Wij combineren technische fundamenten, content die mensen echt lezen en linkbuilding dat standhoudt.",
		tags: ["On-page SEO", "Technisch", "Content", "Analytics"],
		accent: "cyan",
	},
	{
		icon: Code2,
		number: "04",
		title: "Software",
		subtitle: "Op Maat Gebouwd",
		description:
			"Excel-bestanden en verouderde systemen kosten teams elke dag tijd die ze niet hebben. Wij bouwen software rond hoe uw bedrijf daadwerkelijk werkt — van interne tools tot volledige platforms, schaalbaar vanaf de eerste regel code.",
		tags: ["React", "Node.js", "API's", "Databases"],
		accent: "violet",
	},
];

export type CaseStudy = {
	slug: string;
	title: string;
	category: string;
	accent: "lime" | "coral" | "cyan";
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
	results: { icon: LucideIcon; value: string; label: string }[];
	testimonial: { quote: string; name: string; role: string };
	homeQuote: string;
	tags: string[];
};

export const caseStudies: CaseStudy[] = [
	{
		slug: "maison-laurent",
		title: "Maison Laurent",
		category: "Webshop + Branding",
		accent: "lime",
		img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&auto=format",
		heroImg:
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop&auto=format",
		galleryImgs: [
			"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&h=600&fit=crop&auto=format",
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&auto=format",
			"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=600&fit=crop&auto=format",
		],
		result: "+340% omzet in 6 maanden",
		year: "2026",
		sector: "Fashion & Lifestyle",
		duration: "8 weken",
		tagline: "Dezelfde exclusiviteit, nu ook online.",
		intro:
			"Maison Laurent bouwde in tien jaar een sterke naam op in de Amsterdamse boetiekscene, maar hun website deed het merk oneer aan: traag, gedateerd, en met een checkout die klanten actief wegjoeg. De opdracht was scherp geformuleerd — bouw een webshop die net zo exclusief aanvoelt als de winkel zelf.",
		challenge: {
			heading: "De Uitdaging",
			body: "De winkel had een trouwe klantenkring, maar online verkocht het merk nauwelijks. De bestaande Shopify-store miste elke vorm van merkidentiteit en de checkout kende een abandonment rate van 78% — gemiddeld €14.000 aan gemiste omzet per maand.",
		},
		approach: {
			heading: "Onze Aanpak",
			steps: [
				{
					label: "01 — Discovery",
					text: "Interviews met twaalf vaste klanten, heatmaps en sessie-opnames van het bestaande platform, en een analyse van acht directe concurrenten.",
				},
				{
					label: "02 — Design",
					text: "Een nieuw visueel systeem van de grond af: typografie, kleurpalet en fotografierichtlijnen. Mobiel als uitgangspunt, elke wireframe getoetst bij de doelgroep.",
				},
				{
					label: "03 — Development",
					text: "Shopify 2.0 met eigen liquid-componenten, 360°-fotografie en zoomfunctie. PageSpeed-score van 98/100 en een naadloze koppeling met het bestaande ERP.",
				},
				{
					label: "04 — Launch & Groei",
					text: "Gefaseerde livegang met A/B-tests, een herbouwde SEO-structuur en een geconfigureerde Google Shopping-campagne.",
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
				"Binnen vier maanden na de livegang was onze omzet verdrievoudigd. Ze leverden niet alleen een mooie website — ze leverden een systeem dat converteert. De beste investering die we als merk hebben gedaan.",
			name: "Sarah de Vries",
			role: "CEO, Maison Laurent",
		},
		homeQuote:
			"Onze omzet verdrievoudigde in vier maanden. Dit team denkt in resultaten, niet alleen in design.",
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
		slug: "profit-gym",
		title: "ProFit Gym",
		category: "Web Design + SEO",
		accent: "coral",
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
		tagline: "Drie vestigingen, nul zichtbaarheid op Google.",
		intro:
			"ProFit Gym runt drie vestigingen in Rotterdam, maar wie 'sportschool Rotterdam' googelde, kwam ze niet tegen — pagina 4, in het beste geval. Nieuwe leden kwamen vrijwel uitsluitend via mond-tot-mondreclame, en met een concurrent die tweehonderd meter verderop een nieuwe vestiging opende, was er geen tijd te verliezen.",
		challenge: {
			heading: "De Uitdaging",
			body: "Drie concurrenten bezetten de eerste Google-pagina voor elke relevante zoekterm in Rotterdam. De site was niet mobielvriendelijk, laadde in 6,4 seconden, en de Google Business-profielen van alle drie de vestigingen waren onvolledig.",
		},
		approach: {
			heading: "Onze Aanpak",
			steps: [
				{
					label: "01 — SEO Audit",
					text: "Een volledige technische audit bracht 234 losse issues aan het licht. Daarna zoekwoordenonderzoek gericht op Rotterdam: welke termen waren binnen negentig dagen realistisch te winnen?",
				},
				{
					label: "02 — Nieuwe Website",
					text: "Volledig nieuw, mobiel-eerst ontwerp met een eigen geoptimaliseerde landingspagina per vestiging. Core Web Vitals op alle metrics in het groen.",
				},
				{
					label: "03 — Content Strategie",
					text: "Twaalf SEO-geoptimaliseerde artikelen, FAQ-secties rond long-tail zoektermen, en linkbuilding via achttien lokale samenwerkingen.",
				},
				{
					label: "04 — Google Business",
					text: "Alle drie de profielen volledig aangevuld. Een actieve reviewstrategie bracht het aantal reviews van 23 naar ruim 180, met wekelijks nieuwe posts en beantwoorde vragen.",
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
				"We stonden op pagina 4 en nu op positie 1, binnen negentig dagen. Precies wat ze beloofden, precies op tijd geleverd. Ons ledenaantal groeide daarna met 40% in een jaar.",
			name: "Mark Jansen",
			role: "Eigenaar, ProFit Gym",
		},
		homeQuote:
			"Van pagina 4 naar positie 1 op Google — zonder trucjes, met een echte strategie.",
		tags: [
			"SEO",
			"Lokale SEO",
			"WordPress",
			"Google Business",
			"Content",
			"Linkbuilding",
		],
	},
	{
		slug: "logitrack-pro",
		title: "LogiTrack Pro",
		category: "Maatwerk Software",
		accent: "cyan",
		img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
		heroImg:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format",
		galleryImgs: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
			"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=600&fit=crop&auto=format",
			"https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&h=600&fit=crop&auto=format",
		],
		result: "60% minder administratietijd",
		year: "2026",
		sector: "Logistiek & Supply Chain",
		duration: "16 weken",
		tagline: "Drie uur per dag terug — elke dag.",
		intro:
			"LogiTrack coördineerde de distributie voor twaalf groothandels via een lappendeken van Excel-bestanden en een verouderd ERP-systeem dat niet praatte met de magazijnsoftware. Elke dag ging er drie uur verloren aan handmatige invoer en het corrigeren van fouten.",
		challenge: {
			heading: "De Uitdaging",
			body: "Acht medewerkers hielden tegelijk dezelfde Excel-bestanden bij. Orders werden dubbel ingevoerd, leveringen liepen mis, en het management had geen actueel overzicht. Bestaande standaardsoftware sloot niet aan op hun werkwijze.",
		},
		approach: {
			heading: "Onze Aanpak",
			steps: [
				{
					label: "01 — Procesanalyse",
					text: "Twee weken meelopen op de werkvloer, elk proces in kaart gebracht. User stories geschreven samen met de mensen die er dagelijks mee werken — niet met het management.",
				},
				{
					label: "02 — Architectuur",
					text: "React-frontend, Node.js/Express backend, PostgreSQL als database, en real-time updates via WebSockets. Een REST API verzorgt de koppeling met ERP en magazijnsoftware.",
				},
				{
					label: "03 — Development",
					text: "Sprints van twee weken, telkens met een demo en gebruikerstest. Uitrol volledig via een CI/CD-pipeline.",
				},
				{
					label: "04 — Migratie & Training",
					text: "Drie jaar aan Excel-data gemigreerd, 24 medewerkers getraind, en twee weken parallel gedraaid als vangnet. De overstap verliep zonder downtime.",
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
				"Drie uur per dag terug, elke dag — dat is wat deze software ons oplevert. Vlekkeloos gebouwd, op tijd en binnen budget. We zijn inmiddels gestart met fase twee.",
			name: "Tom Bakker",
			role: "Operations Director, LogiTrack",
		},
		homeQuote:
			"De software bespaart ons drie uur per dag. Op tijd en binnen budget opgeleverd.",
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

export function getCaseStudy(slug: string) {
	return caseStudies.find((c) => c.slug === slug);
}

export function adjacentCaseStudy(slug: string, dir: 1 | -1) {
	const i = caseStudies.findIndex((c) => c.slug === slug);
	const next = (i + dir + caseStudies.length) % caseStudies.length;
	return caseStudies[next];
}
