'use client';

import {
	PerfumeCatalogDataEng,
	PerfumeCatalogDataId,
} from '@/data/perfume/Catalog';
import { useLocale, useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';

const CatalogWrapper = () => {
	const t = useTranslations('perfume.catalog');
	const locale = useLocale();

	// Debug logging
	console.debug('🌍 CatalogWrapper - Current locale:', locale);
	console.debug('🌍 CatalogWrapper - Locale type:', typeof locale);

	// Select the appropriate data array based on current locale with explicit checking
	const isEnglish = locale === 'en' || locale?.toString() === 'en';
	const perfumeData = isEnglish ? PerfumeCatalogDataEng : PerfumeCatalogDataId;

	// Debug logging for data selection
	console.debug('🔍 CatalogWrapper - isEnglish:', isEnglish);
	console.debug(
		'📦 CatalogWrapper - Selected data array:',
		isEnglish ? 'PerfumeCatalogDataEng' : 'PerfumeCatalogDataId'
	);
	console.debug('📦 CatalogWrapper - First item title:', perfumeData[0]?.title);
	console.debug(
		'📦 CatalogWrapper - First item description preview:',
		perfumeData[0]?.description?.substring(0, 50) + '...'
	);

	return (
		<>
			<section
				className="py-12 lg:py-24"
				id="catalog"
			>
				<div className="container">
					{/* Header Section */}
					<div className="text-center mb-16 lg:mb-20 flex flex-col gap-5 lg:gap-7">
						{/* Badge with refined styling */}
						<p className="text-xs md:text-sm tracking-[0.2em] font-light uppercase text-accent/70">
							{t('badge')}
						</p>

						{/* Title with luxury typography */}
						<h1
							className="
							text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
							font-medium 
							tracking-[0.06em] 
							leading-[1.15]
							text-accent
							drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]
						"
						>
							{t('title')}
						</h1>

						{/* Description with elegant typography */}
						<p
							className="
							text-base md:text-lg xl:text-xl 
							text-foreground/80 
							max-w-2xl mx-auto 
							leading-relaxed md:leading-loose
							font-light
							tracking-wide
						"
						>
							{t('description')}
						</p>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
						{perfumeData.map((perfume, index) => (
							<PerfumeCard
								key={index}
								perfume={perfume}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Modal - Wrapped in Suspense for search params */}
			<Suspense fallback={null}>
				<PerfumeModal />
			</Suspense>
		</>
	);
};

export default CatalogWrapper;
