import { PerfumeCatalogDataId } from '@/data/perfume/Catalog';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { Suspense } from 'react';

const CatalogWrapper = () => {
	return (
		<>
			<section
				className="py-8 lg:py-20"
				id="catalog"
			>
				<div className="container">
					{/* Header Section */}
					<div className="text-center mb-16">
						<p className="text-sm tracking-wider mb-4 font-montserrat text-primary">
							KOLEKSI PARFUM
						</p>
						<h1 className="text-4xl lg:text-5xl font-bold mb-6 text-accent">PRODUK KAMI.</h1>
						<p className="text-lg text-accent-75 max-w-2xl mx-auto leading-relaxed">
							Koleksi parfum eksklusif yang menghadirkan keharuman khas Nusantara.
							Setiap aroma menceritakan kisah budaya dan tradisi Indonesia yang
							kaya, dikemas dalam botol mewah untuk pengalaman yang tak
							terlupakan.
						</p>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{PerfumeCatalogDataId.map((perfume, index) => (
							<PerfumeCard
								key={index}
								perfume={perfume}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Modal - Wrapped in Suspense for search params */}
			<Suspense fallback={null}>
				<PerfumeModal />
			</Suspense>
		</>
	);
};

export default CatalogWrapper;
