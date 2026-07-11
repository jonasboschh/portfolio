import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { caseStudies } from "@/data/content";

export function Testimonials() {
	const [active, setActive] = useState(0);
	const current = caseStudies[active];

	return (
		<section className="border-t border-paper/8 bg-ink-soft px-4 py-16 sm:px-8 sm:py-24 md:px-12">
			<div className="mx-auto max-w-350">
				<div className="grid items-start gap-10 md:grid-cols-[1fr_2fr] md:items-center md:gap-16">
					<Reveal>
						<SectionEyebrow className="mb-3 sm:mb-4">
							Klanten aan het Woord
						</SectionEyebrow>
						<h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight text-paper">
							WAT ZE
							<br />
							<span className="text-lime">ZEGGEN</span>
						</h2>
						<div className="mt-6 flex gap-2 sm:mt-10 sm:gap-3">
							{caseStudies.map((cs, i) => (
								<button
									key={cs.slug}
									type="button"
									onClick={() => setActive(i)}
									aria-label={`Testimonial ${i + 1}: ${cs.title}`}
									className={`h-1 transition-all duration-300 ${
										i === active ? "w-12 bg-lime" : "w-4 bg-paper/12"
									}`}
								/>
							))}
						</div>
					</Reveal>

					<div className="relative min-h-55">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.slug}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
								className="flex flex-col justify-between"
							>
								<div
									aria-hidden
									className="font-display text-[5rem] leading-[0.7] text-lime/10"
								>
									"
								</div>
								<p className="text-base leading-relaxed font-light text-paper sm:text-xl md:text-2xl">
									"{current.homeQuote}"
								</p>
								<div className="mt-6 flex items-center gap-4 sm:mt-8">
									<div className="h-px w-8 bg-lime" />
									<div>
										<div className="text-sm font-bold text-paper">
											{current.testimonial.name}
										</div>
										<div className="mt-1 text-xs tracking-widest text-paper/40 uppercase">
											{current.testimonial.role}
										</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
