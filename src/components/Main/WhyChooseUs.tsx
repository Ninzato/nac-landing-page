import React from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import FeatureCard, { FeatureCardProps } from './FeatureCard';

const WhyChooseUs = () => {
	const t = useTranslations('whyChooseUs');

	const FeatureCardContents: FeatureCardProps[] = [
		{
			iconBg: 'bg-primary/15',
			iconVariant: 'lucide--sparkles',
			iconSize: 'size-8',
			titleColor: 'text-primary',
			titleContent: t('heritage.title'),
			textContent: t('heritage.description'),
		},
		{
			iconBg: 'bg-secondary/15',
			iconVariant: 'lucide--package-check',
			iconSize: 'size-8',
			titleColor: 'text-secondary',
			titleContent: t('quality.title'),
			textContent: t('quality.description'),
		},
		{
			iconBg: 'bg-accent/15',
			iconVariant: 'lucide--award',
			iconSize: 'size-8',
			titleColor: 'text-accent',
			titleContent: t('network.title'),
			textContent: t('network.description'),
		},
		{
			iconBg: 'bg-neutral/15',
			iconVariant: 'lucide--brush',
			iconSize: 'size-8',
			titleColor: 'text-neutral',
			titleContent: t('custom.title'),
			textContent: t('custom.description'),
		},
	];

	return (
		<section
			className="py-8 lg:py-20"
			id="why-choose-us"
		>
			<div className="container flex flex-col gap-8">
				<div className="text-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">
						{t('title')}
					</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						{t('subtitle')}
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
					{FeatureCardContents.map((content, index) => (
						<FeatureCard
							key={index}
							iconBg={content.iconBg}
							iconVariant={content.iconVariant}
							iconSize={content.iconSize}
							titleColor={content.titleColor}
							titleContent={content.titleContent}
							textContent={content.textContent}
						/>
					))}
				</div>
				<div className="mt-16 text-center">
					<h3 className="text-2xl font-medium">{t('ctaTitle')}</h3>
					<p className="text-base-content/80 mt-2">
						{t('ctaDescription')}
					</p>
					<div className="mt-6">
						<Link href="/contact">
							<button className="btn btn-outline btn-wide btn-lg rounded-xl">
								<span className="iconify lucide--handshake size-5"></span>
								{t('ctaButton')}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
