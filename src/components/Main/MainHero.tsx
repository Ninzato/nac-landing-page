import Image from 'next/image';
import Link from 'next/link';

export const MainHero = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="home"
		>
			<div className="container">
				<div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16">
					<div className="max-lg:order-2">
						<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
							Discover Indonesia&apos;s
							<span className="text-primary"> Luxury Heritage</span>
						</h1>
						<p className="text-base-content/80 mt-8 sm:text-lg">
							Temukan keanggunan aroma Indonesia yang telah memikat dunia selama berabad-abad. Nusantara Aroma Craft menghadirkan parfum premium dan komoditi berkualitas tinggi yang menggabungkan warisan tradisional Nusantara dengan standar kemewahan internasional. Dari esensi kayu agarwood yang legendaris hingga kopi dengan karakter yang tak tertandingi, kami menjadi jembatan antara kekayaan alam Indonesia dan pasar global premium.
						</p>
						<div className="mt-8 inline-flex gap-3 sm:mt-16">
							<Link href="/perfume">
								<button className="btn btn-primary text-primary-content">
									<span className="iconify lucide--sparkles size-4"></span>
									Jelalahi Koleksi Parfum
								</button>
							</Link>
							<Link href="/export-import">
								<button className="btn btn-secondary">
									<span className="iconify lucide--globe size-4"></span>
									Lihat Layanan Ekspor
								</button>
							</Link>
						</div>
					</div>

					<div className="from-primary/40 to-secondary/40 relative aspect-square rounded-2xl bg-linear-to-r p-3 max-lg:order-1">
						<Image
							fill
							alt="Nusantara Aroma Craft"
							className="object-cover rounded-lg"
							src="/images/landing/hero-2.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
