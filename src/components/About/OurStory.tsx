import Image from 'next/image';
import {useTranslations} from 'next-intl';

export const OurStory = () => {
	const t = useTranslations('ourStory');

	return (
		<section className="py-8 lg:py-20">
			<div className="container">
				{/* Main Our Story Section */}
				<div className="grid lg:grid-cols-2 gap-16 items-start">
				{/* Left Content Column */}
				<div className="space-y-6">
					<h1 className="text-3xl font-semibold sm:text-5xl mb-8">{t('title')}</h1>

					<p className="text-base-content leading-relaxed">
						{t('paragraph1')}
					</p>

					<p className="text-base-content leading-relaxed">
						{t('paragraph2')}
					</p>

					<p className="text-base-content leading-relaxed">
						{t('paragraph3')}
					</p>
				</div>

				<div className="relative aspect-square rounded-xl overflow-hidden">
					<Image
						src="/images/landing/building.jpg"
						alt="Nusantara Aroma Craft Headquarter"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
		</section>
	);
};
