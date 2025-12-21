import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
			imagePath: '/images/landing/feature-1.png',
		},
		{
			iconClass: 'ph--rainbow-light',
			tagline: t('1.tagline'),
			title: t('1.title'),
			description: t('1.description'),
			isReversed: true,
			imagePath: '/images/landing/feature-2.png',
		},
		{
			iconClass: 'ph--sparkle-light',
			tagline: t('2.tagline'),
			title: t('2.title'),
			description: t('2.description'),
			isReversed: false,
			imagePath: '/images/landing/feature-3.png',
		},
	];

	return (
		<>
			{data.map((item, index) => (
				<div
					key={index}
					className="grid lg:grid-cols-2 items-center gap-8 xl:gap-12 py-12 lg:py-24"
				>
					<div className="flex flex-col gap-4 xl:gap-">
						{/* Tagline with refined styling */}
						<div className="flex gap-3 xl:gap-4 items-center">
							<span
								className={`iconify ${item.iconClass} size-4 xl:size-5 text-accent/70`}
							></span>
							<h3 className="text-accent/80 text-md md:text-lg font-light uppercase">
								{item.tagline}
							</h3>
						</div>

						{/* Title with luxury typography */}
						<h2
							className="
							text-2xl md:text-3xl xl:text-4xl 
							tracking-[0.06em] 
							leading-[1.2]
							font-medium
							drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]
						"
						>
							{item.title}
						</h2>

						{/* Description with elegant serif feel */}
						<p
							className="
							text-base md:text-lg xl:text-xl 
							leading-relaxed md:leading-loose
							font-light 
							tracking-wide
							text-foreground/85
						"
						>
							{item.description}
						</p>
					</div>
					<div
						className={`overflow-hidden aspect-square relative rounded-4xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${item.isReversed ? 'order-last lg:order-first' : ''}`}
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
