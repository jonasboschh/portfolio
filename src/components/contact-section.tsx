import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { site } from "@/data/content";

const fields = [
	{ id: "name", label: "Naam", type: "text", placeholder: "Jan de Vries" },
	{ id: "email", label: "Email", type: "email", placeholder: "jan@bedrijf.be" },
] as const;

const contactRows = [
	{ label: "Email", value: site.email },
	{ label: "Telefoon", value: site.phone },
	{ label: "Locatie", value: site.location },
];

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitted(true);
		window.setTimeout(() => setSubmitted(false), 3000);
		setFormData({ name: "", email: "", message: "" });
	}

	return (
		<section
			id="contact"
			className="border-t border-paper/8 px-4 py-16 sm:px-8 sm:py-24 md:px-12"
		>
			<div className="mx-auto grid max-w-350 gap-10 md:grid-cols-2 md:gap-16">
				<Reveal>
					<SectionEyebrow className="mb-3 sm:mb-4">Contact</SectionEyebrow>
					<h2 className="mb-4 font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-paper sm:mb-6">
						LATEN WE
						<br />
						<span className="text-lime">PRATEN</span>
					</h2>
					<p className="mb-8 text-sm leading-relaxed text-paper/60 sm:mb-10">
						Vertel ons over uw project. Binnen 24 uur ontvangt u een persoonlijk
						antwoord — geen geautomatiseerde reacties, geen salespitch. Gewoon
						een eerlijk gesprek.
					</p>
					<div className="space-y-3 sm:space-y-4">
						{contactRows.map((item) => (
							<div key={item.label} className="flex items-center gap-4">
								<span className="w-18 shrink-0 font-mono text-xs tracking-widest text-paper/40 uppercase">
									{item.label}
								</span>
								<span className="text-sm text-paper">{item.value}</span>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal delay={0.15}>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 sm:gap-4"
					>
						<div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4">
							{fields.map((f) => (
								<div key={f.id} className="flex flex-col gap-1.5 sm:gap-2">
									<label
										htmlFor={f.id}
										className="font-mono text-xs tracking-widest text-paper/40 uppercase"
									>
										{f.label}
									</label>
									<input
										id={f.id}
										type={f.type}
										required
										value={formData[f.id]}
										onChange={(e) =>
											setFormData((d) => ({ ...d, [f.id]: e.target.value }))
										}
										placeholder={f.placeholder}
										className="border border-paper/12 bg-card px-3 py-2.5 text-sm text-paper outline-none transition-colors duration-200 focus:border-lime sm:px-4 sm:py-3"
									/>
								</div>
							))}
						</div>
						<div className="flex flex-col gap-1.5 sm:gap-2">
							<label
								htmlFor="message"
								className="font-mono text-xs tracking-widest text-paper/40 uppercase"
							>
								Bericht
							</label>
							<textarea
								id="message"
								required
								rows={5}
								value={formData.message}
								onChange={(e) =>
									setFormData((d) => ({ ...d, message: e.target.value }))
								}
								placeholder="Vertel ons over uw project, uw doelen en uw budget..."
								className="resize-none border border-paper/12 bg-card px-3 py-2.5 text-sm text-paper outline-none transition-colors duration-200 focus:border-lime sm:px-4 sm:py-3"
							/>
						</div>
						<motion.button
							type="submit"
							whileTap={{ scale: 0.98 }}
							animate={{ backgroundColor: submitted ? "#FF3D1F" : "#D6FF00" }}
							transition={{ duration: 0.25 }}
							className="flex items-center justify-center gap-3 py-3.5 text-sm font-bold tracking-widest text-ink uppercase sm:py-4"
						>
							{submitted ? (
								"Verzonden! We nemen snel contact op."
							) : (
								<>
									<span>Verstuur Bericht</span>
									<Send size={13} />
								</>
							)}
						</motion.button>
					</form>
				</Reveal>
			</div>
		</section>
	);
}
