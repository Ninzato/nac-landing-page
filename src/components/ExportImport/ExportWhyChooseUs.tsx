import React from 'react';

const ExportWhyChooseUs = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="why-choose-us"
		>
			<div className='container'>
				<h2 className="text-3xl font-semibold sm:text-5xl text-center">
					Why Choose Us
				</h2>
				<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
					A professional export workflow built on quality, documentation, and
					reliable logistics.
				</p>
				<div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
					{[
						{
							title: 'Verified Sourcing',
							desc: 'Trusted producers across Indonesia with transparent specs.',
						},
						{
							title: 'Rigorous QC',
							desc: 'Multi‑stage checks with optional third‑party inspection (SGS).',
						},
						{
							title: 'Full Compliance',
							desc: 'CoA, MSDS, phytosanitary, export permits, and HS coding.',
						},
						{
							title: 'On‑Time Logistics',
							desc: 'Clear milestones, insurance options, and shipment tracking.',
						},
					].map((f) => (
						<div
							key={f.title}
							className="rounded-lg border border-border p-5 bg-card"
						>
							<h3 className="font-medium text-lg">{f.title}</h3>
							<p className="mt-1 text-muted-foreground">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExportWhyChooseUs;
