export function Logo({ className = "" }: { className?: string }) {
	return (
		<span
			className={`font-display text-[1.35rem] tracking-wide text-lime ${className}`}
		>
			PIXEL<span className="text-paper">FORGE</span>
		</span>
	);
}
