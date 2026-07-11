import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const base: Variants = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
	},
};

export function Reveal({
	children,
	delay = 0,
	className,
	as = "div",
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	as?: "div" | "span";
}) {
	const reduce = useReducedMotion();
	const Comp = motion[as];
	return (
		<Comp
			className={className}
			initial={reduce ? undefined : "hidden"}
			whileInView={reduce ? undefined : "show"}
			viewport={{ once: true, margin: "-80px" }}
			variants={base}
			transition={{ delay }}
		>
			{children}
		</Comp>
	);
}

export function RevealGroup({
	children,
	className,
	stagger = 0.08,
}: {
	children: ReactNode;
	className?: string;
	stagger?: number;
}) {
	const reduce = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={reduce ? undefined : "hidden"}
			whileInView={reduce ? undefined : "show"}
			viewport={{ once: true, margin: "-80px" }}
			variants={{
				hidden: {},
				show: { transition: { staggerChildren: stagger } },
			}}
		>
			{children}
		</motion.div>
	);
}

export const revealItem: Variants = base;
