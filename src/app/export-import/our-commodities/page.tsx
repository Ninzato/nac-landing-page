import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import Image from 'next/image';

type Commodity = {
	name: string;
	blurb: string;
	points: string[];
	imgSrc: string;
};

const commodities: Commodity[] = [
	{
		name: 'Agarwood (Oud) & Essential Oils',
		blurb:
			'Rare Indonesian oud chips, oud oils, and essential oils with distinctive olfactory profiles curated for perfumery.',
		points: [
			'Selected grades & batches',
			'GC‑MS & organoleptic checks',
			'Custom dilutions & packaging',
		],
		imgSrc: '/images/landing/oud-chips-and-essential-oils-bottles.jpg',
	},
	{
		name: 'Premium Coffee Beans',
		blurb:
			'Arabica and Robusta from Sumatra, Java, and Sulawesi—traceable lots with cupping notes and moisture control.',
		points: [
			'Specialty‑grade options',
			'Screen size & defect control',
			'Valve bag export packaging',
		],
		imgSrc: '/images/landing/indonesian-coffee-beans-with-sack.jpg',
	},
	{
		name: 'Charcoal (Shisha & BBQ)',
		blurb:
			'Coconut shell and hardwood charcoal with high fixed carbon, low ash, and consistent size for shisha and BBQ.',
		points: [
			'Low ash, long‑burning',
			'Cube/finger sizes available',
			'SGS inspection on request',
		],
		imgSrc: '/images/landing/coconut-shell-charcoal-for-shisha.jpg',
	},
];

export default function OurCommoditiesPage() {
	return (
		<>
			<ExportTopbar />
			<section
				className="py-8 lg:py-20 space-y-16"
				id="our-commodities-home"
			>
				<div className="container">
					<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
						Our Commodities
					</h1>
					<p className="text-base-content/80 mt-6 sm:text-lg">
						A focused portfolio built for reliability and performance across
						perfumery, coffee, and charcoal applications.
					</p>
				</div>
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{commodities.map((c) => (
							<article
								key={c.name}
								className="rounded-lg border border-border bg-card overflow-hidden"
							>
								<div className="relative aspect-[4/3]">
									<Image
										src={c.imgSrc || '/placeholder.svg'}
										alt={c.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-semibold">{c.name}</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{c.blurb}
									</p>
									<ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
										{c.points.map((p) => (
											<li key={p}>• {p}</li>
										))}
									</ul>
									<div className="mt-4">
										<a href="mailto:trade@nusantara.example?subject=Commodity%20Inquiry">
											<button className="btn btn-outline btn-secondary">
												Inquire Availability
											</button>
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<MainFooter />
		</>
	);
}
