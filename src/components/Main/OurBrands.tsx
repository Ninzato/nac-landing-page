import { BrandSection } from './BrandSection';

export const OurBrands = () => {
	return (
		<section
			className="relative py-8 lg:py-20"
			id="brands"
		>
			<div className="absolute start-[10%]">
				<div className="from-primary/10 to-secondary/10 pointer-events-none aspect-square w-60 rounded-full bg-gradient-to-r blur-3xl lg:w-[600px]"></div>
			</div>

			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">Our Brands</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						Dua lini bisnis unggulan yang menjadi kebanggaan dan representasi Nusantara Aroma Craft di pasar global
					</p>
				</div>

				<div className="mt-8 space-y-8 lg:mt-20 xl:space-y-20">
					<BrandSection
						imageSrc="/images/landing/perfume-brand.png"
						imageAlt="NAC perfume"
						badgeText="perfume Collection"
						badgeColor="primary"
						title="NAC perfume"
						description="asakan esensi Indonesia dalam setiap tetes. Koleksi parfum premium kami menghadirkan interpretasi modern dari warisan aromatik Nusantara yang telah memikat dunia selama berabad-abad. Setiap botol adalah hasil dari perpaduan sempurna antara bahan baku terselecta dan keahlian parfumer berpengalaman."
						features={[
							"Aroma Eksklusif Indonesia",
							"Bahan Baku Pilihan",
							"Proyeksi Aroma Menawan",
							"Kemasan Koleksi Premium"
						]}
						buttonText="Explore Collection"
						buttonHref="/perfume"
						buttonColor="primary"
						buttonIcon="lucide--arrow-right"
					/>

					<BrandSection
						imageSrc="/images/landing/cargo.jpg"
						imageAlt="NAC Export"
						badgeText="Export Import"
						badgeColor="secondary"
						title="NAC Export"
						description="Menghubungkan kekayaan Indonesia dengan pasar global premium. Layanan ekspor-impor kami menghadirkan komoditi berkualitas tinggi dengan standar internasional, memungkinkan mitra bisnis di seluruh dunia merasakan keunggulan produk Indonesia yang autentik dan premium."
						features={[
							"Kopi Premium Nusantara",
							"Kayu Agarwood Berkualitas Tinggi",
							"Jaringan Distribusi Global",
							"Sertifikasi Berstandar Internasional"
						]}
						buttonText="Our Services"
						buttonHref="/export-import"
						buttonColor="secondary"
						buttonIcon="lucide--globe"
						reverseOrder={true}
					/>
				</div>

				<div className="mt-16 text-center">
					<h3 className="text-2xl font-medium">Mari Ciptakan Keunggulan Bersama</h3>
					<p className="text-base-content/80 mt-2">
						Bergabunglah dengan jaringan mitra eksklusif yang telah merasakan keunggulan produk Indoneisa di pasar global.
					</p>
					<div className="mt-6">
						<a href="/contact">
							<button className="btn btn-outline btn-wide btn-lg">
								<span className="iconify lucide--handshake size-5"></span>
								Contact Us Today
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
