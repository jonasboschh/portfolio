const items = [
	"WEB DESIGN",
	"WEBSHOPS",
	"SEO OPTIMALISATIE",
	"SOFTWARE OP MAAT",
];

export function Marquee() {
	return (
		<div className="w-full overflow-hidden border-y border-ink/10 bg-lime py-3 sm:py-4">
			<div className="flex w-max animate-marquee gap-10 whitespace-nowrap sm:gap-12">
				{(["a", "b"] as const).map((row) => (
					<span
						key={row}
						className="flex items-center gap-10 font-display text-[clamp(0.8rem,2.5vw,1.1rem)] tracking-wide text-ink sm:gap-12"
						aria-hidden={row === "b"}
					>
						{items.map((item) => (
							<span key={item} className="flex items-center gap-10 sm:gap-12">
								<span>{item}</span>
								<span className="text-coral">✦</span>
							</span>
						))}
					</span>
				))}
			</div>
		</div>
	);
}
