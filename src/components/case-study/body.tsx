import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/reveal";
import type { CaseStudy } from "@/data/content";
import { accentClasses } from "@/lib/accent";

export function CaseStudyBody({
	cs,
	prev,
	next,
}: {
	cs: CaseStudy;
	prev: CaseStudy;
	next: CaseStudy;
}) {
	const a = accentClasses[cs.accent];

	return (
		<article>
			<div
				className="relative overflow-hidden"
				style={{ minHeight: "clamp(320px, 55vw, 600px)" }}
			>
				<img
					src={cs.heroImg}
					alt={cs.title}
					className="absolute inset-0 h-full w-full object-cover grayscale-[25%] contrast-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-ink/50 from-0% via-ink/90 via-70% to-ink" />
				<div
					className="relative z-10 flex flex-col justify-end px-4 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-14 md:px-16"
					style={{ minHeight: "clamp(320px, 55vw, 600px)" }}
				>
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
					>
						<div
							className={`mb-3 flex items-center gap-3 text-xs tracking-[0.25em] uppercase sm:mb-4 ${a.text}`}
						>
							<span className={`h-px w-6 ${a.bg}`} />
							{cs.category} · {cs.year}
						</div>
						<h1 className="max-w-200 font-display text-[clamp(2.2rem,7vw,6rem)] leading-[0.9] tracking-tight text-paper uppercase">
							{cs.title}
						</h1>
						<p className="mt-3 max-w-xl text-base font-light text-paper/60 sm:mt-4 sm:text-xl">
							{cs.tagline}
						</p>
						<div className="mt-6 flex flex-wrap gap-4 sm:mt-8 sm:gap-8">
							{[
								{ label: "Sector", value: cs.sector },
								{ label: "Doorlooptijd", value: cs.duration },
								{ label: "Categorie", value: cs.category },
							].map((m) => (
								<div key={m.label}>
									<div className="mb-1 font-mono text-xs tracking-widest text-paper/40 uppercase">
										{m.label}
									</div>
									<div className="text-xs font-medium text-paper sm:text-sm">
										{m.value}
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			<div className="px-4 pb-20 sm:px-8 sm:pb-32 md:px-16">
				<Reveal className="max-w-215 border-b border-paper/8 py-10 sm:py-14">
					<p className="text-base leading-relaxed font-light text-paper/60 sm:text-lg md:text-xl">
						{cs.intro}
					</p>
				</Reveal>

				<div className="mt-px grid gap-px bg-paper/8 md:grid-cols-2">
					<Reveal className="bg-ink py-10 sm:py-12 md:pr-10">
						<div
							className={`mb-4 flex items-center gap-3 text-xs tracking-[0.25em] uppercase sm:mb-5 ${a.text}`}
						>
							<span className={`h-px w-5 ${a.bg}`} />
							{cs.challenge.heading}
						</div>
						<p className="text-sm leading-relaxed text-paper/60 sm:text-base">
							{cs.challenge.body}
						</p>
					</Reveal>
					<Reveal
						delay={0.1}
						className="border-t border-paper/8 bg-ink py-10 sm:py-12 md:border-t-0 md:border-l md:pl-10"
					>
						<div
							className={`mb-5 flex items-center gap-3 text-xs tracking-[0.25em] uppercase sm:mb-6 ${a.text}`}
						>
							<span className={`h-px w-5 ${a.bg}`} />
							{cs.approach.heading}
						</div>
						<div className="space-y-5">
							{cs.approach.steps.map((s) => (
								<div key={s.label}>
									<div
										className={`mb-1 font-mono text-xs tracking-widest uppercase ${a.text}`}
									>
										{s.label}
									</div>
									<p className="text-sm leading-relaxed text-paper/60">
										{s.text}
									</p>
								</div>
							))}
						</div>
					</Reveal>
				</div>

				<RevealGroup className="mt-12 grid grid-cols-2 gap-px bg-paper/8 sm:mt-14 md:grid-cols-4">
					{cs.results.map((r) => {
						const Icon = r.icon;
						return (
							<motion.div
								key={r.label}
								variants={revealItem}
								className="flex flex-col items-center justify-center bg-ink px-4 py-8 text-center sm:py-12"
							>
								<Icon size={16} className={`mb-2.5 ${a.text}`} />
								<span
									className={`font-display text-[clamp(1.8rem,4.5vw,3rem)] leading-none ${a.text}`}
								>
									{r.value}
								</span>
								<span className="mt-2 text-xs leading-tight tracking-widest text-paper/40 uppercase">
									{r.label}
								</span>
							</motion.div>
						);
					})}
				</RevealGroup>

				<div className="mt-12 sm:mt-14">
					<Reveal
						className={`mb-5 flex items-center gap-3 text-xs tracking-[0.25em] uppercase sm:mb-6 ${a.text}`}
					>
						<span className={`h-px w-5 ${a.bg}`} />
						Project Impressies
					</Reveal>
					<RevealGroup className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
						{cs.galleryImgs.map((img, i) => (
							<motion.div
								key={img}
								variants={revealItem}
								className="aspect-4/3 overflow-hidden bg-card"
							>
								<img
									src={img}
									alt={`${cs.title} impressie ${i + 1}`}
									loading="lazy"
									className="h-full w-full object-cover object-center grayscale-[15%] contrast-105 transition-transform duration-700 hover:scale-105"
								/>
							</motion.div>
						))}
					</RevealGroup>
				</div>

				<Reveal className="mt-10 flex flex-wrap gap-2 sm:mt-12">
					{cs.tags.map((tag) => (
						<span
							key={tag}
							className={`border px-3 py-1.5 font-mono text-xs tracking-widest uppercase ${a.text} ${a.borderSoft}`}
						>
							{tag}
						</span>
					))}
				</Reveal>

				<Reveal
					className={`relative mt-12 overflow-hidden border bg-card p-6 sm:mt-14 sm:p-10 md:p-12 ${a.borderSoft}`}
				>
					<div
						aria-hidden
						className={`absolute top-2 left-5 font-display text-[6rem] leading-[0.7] select-none ${a.text} opacity-[0.07]`}
					>
						"
					</div>
					<div className="relative z-10">
						<p className="max-w-3xl text-base leading-relaxed font-light text-paper sm:text-xl md:text-2xl">
							"{cs.testimonial.quote}"
						</p>
						<div className="mt-6 flex items-center gap-4 sm:mt-8">
							<div className={`h-px w-8 ${a.bg}`} />
							<div>
								<div className="text-sm font-bold text-paper">
									{cs.testimonial.name}
								</div>
								<div className="mt-1 text-xs tracking-widest text-paper/40 uppercase">
									{cs.testimonial.role}
								</div>
							</div>
						</div>
					</div>
				</Reveal>

				<div className="mt-12 grid grid-cols-2 gap-px bg-paper/8 sm:mt-14">
					<Link
						to="/werk/$slug"
						params={{ slug: prev.slug }}
						className="flex flex-col items-start gap-1.5 bg-ink px-5 py-8 text-left transition-colors hover:bg-card sm:px-8 sm:py-10"
					>
						<span className="flex items-center gap-1.5 text-xs tracking-widest text-paper/40 uppercase">
							<ArrowLeft size={11} /> Vorig Project
						</span>
						<span className="font-display text-[clamp(1rem,3vw,1.4rem)] tracking-wide text-paper uppercase">
							{prev.title}
						</span>
					</Link>
					<Link
						to="/werk/$slug"
						params={{ slug: next.slug }}
						className="flex flex-col items-end gap-1.5 bg-ink px-5 py-8 text-right transition-colors hover:bg-card sm:px-8 sm:py-10"
					>
						<span className="flex items-center gap-1.5 text-xs tracking-widest text-paper/40 uppercase">
							Volgend Project <ArrowRight size={11} />
						</span>
						<span className="font-display text-[clamp(1rem,3vw,1.4rem)] tracking-wide text-paper uppercase">
							{next.title}
						</span>
					</Link>
				</div>

				<Reveal className="mt-12 text-center sm:mt-14">
					<p className="mb-4 text-sm text-paper/40">
						Zin in soortgelijke resultaten?
					</p>
					<a
						href="/#contact"
						className="group inline-flex items-center gap-3 bg-lime px-8 py-3.5 text-sm font-bold tracking-widest text-ink uppercase sm:px-10 sm:py-4"
					>
						Start Uw Project
						<ArrowUpRight
							size={15}
							className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</Reveal>
			</div>
		</article>
	);
}
