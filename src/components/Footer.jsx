const year = new Date().getFullYear();

const quickLinks = [
	{ href: "#services", label: "Our Services" },
	{ href: "#about", label: "About Us" },
	{ href: "#why-us", label: "Why Choose Us" },
	{ href: "#contact", label: "Get a Free Quote" },
];

export default function Footer() {
	return (
		<footer
			className="py-16 px-4 md:px-8 border-t"
			style={{
				background: "var(--color-deepest)",
				borderColor: "rgba(255, 215, 0, 0.1)",
			}}
		>
			<div className="max-w-container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
					<div>
						<div
							className="text-xl font-bold font-heading mb-1"
							style={{ color: "var(--color-yellow)" }}
						>
							⚡ VOLT ELECTRICS
						</div>
						<div
							className="text-xs font-bold uppercase tracking-widest mb-4"
							style={{ color: "var(--color-muted)" }}
						>
							NSW Licence #EL78234C · ABN 51 234 567 890
						</div>
						<p
							className="text-sm leading-relaxed"
							style={{ color: "var(--color-muted)" }}
						>
							Expert electrical solutions for Parramatta and
							Greater Western Sydney. Quality workmanship, safety
							first, every time.
						</p>
					</div>

					<div>
						<h5 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
							Quick Links
						</h5>
						<nav className="flex flex-col gap-3">
							{quickLinks.map(({ href, label }) => (
								<a
									key={href}
									href={href}
									className="text-sm hover:opacity-80 transition-opacity"
									style={{ color: "var(--color-muted)" }}
								>
									{label}
								</a>
							))}
						</nav>
					</div>

					<div>
						<h5 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
							Contact
						</h5>
						<div className="flex flex-col gap-3">
							<a
								href="tel:0291234567"
								className="text-base font-bold font-heading hover:opacity-80 transition-opacity"
								style={{ color: "var(--color-yellow)" }}
							>
								(02) 9123 4567
							</a>
							<a
								href="mailto:info@voltelectrics.com.au"
								className="text-sm hover:opacity-80 transition-opacity"
								style={{ color: "var(--color-muted)" }}
							>
								info@voltelectrics.com.au
							</a>
							<span
								className="text-sm"
								style={{ color: "var(--color-muted)" }}
							>
								12 Macquarie St, Parramatta NSW 2150
							</span>
							<span
								className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide w-fit"
								style={{
									background: "var(--color-red)",
									color: "white",
								}}
							>
								24/7 Emergency Line Active
							</span>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 footer-divider">
					<p
						className="text-xs"
						style={{ color: "var(--color-muted)" }}
					>
						© {year} Volt Electrics. All Rights Reserved. Licensed
						Electrical Contractor NSW. Licence #EL78234C
					</p>
					<p
						className="text-xs"
						style={{ color: "var(--color-muted)" }}
					>
						Powered by{" "}
						<span style={{ color: "var(--color-yellow)" }}>
							JCHB Developments
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
