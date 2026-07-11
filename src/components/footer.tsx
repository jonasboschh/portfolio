import { Logo } from "@/components/logo";

const footerLinks = [
	{ label: "Diensten", href: "/#diensten" },
	{ label: "Werk", href: "/#werk" },
	{ label: "Contact", href: "/#contact" },
];

export function Footer() {
	return (
		<footer className="border-t border-paper/8 px-4 py-8 sm:px-8 sm:py-10 md:px-12">
			<div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
				<Logo />
				<div className="flex flex-wrap justify-center gap-5 text-xs tracking-widest text-paper/40 uppercase sm:gap-8">
					{footerLinks.map((l) => (
						<a
							key={l.label}
							href={l.href}
							className="transition-colors duration-200 hover:text-paper"
						>
							{l.label}
						</a>
					))}
				</div>
				<span className="font-mono text-xs text-paper/25">
					© {new Date().getFullYear()} PixelForge Studio
				</span>
			</div>
		</footer>
	);
}
