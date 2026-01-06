'use client';

import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type Commodity = {
	name: string;
	description: string;
	points: string[];
	types?: unknown[];
};

const commodityImages = [
	'/images/landing/oud-chips-and-essential-oils-bottles.jpg',
	'/images/landing/indonesian-coffee-beans-with-sack.jpg',
	'/commodities/briquettes/shisha/shisha-product-4.webp',
];

export default function OurCommoditiesPage() {
	const t = useTranslations('ourCommodities');

	return (
		<>
			<ExportTopbar />
			<section
				className="py-8 lg:py-20 space-y-16"
				id="our-commodities-home"
			>
				<div className="container">
					<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
						{t('title')}
					</h1>
					<p className="text-base-content/80 mt-6 sm:text-lg">
						{t('subtitle')}
					</p>
				</div>
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{t.raw('commodities').map((commodity: Commodity, index: number) => (
							<article
								key={commodity.name}
								className="rounded-lg border border-border bg-card overflow-hidden flex flex-col"
							>
								<div className="relative aspect-[4/3]">
									<Image
										src={commodityImages[index] || '/placeholder.svg'}
										alt={commodity.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="text-lg font-semibold">{commodity.name}</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{commodity.description}
									</p>
									<ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
										{commodity.points.map(
											(point: string, pointIndex: number) => (
												<li key={pointIndex}>• {point}</li>
											)
										)}
									</ul>

									<div className="mt-auto pt-4 flex flex-wrap gap-2">
									{/* View Details button for commodities with types (briquettes) */}
									{commodity.types && commodity.types.length > 0 && (
										<Link
											href="/export-import/our-commodities/briquettes"
											className="btn btn-outline btn-secondary"
										>
											{t('viewTypes')}
										</Link>
									)}
									<a href="mailto:trade@nusantara.example?subject=Commodity%20Inquiry">
										<button className="btn btn-secondary">
											{t('inquireButton')}
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
