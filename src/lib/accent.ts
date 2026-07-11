export type Accent = "lime" | "coral" | "cyan" | "violet";

export const accentClasses: Record<
	Accent,
	{
		text: string;
		bg: string;
		border: string;
		bgSoft: string;
		borderSoft: string;
		ring: string;
		outline: string;
	}
> = {
	lime: {
		text: "text-lime",
		bg: "bg-lime",
		border: "border-lime",
		bgSoft: "bg-lime/10",
		borderSoft: "border-lime/30",
		ring: "ring-lime/40",
		outline: "[-webkit-text-stroke:2px_var(--color-lime)]",
	},
	coral: {
		text: "text-coral",
		bg: "bg-coral",
		border: "border-coral",
		bgSoft: "bg-coral/10",
		borderSoft: "border-coral/30",
		ring: "ring-coral/40",
		outline: "[-webkit-text-stroke:2px_var(--color-coral)]",
	},
	cyan: {
		text: "text-cyan",
		bg: "bg-cyan",
		border: "border-cyan",
		bgSoft: "bg-cyan/10",
		borderSoft: "border-cyan/30",
		ring: "ring-cyan/40",
		outline: "[-webkit-text-stroke:2px_var(--color-cyan)]",
	},
	violet: {
		text: "text-violet",
		bg: "bg-violet",
		border: "border-violet",
		bgSoft: "bg-violet/10",
		borderSoft: "border-violet/30",
		ring: "ring-violet/40",
		outline: "[-webkit-text-stroke:2px_var(--color-violet)]",
	},
};
