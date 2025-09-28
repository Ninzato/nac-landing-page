import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export const MainHero = () => {
	const t = useTranslations('hero');

	return (
		<section
			className="py-8 lg:py-20"
			id="home"
		>
			<div className="container">
				<div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16">
					<div className="max-lg:order-2">
						<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
							{t('title')}
						</h1>
						<p className="text-base-content/80 mt-8 sm:text-lg">
							{t('subtitle')}
						</p>
						<div className="mt-8 inline-flex gap-3 sm:mt-16">
							<Link href="/perfume">
								<button className="btn btn-primary text-primary-content">
									<span className="iconify lucide--sparkles size-4"></span>
									{t('perfumeButton')}
								</button>
							</Link>
							<Link href="/export-import">
								<button className="btn btn-secondary">
									<span className="iconify lucide--globe size-4"></span>
									{t('exportButton')}
								</button>
							</Link>
						</div>
					</div>

					<div className="from-primary/40 to-secondary/40 relative aspect-square rounded-2xl bg-linear-to-r p-3 max-lg:order-1">
						<Image
							fill
							alt="Nusantara Aroma Craft"
							className="object-cover rounded-lg"
							src="/images/landing/hero-2.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
