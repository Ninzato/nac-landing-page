import { PerfumeTopbar } from '@/components/Perfume/PerfumeTopbar';
import { MainFooter } from '@/components/Main/MainFooter';
import styles from './perfume.module.css';
import type { Metadata } from 'next';
// import PerfumeTransition from '@/components/Perfume/PerfumeTransition';
import PerfumeFeatures from '@/components/Perfume/PerfumeFeatures';
import PerfumeCta from '@/components/Perfume/PerfumeCta';
import PerfumeHeroVideo from '@/components/Perfume/PerfumeHeroVideo';

export const metadata: Metadata = {
	title: 'Premium Perfume Collection | Nusantara Aroma Craft',
	description:
		'Discover our exquisite collection of handcrafted perfumes. Signature fragrances, premium artisan scents, and luxury fragrance experiences from Nusantara Aroma Craft.',
	keywords:
		'perfume, fragrance, artisan perfume, luxury scents, nusantara aroma craft, handcrafted perfume',
	openGraph: {
		title: 'Premium Perfume Collection | Nusantara Aroma Craft',
		description:
			'Discover our exquisite collection of handcrafted perfumes. Signature fragrances, premium artisan scents, and luxury fragrance experiences.',
		images: [
			{
				url: '/images/featured-perfume-1.jpg',
				width: 1200,
				height: 630,
				alt: 'Featured Perfume Collection',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Premium Perfume Collection | Nusantara Aroma Craft',
		description: 'Discover our exquisite collection of handcrafted perfumes.',
		images: ['/images/featured-perfume-1.jpg'],
	},
};

const PerfumeHome = () => {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Premium Perfume Collection',
		description:
			'Exquisite collection of handcrafted perfumes by Nusantara Aroma Craft',
		url: 'https://nusantara-aroma-craft.com/perfume',
		mainEntity: {
			'@type': 'ItemList',
			name: 'Featured Perfume Collections',
			itemListElement: [
				{
					'@type': 'Product',
					position: 1,
					name: 'Signature Fragrance Collection',
					description: 'Our signature collection of premium fragrances',
					image: '/images/featured-perfume-1.jpg',
				},
				{
					'@type': 'Product',
					position: 2,
					name: 'Premium Artisan Scents',
					description:
						'Handcrafted artisan perfumes with unique scent profiles',
					image: '/images/featured-perfume-2.jpg',
				},
				{
					'@type': 'Product',
					position: 3,
					name: 'Luxury Fragrance Experience',
					description: 'Luxury perfumes for the ultimate fragrance experience',
					image: '/images/featured-perfume-3.jpg',
				},
			],
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className={styles.perfumeContainer}>
				<PerfumeTopbar />
				<PerfumeHeroVideo />
				{/* <PerfumeTransition /> */}
				<PerfumeFeatures />
				<PerfumeCta />
				<MainFooter />
			</div>
		</>
	);
};

export default PerfumeHome;
