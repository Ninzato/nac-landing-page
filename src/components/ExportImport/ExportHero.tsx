import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
	title: string;
	highlight?: string;
	description: string;
	primaryCta?: { href: string; label: string };
	secondaryCta?: { href: string; label: string };
	imageSrc?: string;
	imageAlt?: string;
};

export function Hero({
	title,
	highlight,
	description,
	primaryCta,
	secondaryCta,
	imageSrc = '/images/hero.jpg',
	imageAlt = 'Premium Indonesian commodities',
}: HeroProps) {
	return (
		<section
			className="py-8 lg:py-20"
			id="export-home"
		>
			<div className="container">
				<div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
					<div>
						<h1 className="text-pretty text-4xl md:text-5xl font-semibold tracking-tight">
							{title}{' '}
							{highlight ? (
								<span className="text-primary">{highlight}</span>
							) : null}
						</h1>
						<p className="text-base-content/80 mt-8 sm:text-lg">
							{description}
						</p>
						<div className="mt-6 flex gap-3 flex-wrap">
							{primaryCta && (
								<Link href={primaryCta.href}>
									<button className="btn btn-secondary btn-outline">
										{primaryCta.label}
									</button>
								</Link>
							)}
							{secondaryCta && (
								<Link href={secondaryCta.href}>
									<button className="btn btn-neutral btn-outline">
										{secondaryCta.label}
									</button>
								</Link>
							)}
						</div>
					</div>
					<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border">
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							className="object-cover"
							sizes="(min-width: 768px) 40rem, 100vw"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
