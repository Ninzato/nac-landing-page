import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import Image from 'next/image';

export default function OurServicesPage() {
	const steps = [
		{
			title: 'Sourcing & Curation',
			desc: 'Direct procurement from vetted producers—agarwood/oud, essential oils, specialty coffee, and premium charcoal—mapped by origin and seasonality to ensure authenticity and consistency.',
		},
		{
			title: 'Quality Control',
			desc: 'Commodity‑specific checks: GC‑MS & organoleptic for oils; moisture/ash/fixed carbon for charcoal; screen size, defects, and moisture for coffee. Optional third‑party inspections (SGS).',
		},
		{
			title: 'Documentation & Compliance',
			desc: 'We prepare CoA/MSDS, phytosanitary certificates, export permits, packing lists, invoices, BL/AWB, and HS coding. We align with your destination’s regulatory requirements.',
		},
		{
			title: 'Packaging & Logistics',
			desc: 'Drums and glass (oils), valve bags (coffee), cartons/master cartons (charcoal). We arrange sea/air freight, insurance options, and provide milestone updates until delivery.',
		},
	];

	return (
		<>
			<ExportTopbar />
			{/* Intro + cargo image */}
			<section
				className="py-8 lg:py-20"
				id="our-services-home"
			>
				<div className="container">
					<div className="grid gap-6 md:grid-cols-2 md:items-center">
						<div>
							<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
								Professional{' '}
								<span className="text-secondary">Export Services</span>
							</h1>
							<p className="text-base-content/80 mt-8 sm:text-lg">
								We operate transparently with strict quality assurance, complete
								documentation, and reliable logistics. Expect clear Incoterms,
								agreed timelines, and proactive communication from inquiry to
								delivery.
							</p>
						</div>
						<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
							<Image
								src="/images/landing/cargo-ship-containers-aerial-logistics.jpg"
								alt="International cargo logistics"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Process steps */}
			<section
				className="py-8 lg:py-20"
				id="our-services-step"
			>
				<div className="container">
					<h2 className="text-3xl font-semibold sm:text-5xl">Our Process</h2>
					<div className="mt-4 grid gap-6 md:grid-cols-2">
						{steps.map((s) => (
							<div
								key={s.title}
								className="rounded-lg border border-border p-5 bg-card"
							>
								<h3 className="font-medium text-lg">{s.title}</h3>
								<p className="mt-1 text-base-content">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trust sections */}
			<section
				className="py-8 lg:py-20"
				id="our-services-trust"
			>
				<div className="container">
					<div className="grid gap-6 md:grid-cols-2 md:items-center">
						<div className="md:order-2">
							<h2 className="text-3xl font-semibold sm:text-5xl">
								Quality & Assurance
							</h2>
							<ul className="mt-3 grid gap-2 text-base-content text-xl">
								<li>• Batch traceability and retained samples</li>
								<li>• Certificates: CoA, MSDS, phytosanitary as applicable</li>
								<li>
									• Optional SGS/third‑party inspection and pre‑shipment checks
								</li>
								<li>• Clear specs and tolerance ranges agreed upfront</li>
							</ul>
						</div>
						<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
							<Image
								src="/images/landing/warehouse-inspection-quality-control.jpg"
								alt="Warehouse inspection and quality control"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<section
				className="py-8 lg:py-20"
				id="our-services-assurance"
			>
				<div className="container">
					<div className="rounded-lg border border-border p-6 bg-card">
						<h2 className="text-3xl font-semibold sm:text-5xl">
							Logistics, Incoterms & Payments
						</h2>
						<div className="mt-3 grid gap-2 text-lg text-muted-foreground">
							<p>
								We support EXW, FOB, CFR, and CIF depending on your route and
								risk preference. Freight is arranged with reputable carriers and
								we provide tracking and milestone updates.
							</p>
							<p>
								Payment terms are aligned to commodity and jurisdiction,
								typically T/T with agreed deposits and balance before or against
								documents. LC may be available for qualified partners.
							</p>
						</div>
						<div className="mt-5">
							<a href="mailto:trade@nusantara.example?subject=Export%20Service%20Quote">
								<button className="btn btn-outline btn-secondary btn-wide btn-lg">
									Request a Quote
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
			<MainFooter />
		</>
	);
}
