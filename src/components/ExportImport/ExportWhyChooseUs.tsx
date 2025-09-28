'use client';

import React from 'react';
import {useTranslations} from 'next-intl';

interface Feature {
	title: string;
	description: string;
}

const ExportWhyChooseUs = () => {
	const t = useTranslations('exportWhyChooseUs');
	return (
		<section
			className="py-8 lg:py-20"
			id="why-choose-us"
		>
			<div className='container'>
				<h2 className="text-3xl font-semibold sm:text-5xl text-center">
					{t('title')}
				</h2>
				<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
					{t('subtitle')}
				</p>
				<div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
					{t.raw('features').map((feature: Feature, index: number) => (
						<div
							key={index}
							className="rounded-lg border border-border p-5 bg-card"
						>
							<h3 className="font-medium text-lg">{feature.title}</h3>
							<p className="mt-1 text-muted-foreground">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExportWhyChooseUs;
