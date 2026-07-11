import { Link } from "@tanstack/react-router";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { caseStudies } from "@/data/content";
import { accentClasses } from "@/lib/accent";

export function WorkGrid() {
	return (
		<section
			id="werk"
			className="border-t border-paper/8 px-4 py-16 sm:px-8 sm:py-24 md:px-12"
		>
			<div className="mx-auto max-w-350">
				<Reveal>
					<SectionEyebrow accent="coral" className="mb-3 sm:mb-4">
						Geselecteerd Werk
					</SectionEyebrow>
				</Reveal>
				<div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
					<Reveal delay={0.1}>
						<h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight text-paper">
							RESULTATEN DIE
							<br />
							<span className="text-transparent [-webkit-text-stroke:2px_var(--color-coral)]">
								SPREKEN
							</span>
						</h2>
					</Reveal>
					<Reveal delay={0.2} className="text-sm text-paper/40">
						Klik op een project voor de volledige case study.
					</Reveal>
				</div>

				<RevealGroup className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
					{caseStudies.map((w) => {
						const a = accentClasses[w.accent];
						return (
							<motion.div key={w.slug} variants={revealItem}>
								<Link
									to="/werk/$slug"
									params={{ slug: w.slug }}
									className="group relative block aspect-4/3 overflow-hidden bg-card focus:outline-none"
									aria-label={`Bekijk case study: ${w.title}`}
								>
									<img
										src={w.img}
										alt={w.title}
										loading="lazy"
										className="h-full w-full object-cover object-center grayscale-[30%] contrast-110 transition-transform duration-700 group-hover:scale-110"
									/>
									<div
										className={`pointer-events-none absolute inset-0 opacity-0 ring-2 transition-opacity duration-300 group-hover:opacity-100 ${a.ring} ring-inset`}
									/>
									<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink from-0% via-ink/20 via-60% to-transparent p-4 sm:p-5 lg:p-6">
										<div
											className={`mb-1.5 font-mono text-xs tracking-widest uppercase ${a.text}`}
										>
											{w.category}
										</div>
										<h3 className="font-display text-[clamp(1.3rem,3.5vw,1.75rem)] leading-none tracking-wide text-paper">
											{w.title}
										</h3>
										<div
											className={`mt-2 flex items-center gap-2 text-xs ${a.text}`}
										>
											<Star size={9} className="fill-current" />
											<span>{w.result}</span>
										</div>
										<div className="mt-3 flex translate-y-2 items-center gap-2 text-xs tracking-widest text-paper uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
											<ExternalLink size={11} /> Bekijk Case Study
										</div>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</RevealGroup>
			</div>
		</section>
	);
}
