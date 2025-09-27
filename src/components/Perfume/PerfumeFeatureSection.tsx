import Image from 'next/image';

interface PerfumeFeatureSectionData {
	iconClass: string;
	tagline: string;
	title: string;
	description: string;
	isReversed: boolean;
	imagePath: string;
}

const data: PerfumeFeatureSectionData[] = [
	{
		iconClass: 'ph--sun-light',
		tagline: 'Bak arunika di hijaunya loka',
		title: 'Dibuka dengan Champs Elisses Ehsas dan Al Wafa',
		description:
			'Dengan nuansa aroma awal dari Champs Elisses Ehsas dan Al Wafa, Raras Anisa hadir bagaikan cahaya pagi di padang rumput Priyanjan. Menawarkan keindahan yang primal, menawan, dan menyegarkan.',
		isReversed: false,
		imagePath: '/images/landing/raras-anisa-feature-1.png',
	},
	{
		iconClass: 'ph--rainbow-light',
		tagline: 'Keanggunan tiada tara',
		title: 'Inti Aromatik Cendana',
		description:
			'Perpaduan aromatik hangat dari Cendana membawakan esensi "Raras"--kehangatan, ketenangan dan keanggunan yang seimbang. Perlambang sempurna bagi ciri khas semangat Sunda.',
		isReversed: true,
		imagePath: '/images/landing/raras-anisa-feature-2.png',
	},
	{
		iconClass: 'ph--sparkle-light',
		tagline: 'Mahligai syurgawi di tiap tetes',
		title: 'Perpaduan Roberto Cavalli dan Mukhallat Oud',
		description:
			'Dengan nuansa wewangian yang royal, Raras Anisa menciptakan kedalam dan keistimewaan dalam tiap sentuhan. Aroma ini menggambarkan kekuatan dan daya tarik yang tenang di balik keindahan yang lembut.',
		isReversed: false,
		imagePath: '/images/landing/raras-anisa-feature-3.png',
	},
];

const PerfumeFeatureSection = () => {
	return (
		<>
			{data.map((item, index) => (
				<div
					key={index}
					className="grid lg:grid-cols-2 items-center gap-6 xl:gap-8 py-10 lg:py-20"
				>
					<div className="flex flex-col gap-4 xl:gap-6">
						<div className="flex gap-2 xl:gap-4 items-center">
							<span
								className={`iconify ${item.iconClass} size-4 xl:size-6 text-accent/80`}
							></span>
							<h3 className="text-accent/80 text-lg">{item.tagline}</h3>
						</div>
						<h2 className="text-2xl xl:text-4xl tracking-wide">{item.title}</h2>
						<p className="text-xl leading-8">{item.description}</p>
					</div>
					<div
						className={`overflow-hidden aspect-square relative ${item.isReversed ? 'order-last lg:order-first' : ''}`}
					>
						<Image
							src={item.imagePath}
							alt="Raras Anisa perfume on multiple platform"
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
