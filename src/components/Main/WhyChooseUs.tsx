import React from 'react';
import FeatureCard, { FeatureCardProps } from './FeatureCard';

const FeatureCardContents: FeatureCardProps[] = [
	{
		iconBg: 'bg-primary/15',
		iconVariant: 'lucide--sparkles',
		iconSize: 'size-8',
		titleColor: 'text-primary',
		titleContent: 'Heritage & Expertise',
		textContent:
			'Lebih dari 20 tahun pengalaman dalam industri aromatik Indonesia',
	},
	{
		iconBg: 'bg-secondary/15',
		iconVariant: 'lucide--package-check',
		iconSize: 'size-8',
		titleColor: 'text-secondary',
		titleContent: 'Quality Assurance',
		textContent:
			'Sertifikasi internasional dan kontrol kualitas premium di setiap tahap produksi',
	},
    {
		iconBg: 'bg-accent/15',
		iconVariant: 'lucide--award',
		iconSize: 'size-8',
		titleColor: 'text-accent',
		titleContent: 'Exclusive Network',
		textContent:
			'Akses eksklusif ke supplier terbaik dan jaringan distribusi global yang terpercaya',
	},
    {
		iconBg: 'bg-neutral/15',
		iconVariant: 'lucide--brush',
		iconSize: 'size-8',
		titleColor: 'text-neutral',
		titleContent: 'Custom Solutions',
		textContent:
			'Layanan kustomisasi produk yang disesuaikan dengan kebutuhan spesifik mitra bisnis',
	},
];

const WhyChooseUs = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="why-choose-us"
		>
			<div className="container flex flex-col gap-8">
				<div className="text-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">
						Why Choose NAC?
					</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						Keunggulan yang membuat Nusantara Aroma Craft menjadi pilihan utama
						mitra bisnis internasional
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
					{FeatureCardContents.map((content, index) => (
						<FeatureCard
							key={index}
							iconBg={content.iconBg}
							iconVariant={content.iconVariant}
							iconSize={content.iconSize}
							titleColor={content.titleColor}
							titleContent={content.titleContent}
							textContent={content.textContent}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
