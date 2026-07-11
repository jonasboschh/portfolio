import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyBody } from "@/components/case-study/body";
import { CaseStudyTopBar } from "@/components/case-study/top-bar";
import { Footer } from "@/components/footer";
import { adjacentCaseStudy, getCaseStudy, site } from "@/data/content";

export const Route = createFileRoute("/werk/$slug")({
	loader: ({ params }) => {
		if (!getCaseStudy(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const cs = getCaseStudy(params.slug);
		if (!cs) return {};
		const title = `${cs.title} — ${cs.category} | ${site.name}`;
		const url = `${site.url}/werk/${cs.slug}`;
		return {
			meta: [
				{ title },
				{ name: "description", content: cs.intro },
				{ property: "og:title", content: title },
				{ property: "og:description", content: cs.intro },
				{ property: "og:type", content: "article" },
				{ property: "og:url", content: url },
				{ property: "og:image", content: cs.heroImg },
			],
			links: [{ rel: "canonical", href: url }],
		};
	},
	notFoundComponent: NotFoundCaseStudy,
	component: CaseStudyPage,
});

function CaseStudyPage() {
	const { slug } = Route.useParams();
	const cs = getCaseStudy(slug);
	if (!cs) return null;
	const prev = adjacentCaseStudy(slug, -1);
	const next = adjacentCaseStudy(slug, 1);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: cs.title,
		about: cs.category,
		description: cs.intro,
		creator: { "@type": "Organization", name: site.name },
		datePublished: cs.year,
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data, no user input
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<CaseStudyTopBar current={cs} prev={prev} next={next} />
			<CaseStudyBody cs={cs} prev={prev} next={next} />
			<Footer />
		</>
	);
}

function NotFoundCaseStudy() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
			<span className="font-display text-[clamp(3rem,10vw,6rem)] leading-none text-lime">
				404
			</span>
			<p className="text-paper/60">Deze case study bestaat niet (meer).</p>
			<a
				href="/#werk"
				className="mt-4 inline-flex items-center gap-2 bg-lime px-6 py-3 text-sm font-bold tracking-widest text-ink uppercase"
			>
				Terug naar werk
			</a>
		</div>
	);
}
