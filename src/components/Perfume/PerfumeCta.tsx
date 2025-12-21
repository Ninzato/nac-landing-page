import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const PerfumeCta = () => {
	const t = useTranslations('perfume.cta');

	return (
		<section
			className="relative py-12 lg:py-24 bg-accent/10"
			id="brands"
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
					<div className="flex flex-col gap-8 md:gap-10">
						{/* Title with luxury typography */}
						<h1
							className="
							text-4xl md:text-5xl lg:text-6xl 
							leading-[1.15] md:leading-[1.1]
							font-medium
							tracking-[0.04em]
							drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]
						"
						>
							{t('title')}
						</h1>

						{/* Button with refined luxury styling */}
						<Link
							href="/perfume/catalog"
							className="w-full group"
						>
							<button
								className="
								relative
								w-full
								px-8 py-4
								text-sm md:text-base
								tracking-[0.15em]
								font-light
								uppercase
								border border-accent/60
								rounded-full
								bg-transparent
								hover:bg-accent/10
								hover:border-accent/80
								transition-all
								duration-500
								flex items-center justify-center gap-3
								shadow-[0_4px_16px_rgba(0,0,0,0.08)]
								hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
								cursor-pointer
							"
							>
								<span>{t('buttonText')}</span>
								<span
									className="
                                        opacity-80 
                                        group-hover:opacity-100 
                                        group-hover:translate-x-1 
                                        transition-all 
                                        duration-300
                                        text-lg
                                    "
								>
									→
								</span>
							</button>
						</Link>
					</div>

					<div className="flex flex-col gap-5">
						{/* Subtitle with refined styling */}
						<h2
							className="
							text-2xl md:text-3xl 
							font-medium
							tracking-[0.04em]
							leading-[1.2]
						"
						>
							{t('subtitle')}
						</h2>

						{/* Description with elegant typography */}
						<p
							className="
							text-base md:text-lg xl:text-xl 
							leading-relaxed md:leading-loose
							font-light
							tracking-wide
							text-foreground/85
						"
						>
							{t('description')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfumeCta;
