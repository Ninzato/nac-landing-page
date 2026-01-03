'use client';

import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

type BriquetteType = {
	name: string;
	description: string;
	image: string;
	sizes: string[];
	specs: string[];
};

type Commodity = {
	name: string;
	description: string;
	points: string[];
	types?: BriquetteType[];
};

const commodityImages = [
	'/images/landing/oud-chips-and-essential-oils-bottles.jpg',
	'/images/landing/indonesian-coffee-beans-with-sack.jpg',
	'/images/landing/coconut-shell-charcoal-for-shisha.jpg',
];

export default function OurCommoditiesPage() {
	const t = useTranslations('ourCommodities');
	const [expandedCard, setExpandedCard] = useState<number | null>(null);

	const toggleExpand = (index: number) => {
		setExpandedCard(expandedCard === index ? null : index);
	};

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

									{/* Expand button for commodities with types */}
									{commodity.types && commodity.types.length > 0 && (
										<button
											onClick={() => toggleExpand(index)}
											className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
										>
											<span>
												{expandedCard === index
													? t('hideTypes')
													: t('viewTypes')}
											</span>
											<ChevronDown
												className={`w-4 h-4 transition-transform duration-300 ${
													expandedCard === index ? 'rotate-180' : ''
												}`}
											/>
										</button>
									)}

									<div className="mt-auto pt-4">
										<a href="mailto:trade@nusantara.example?subject=Commodity%20Inquiry">
											<button className="btn btn-outline btn-secondary">
												{t('inquireButton')}
											</button>
										</a>
									</div>
								</div>

								{/* Expanded Types Section */}
								{commodity.types && commodity.types.length > 0 && (
									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${
											expandedCard === index
												? 'max-h-[2000px] opacity-100'
												: 'max-h-0 opacity-0'
										}`}
									>
										<div className="border-t border-border bg-muted/30 p-4 space-y-4">
											{commodity.types.map(
												(type: BriquetteType, typeIndex: number) => (
													<div
														key={typeIndex}
														className="rounded-lg border border-border bg-card p-4"
													>
														<div className="flex gap-4">
															{/* Placeholder Image */}
															<div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
																<Image
																	src={type.image}
																	alt={type.name}
																	fill
																	className="object-cover"
																	onError={(e) => {
																		const target = e.target as HTMLImageElement;
																		target.src = '/placeholder.svg';
																	}}
																/>
															</div>
															<div className="flex-1 min-w-0">
																<h4 className="font-semibold text-base">
																	{type.name}
																</h4>
																<p className="text-xs text-muted-foreground mt-1">
																	{type.description}
																</p>
															</div>
														</div>

														{/* Sizes */}
														<div className="mt-3">
															<h5 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
																{t('availableSizes')}
															</h5>
															<ul className="text-sm space-y-0.5">
																{type.sizes.map(
																	(size: string, sizeIndex: number) => (
																		<li
																			key={sizeIndex}
																			className="text-foreground"
																		>
																			{size}
																		</li>
																	)
																)}
															</ul>
														</div>

														{/* Specifications */}
														<div className="mt-3">
															<h5 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
																{t('specifications')}
															</h5>
															<div className="flex flex-wrap gap-1.5">
																{type.specs.map(
																	(spec: string, specIndex: number) => (
																		<span
																			key={specIndex}
																			className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
																		>
																			{spec}
																		</span>
																	)
																)}
															</div>
														</div>
													</div>
												)
											)}
										</div>
									</div>
								)}
							</article>
						))}
					</div>
				</div>
			</section>

			<MainFooter />
		</>
	);
}
