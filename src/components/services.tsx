import { motion } from "motion/react";
import { Reveal, RevealGroup, revealItem } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { services } from "@/data/content";
import { accentClasses } from "@/lib/accent";

export function Services() {
	return (
		<section id="diensten" className="px-4 py-16 sm:px-8 sm:py-24 md:px-12">
			<div className="mx-auto max-w-350">
				<div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
					<Reveal>
						<SectionEyebrow className="mb-3 sm:mb-4">
							Onze Diensten
						</SectionEyebrow>
						<h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight text-paper">
							WAT WIJ
							<br />
							<span className="text-lime">VOOR U</span>
							<br />
							DOEN
						</h2>
					</Reveal>
					<Reveal
						delay={0.15}
						className="max-w-sm text-sm leading-relaxed text-paper/60"
					>
						Vier kerndiensten, één doel: uw bedrijf laten groeien online.
					</Reveal>
				</div>

				<RevealGroup className="grid gap-px bg-paper/8 sm:grid-cols-2">
					{services.map((s) => {
						const Icon = s.icon;
						const a = accentClasses[s.accent];
						return (
							<motion.div
								key={s.title}
								variants={revealItem}
								className="group relative overflow-hidden bg-ink p-6 transition-colors duration-300 hover:bg-card sm:p-8 md:p-10"
							>
								<div className="relative z-10">
									<div className="mb-6 flex items-start justify-between sm:mb-8">
										<span className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none text-paper/10">
											{s.number}
										</span>
										<div
											className={`flex h-10 w-10 shrink-0 items-center justify-center border sm:h-12 sm:w-12 ${a.bgSoft} ${a.borderSoft}`}
										>
											<Icon size={20} className={a.text} />
										</div>
									</div>
									<div
										className={`mb-2 text-xs tracking-widest uppercase ${a.text}`}
									>
										{s.subtitle}
									</div>
									<h3 className="mb-3 font-display text-[clamp(1.6rem,4vw,2.25rem)] leading-none text-paper sm:mb-4">
										{s.title}
									</h3>
									<p className="mb-6 text-sm leading-relaxed text-paper/60 sm:mb-8">
										{s.description}
									</p>
									<div className="flex flex-wrap gap-1.5 sm:gap-2">
										{s.tags.map((tag) => (
											<span
												key={tag}
												className={`border px-2.5 py-1 font-mono text-xs tracking-wider uppercase sm:px-3 ${a.text} ${a.borderSoft}`}
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						);
					})}
				</RevealGroup>
			</div>
		</section>
	);
}
