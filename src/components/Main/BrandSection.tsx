import Image from 'next/image';
import {Link} from '@/i18n/routing';

interface BrandSectionProps {
	imageSrc: string;
	imageAlt: string;
	badgeText: string;
	badgeColor: 'primary' | 'secondary';
	title: string;
	description: string;
	features: string[];
	buttonText: string;
	buttonHref: string;
	buttonColor: 'primary' | 'secondary';
	buttonIcon: string;
	reverseOrder?: boolean;
}

export const BrandSection = ({
	imageSrc,
	imageAlt,
	badgeText,
	badgeColor,
	title,
	description,
	features,
	buttonText,
	buttonHref,
	buttonColor,
	buttonIcon,
	reverseOrder = false,
}: BrandSectionProps) => {
	return (
		<div className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${reverseOrder ? 'lg:grid-flow-col-dense' : ''}`}>
			<div className={`rounded-box overflow-hidden relative aspect-video ${reverseOrder ? 'order-first lg:order-last' : ''}`}>
				<Image
					fill
					alt={imageAlt}
					className="object-cover"
					src={imageSrc}
				/>
			</div>

			<div className={reverseOrder ? '' : 'lg:mt-8'}>
				<div className={`badge badge-lg badge-outline badge-${badgeColor}`}>
					{badgeText}
				</div>
				<h3 className="mt-3 text-xl font-medium sm:text-2xl">
					{title}
				</h3>
				<p className="text-base-content/80 mt-1 text-justify">
					{description}
				</p>
				<ul className="mt-4 list-inside list-disc">
					{features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
				<div className="mt-6">
					<Link href={buttonHref}>
						<button className={`btn btn-${buttonColor}`}>
							{buttonText}
							<span className={`iconify ${buttonIcon} size-4`}></span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
