'use client';

import { PerfumeCatalog } from '@/data/perfume/Catalog';
import { formatPrice, generateSlug } from '@/lib/perfume-utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

interface PerfumeCardProps {
	perfume: PerfumeCatalog;
}

export const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const t = useTranslations('perfume.card');

	const handleCardClick = () => {
		const slug = generateSlug(perfume.title);
		const params = new URLSearchParams(searchParams.toString());
		params.set('perfume', slug);
		router.push(`?${params.toString()}`, { scroll: false });
	};

	return (
		<div className="group transition-all duration-500 overflow-hidden flex flex-col gap-5">
			<div className="aspect-[4/5] bg-gray-100 relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-500">
				{/* Product Image */}
				<Image
					src={perfume.imagePath}
					alt={perfume.title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>

				{/* Dark Overlay on Hover */}
				<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
					{/* CTA Button with luxury styling */}
					<button
						onClick={handleCardClick}
						className="
							px-8 py-3
							text-xs md:text-sm
							tracking-[0.15em]
							font-light
							uppercase
							text-[#f8f5f0]
							border border-[#f8f5f0]/60
							rounded-full
							bg-transparent
							hover:bg-white/10
							hover:border-[#f8f5f0]/80
							transition-all
							duration-500
							transform translate-y-4 group-hover:translate-y-0 
							opacity-0 group-hover:opacity-100
							hover:cursor-pointer
						"
					>
						{t('viewDetails')}
					</button>
				</div>
			</div>

			<div className="space-y-2 cursor-pointer">
				{/* Title with refined typography */}
				<div className="text-center">
					<h6
						onClick={handleCardClick}
						className="
						text-base md:text-lg 
						font-medium 
						tracking-[0.06em] 
						group-hover:text-accent 
						transition-colors duration-300 
						w-fit mx-auto
					"
					>
						{perfume.title}
					</h6>
				</div>

				{/* Price with elegant styling */}
				<div className="text-center">
					<p
						className="
						text-sm md:text-base 
						font-light 
						tracking-wide 
						text-foreground/70
					"
					>
						{formatPrice(perfume.price)}
					</p>
				</div>
			</div>
		</div>
	);
};
