import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "motion/react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/data/content";

export function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (y) => {
		setScrolled(y > 40);
	});

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition-colors duration-300 sm:px-8 sm:py-4 md:px-12 ${
					scrolled
						? "border-b border-paper/8 bg-ink/95 backdrop-blur-md"
						: "border-b border-transparent bg-transparent"
				}`}
			>
				<Link to="/" className="shrink-0">
					<Logo />
				</Link>

				<ul className="hidden items-center gap-6 text-xs tracking-widest uppercase lg:flex xl:gap-8">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="text-paper/40 transition-colors duration-200 hover:text-paper"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-3">
					<a
						href="/#contact"
						className="group hidden items-center gap-2 bg-lime px-4 py-2 text-xs font-bold tracking-widest text-ink uppercase transition-all duration-200 sm:inline-flex sm:px-5 sm:text-sm"
					>
						<span className="hidden md:inline">Start Project</span>
						<span className="md:hidden">Contact</span>
						<ArrowRight
							size={13}
							className="transition-transform duration-200 group-hover:translate-x-1"
						/>
					</a>
					<button
						type="button"
						className="text-paper lg:hidden"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label="Menu"
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</header>

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ink sm:gap-8"
					>
						{navLinks.map((item, i) => (
							<motion.a
								key={item.label}
								href={item.href}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.05 * i, duration: 0.35 }}
								className="text-xl tracking-widest text-paper uppercase transition-colors duration-200 hover:text-lime sm:text-2xl"
								onClick={() => setMenuOpen(false)}
							>
								{item.label}
							</motion.a>
						))}
						{/* biome-ignore lint/a11y/useValidAnchor: real navigation to #contact, styled as a button */}
						<motion.a
							href="/#contact"
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.05 * navLinks.length, duration: 0.35 }}
							className="mt-2 bg-lime px-8 py-3 text-sm font-bold tracking-widest text-ink uppercase"
							onClick={() => setMenuOpen(false)}
						>
							Start Project
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
