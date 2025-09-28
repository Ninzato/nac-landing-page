'use client';

import { PerfumeCatalogDataId, PerfumeCatalogDataEng } from '@/data/perfume/Catalog';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { Suspense } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const CatalogWrapper = () => {
	const t = useTranslations('perfume.catalog');
	const locale = useLocale();

	// Debug logging
	console.log('🌍 CatalogWrapper - Current locale:', locale);
	console.log('🌍 CatalogWrapper - Locale type:', typeof locale);

	// Select the appropriate data array based on current locale with explicit checking
	const isEnglish = locale === 'en' || locale?.toString() === 'en';
	const perfumeData = isEnglish ? PerfumeCatalogDataEng : PerfumeCatalogDataId;

	// Debug logging for data selection
	console.log('🔍 CatalogWrapper - isEnglish:', isEnglish);
	console.log('📦 CatalogWrapper - Selected data array:', isEnglish ? 'PerfumeCatalogDataEng' : 'PerfumeCatalogDataId');
	console.log('📦 CatalogWrapper - First item title:', perfumeData[0]?.title);
	console.log('📦 CatalogWrapper - First item description preview:', perfumeData[0]?.description?.substring(0, 50) + '...');

	return (
		<>
			<section
				className="py-8 lg:py-20"
				id="catalog"
			>
				<div className="container">
					{/* Header Section */}
					<div className="text-center mb-16 flex flex-col gap-6">
						<p className="text-sm tracking-wider font-montserrat text-primary">
							{t('badge')}
						</p>
						<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none text-center text-accent">{t('title')}</h1>
						<p className="text-xl text-accent-75 max-w-2xl mx-auto leading-relaxed">
							{t('description')}
						</p>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
