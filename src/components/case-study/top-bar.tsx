import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import type { CaseStudy } from "@/data/content";
import { caseStudies } from "@/data/content";

export function CaseStudyTopBar({
	current,
	prev,
	next,
}: {
	current: CaseStudy;
	prev: CaseStudy;
	next: CaseStudy;
}) {
	const index = caseStudies.findIndex((c) => c.slug === current.slug);

	return (
		<div className="sticky top-0 z-20 flex items-center justify-between border-b border-paper/8 bg-ink/95 px-4 py-3 backdrop-blur-md sm:px-8 sm:py-4 md:px-12">
			<Link
				to="/"
				hash="werk"
				className="flex items-center gap-2 text-xs tracking-widest text-paper/40 uppercase transition-colors hover:text-paper"
			>
				<ArrowLeft size={13} />
				<span className="hidden sm:inline">Terug naar Werk</span>
				<span className="sm:hidden">Terug</span>
			</Link>

			<Link to="/">
				<Logo />
			</Link>

			<div className="flex items-center gap-3">
				<div className="hidden items-center gap-2 font-mono text-xs text-paper/40 sm:flex">
					<Link
						to="/werk/$slug"
						params={{ slug: prev.slug }}
						aria-label="Vorig project"
						className="transition-colors hover:text-paper"
					>
						<ArrowLeft size={13} />
					</Link>
					<span>
						{String(index + 1).padStart(2, "0")} /{" "}
						{String(caseStudies.length).padStart(2, "0")}
					</span>
					<Link
						to="/werk/$slug"
						params={{ slug: next.slug }}
						aria-label="Volgend project"
						className="transition-colors hover:text-paper"
					>
						<ArrowRight size={13} />
					</Link>
				</div>
				<Link
					to="/"
					hash="werk"
					aria-label="Sluiten"
					className="flex h-8 w-8 items-center justify-center border border-paper/20 text-paper sm:h-9 sm:w-9"
				>
					<ArrowLeft size={15} className="sm:hidden" />
					<span className="hidden text-lg leading-none sm:block">×</span>
				</Link>
			</div>
		</div>
	);
}
