import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
	return (
		<section className="relative overflow-hidden bg-lime px-4 py-16 sm:px-8 sm:py-24 md:px-12">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden font-display text-[clamp(4rem,18vw,18rem)] leading-none whitespace-nowrap text-ink/6 select-none"
			>
				LATEN WE BOUWEN
			</div>
			<Reveal className="relative z-10 mx-auto flex max-w-350 flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
				<h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.9] tracking-tight text-ink">
					KLAAR OM TE
					<br />
					BOUWEN?
				</h2>
				<a
					href="#contact"
					className="group inline-flex shrink-0 items-center gap-3 bg-ink px-8 py-4 text-sm font-bold tracking-widest text-lime uppercase sm:px-10 sm:py-5"
				>
					Start Nu
					<ArrowRight
						size={15}
						className="transition-transform duration-200 group-hover:translate-x-1"
					/>
				</a>
			</Reveal>
		</section>
	);
}
