import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface PerfumeFeatureSectionData {
	iconClass: string;
	tagline: string;
	title: string;
	description: string;
	isReversed: boolean;
	imagePath: string;
}

const PerfumeFeatureSection = () => {
	const t = useTranslations('perfume.features');

	const data: PerfumeFeatureSectionData[] = [
		{
			iconClass: 'ph--sun-light',
			tagline: t('0.tagline'),
			title: t('0.title'),
			description: t('0.description'),
			isReversed: false,
			imagePath: '/images/landing/raras-anisa-feature-1.png',
		},
		{
			iconClass: 'ph--rainbow-light',
			tagline: t('1.tagline'),
			title: t('1.title'),
			description: t('1.description'),
			isReversed: true,
			imagePath: '/images/landing/raras-anisa-feature-2.png',
		},
		{
			iconClass: 'ph--sparkle-light',
			tagline: t('2.tagline'),
			title: t('2.title'),
			description: t('2.description'),
			isReversed: false,
			imagePath: '/images/landing/raras-anisa-feature-3.png',
		},
	];

	return (
		<>
			{data.map((item, index) => (
				<div
					key={index}
					className="grid lg:grid-cols-2 items-center gap-6 xl:gap-8 py-10 lg:py-20"
				>
					<div className="flex flex-col gap-4 xl:gap-6">
						<div className="flex gap-2 xl:gap-4 items-center">
							<span
								className={`iconify ${item.iconClass} size-4 xl:size-6 text-accent/80`}
							></span>
							<h3 className="text-accent/80 text-lg">{item.tagline}</h3>
						</div>
						<h2 className="text-2xl xl:text-4xl tracking-wide">{item.title}</h2>
						<p className="text-xl leading-8">{item.description}</p>
					</div>
					<div
						className={`overflow-hidden aspect-square relative ${item.isReversed ? 'order-last lg:order-first' : ''}`}
					>
						<Image
							src={item.imagePath}
							alt="Rahas Anisa perfume on multiple platform"
							className="object-cover"
							fill
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default PerfumeFeatureSection;
