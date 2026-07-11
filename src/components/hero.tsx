import { ArrowRight, ChevronDown } from "lucide-react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function Hero() {
	const ref = useRef<HTMLElement>(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const ghostY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
	const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

	return (
		<section
			ref={ref}
			id="home"
			className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-grid px-5 pt-24 pb-16 sm:px-8 sm:pt-32 md:px-12 md:pt-40 lg:px-24"
		>
			<motion.div
				style={{ y: ghostY }}
				aria-hidden
				className="pointer-events-none absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden font-display leading-[0.85] whitespace-nowrap text-transparent select-none"
			>
				<span
					className="[-webkit-text-stroke:1px_rgba(242,239,232,0.05)]"
					style={{ fontSize: "clamp(5rem, 25vw, 22rem)" }}
				>
					DIGITAL
				</span>
			</motion.div>

			<motion.div style={{ y: contentY }} className="relative z-10 max-w-275">
				<motion.div
					initial={reduce ? undefined : { opacity: 0, y: 14 }}
					animate={reduce ? undefined : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
					className="mb-5 sm:mb-7"
				>
					<SectionEyebrow>Bureau voor Digitale Dominantie</SectionEyebrow>
				</motion.div>

				<motion.h1
					initial={reduce ? undefined : { opacity: 0, y: 20 }}
					animate={reduce ? undefined : { opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="mb-6 font-display text-[clamp(2.8rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-paper sm:mb-8"
				>
					WIJ BOUWEN
					<br />
					<span className="text-lime">WEBSITES</span>
					<br />
					DIE{" "}
					<span className="text-transparent [-webkit-text-stroke:2px_var(--color-coral)]">
						WERKEN.
					</span>
				</motion.h1>

				<motion.p
					initial={reduce ? undefined : { opacity: 0, y: 16 }}
					animate={reduce ? undefined : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
					className="mb-8 max-w-lg text-base leading-relaxed text-paper/60 sm:mb-12 sm:text-lg"
				>
					Web design, webshops, SEO-optimalisatie en maatwerksoftware — alles
					wat uw bedrijf nodig heeft om online te winnen.
				</motion.p>

				<motion.div
					initial={reduce ? undefined : { opacity: 0, y: 16 }}
					animate={reduce ? undefined : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-col gap-3 sm:flex-row sm:gap-4"
				>
					<a
						href="#contact"
						className="group inline-flex items-center justify-center gap-3 bg-lime px-6 py-3.5 text-sm font-bold tracking-widest text-ink uppercase transition-colors sm:px-8 sm:py-4"
					>
						Gratis Adviesgesprek
						<ArrowRight
							size={15}
							className="transition-transform duration-200 group-hover:translate-x-1"
						/>
					</a>
					<a
						href="#werk"
						className="inline-flex items-center justify-center gap-3 border border-paper/20 px-6 py-3.5 text-sm font-bold tracking-widest text-paper uppercase transition-colors hover:border-paper sm:px-8 sm:py-4"
					>
						Bekijk Ons Werk
					</a>
				</motion.div>
			</motion.div>

			<motion.div
				initial={reduce ? undefined : { opacity: 0 }}
				animate={reduce ? undefined : { opacity: 1, y: [0, 6, 0] }}
				transition={{
					opacity: { delay: 0.8, duration: 0.6 },
					y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
				}}
				className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
			>
				<span className="text-xs tracking-widest text-paper/18 uppercase">
					Scroll
				</span>
				<ChevronDown size={15} className="text-paper/18" />
			</motion.div>

			<div
				className="absolute top-1/2 right-4 hidden -translate-y-1/2 xl:flex sm:right-6"
				style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
			>
				<span className="text-xs tracking-[0.25em] text-paper/18 uppercase">
					PixelForge Studio © {new Date().getFullYear()}
				</span>
			</div>
		</section>
	);
}
