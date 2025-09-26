'use client';

import { PerfumeCatalog } from '@/data/perfume/Catalog';
import { generateSlug, formatPrice } from '@/lib/perfume-utils';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface PerfumeCardProps {
	perfume: PerfumeCatalog;
}

export const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleCardClick = () => {
		const slug = generateSlug(perfume.title);
		const params = new URLSearchParams(searchParams.toString());
		params.set('perfume', slug);
		router.push(`?${params.toString()}`, { scroll: false });
	};

	return (
		<div className="group transition-shadow duration-300 overflow-hidden flex flex-col gap-4">
			<div className="aspect-square bg-gray-100 relative overflow-hidden">
				{/* Product Image */}
				<Image
					src={perfume.imagePath}
					alt={perfume.title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>

				{/* Dark Overlay on Hover */}
				<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					{/* CTA Button */}
					<button
						onClick={handleCardClick}
						className="btn btn-accent font-semibold font-montserrat transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:cursor-pointer"
					>
						LIHAT DETAIL
					</button>
				</div>
			</div>

			<div onClick={handleCardClick}>
				<div className="text-center">
					<h6 className="text-lg font-bold tracking-wide group-hover:text-accent transition-colors duration-300 cursor-pointer w-fit mx-auto">
						{perfume.title}
					</h6>
				</div>

				<div className="justify-center text-center">
					<p className="text-lg font-medium text-gray-600">
						{formatPrice(perfume.price)}
					</p>
				</div>
			</div>
		</div>
	);
};
