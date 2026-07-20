import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WorkGrid } from "@/components/work-grid";
import { site } from "@/data/content";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: `${site.name} — ${site.tagline}` },
			{ name: "description", content: site.description },
			{ property: "og:title", content: `${site.name} — ${site.tagline}` },
			{ property: "og:description", content: site.description },
			{ property: "og:url", content: site.url },
			{ name:"google-site-verification", content:"P16xafW5KFcSXE5WkqQcvat0o2qaSmKUWx_rWwF6ehc" }
		],
		links: [{ rel: "canonical", href: site.url }],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Marquee />
				<Services />
				<WorkGrid />
				<Testimonials />
				<CtaBand />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
