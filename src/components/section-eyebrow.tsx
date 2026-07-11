import type { Accent } from "@/lib/accent";
import { accentClasses } from "@/lib/accent";

export function SectionEyebrow({
	children,
	accent = "lime",
	className = "",
}: {
	children: React.ReactNode;
	accent?: Accent;
	className?: string;
}) {
	const a = accentClasses[accent];
	return (
		<div
			className={`inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase ${a.text} ${className}`}
		>
			<span className={`h-px w-6 sm:w-8 ${a.bg}`} />
			{children}
		</div>
	);
}
