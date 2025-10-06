'use client';

import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ProcessStep {
	title: string;
	description: string;
}

export default function OurServicesPage() {
	const t = useTranslations('ourServices');

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
								{t('hero.title')}{' '}
								<span className="text-secondary">{t('hero.titleHighlight')}</span>
							</h1>
							<p className="text-base-content/80 mt-8 sm:text-lg text-justify">
								{t('hero.description')}
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
					<h2 className="text-3xl font-semibold sm:text-5xl">{t('process.title')}</h2>
					<div className="mt-4 grid gap-6 md:grid-cols-2">
						{t.raw('process.steps').map((step: ProcessStep, index: number) => (
							<div
								key={index}
								className="rounded-lg border border-border p-5 bg-card"
							>
								<h3 className="font-medium text-lg">{step.title}</h3>
								<p className="mt-1 text-base-content">{step.description}</p>
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
								{t('quality.title')}
							</h2>
							<ul className="mt-3 grid gap-2 text-base-content text-xl">
								{t.raw('quality.points').map((point: string, index: number) => (
									<li key={index}>• {point}</li>
								))}
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
							{t('logistics.title')}
						</h2>
						<div className="mt-3 grid gap-2 text-lg text-muted-foreground">
							{t.raw('logistics.description').map((paragraph: string, index: number) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
						<div className="mt-5">
							<a href="mailto:trade@nusantara.example?subject=Export%20Service%20Quote">
								<button className="btn btn-outline btn-secondary btn-wide btn-lg">
									{t('logistics.requestQuoteButton')}
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
