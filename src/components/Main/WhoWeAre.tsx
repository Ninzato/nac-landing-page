import Image from 'next/image';

export const WhoWeAre = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="about"
		>
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">Who We Are</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						Mengenal lebih dekat Nusantara Aroma Craft dan dedikasi kami dalam
						mengangkat warisan aromatik Indonesia ke panggung dunia
					</p>
				</div>
				<div className="bg-base-200 rounded-xl mt-12 p-8 lg:p-16">
					<div className="grid items-center gap-12 lg:grid-cols-5">
						{/* Mobile: Logo at top, Desktop: Logo on right */}
						<div className="lg:col-span-2 order-first lg:order-last flex justify-center">
							<Image
								alt="Nusantara Aroma Craft Logo"
								src="/images/logo/nac-logo-official-vertical.png"
								width={300}
								height={200}
								className="lg:w-[450px] lg:h-[300px]"
							/>
						</div>

						{/* Mobile: Text below logo, Desktop: Text on left */}
						<div className="lg:col-span-3 order-last lg:order-first">
							<h3 className="text-2xl font-medium sm:text-3xl">
								Membangun Jembatan Antara Kearifan Tradisional dan Pasar Global
							</h3>
							<p className="text-base-content/80 mt-4 sm:text-lg">
								Indonesia adalah rumah bagi beberapa aroma paling langka dan
								berharga di dunia. Dari kayu agarwood yang legendaris hingga
								kopi dengan karakter yang tak tertandingi, kepulauan Nusantara
								menyimpan harta karun olfactory yang telah memikat peradaban
								selama berabad-abad.
							</p>
                            <p className='text-base-content/80 mt-4 sm:text-lg'>
                                Nusantara Aroma Craft lahir dari visi untuk
								menjadi guardian dan kurator warisan aromatik Indonesia. Kami
								berkomitmen menghadirkan parfum berkualitas tinggi yang
								terinspirasi dari kekayaan alam Nusantara, serta memfasilitasi
								perdagangan komoditi premium dengan standar internasional
								tertinggi. Setiap produk yang kami hadirkan adalah cerminan dari
								dedikasi kami untuk mengangkat keindahan Indonesia ke panggung
								global.
                            </p>

							<div className="mt-8 flex justify-center lg:justify-start">
								<a href="/about">
									<button className="btn btn-primary">Read More</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
