import { useTranslations } from 'next-intl';
import { BrandSection } from './BrandSection';

export const OurBrands = () => {
	const t = useTranslations('ourBrands');

	return (
		<section
			className="relative py-8 lg:py-20"
			id="brands"
		>
			<div className="absolute start-[10%]">
				<div className="from-primary/10 to-secondary/10 pointer-events-none aspect-square w-60 rounded-full bg-gradient-to-r blur-3xl lg:w-[600px]"></div>
			</div>

			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">{t('title')}</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						{t('subtitle')}
					</p>
				</div>

				<div className="mt-8 space-y-8 lg:mt-20 xl:space-y-20">
					<BrandSection
						imageSrc="/images/landing/perfume-brand.webp"
						imageAlt={t('perfume.title')}
						badgeText={t('perfume.badgeText')}
						badgeColor="primary"
						title={t('perfume.title')}
						description={t('perfume.description')}
						features={[
							t('perfume.features.0'),
							t('perfume.features.1'),
							t('perfume.features.2'),
							t('perfume.features.3')
						]}
						buttonText={t('perfume.buttonText')}
						buttonHref="/perfume"
						buttonColor="primary"
						buttonIcon="lucide--arrow-right"
					/>

					<BrandSection
						imageSrc="/images/landing/cargo.jpg"
						imageAlt={t('export.title')}
						badgeText={t('export.badgeText')}
						badgeColor="secondary"
						title={t('export.title')}
						description={t('export.description')}
						features={[
							t('export.features.0'),
							t('export.features.1'),
							t('export.features.2'),
							t('export.features.3')
						]}
						buttonText={t('export.buttonText')}
						buttonHref="/export-import"
						buttonColor="secondary"
						buttonIcon="lucide--globe"
						reverseOrder={true}
					/>
				</div>

				
			</div>
		</section>
	);
};
