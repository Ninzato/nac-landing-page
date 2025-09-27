import Image from 'next/image';
import Link from 'next/link';

const PerfumeHero = () => {
	return (
		<section
			className="py-8 lg:py-20 max-h-[560px] lg:max-h-[894px] overflow-hidden"
			id="home"
		>
			<div className="container">
				<div className="flex gap-8 items-center flex-col lg:gap-16">
					<div className="space-y-8">
						<h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none text-center">
							Raras Anisa,
							<span className="text-accent font-montserrat"> Harmoni Sunda</span>
						</h1>
						<p className="text-base-content/80 max-w-3xl text-xl leading-8 text-center">
							Terinspirasi oleh jantung tanah Sunda. RARAS ANISA adalah wewangian yang menangkap keanggunan dan kecantikan putri Priyanjan. Ini adalah harmoni lembut melati yang rimbun, kehangatan cendana, dan kedalaman oud. Keindahan yang menenangkan jiwa.
						</p>
						<div className="gap-3 sm:mt-16 flex justify-center ">
							<Link href="/perfume/catalog?perfume=raras-anisa">
								<button className="btn btn-outline btn-accent rounded-none z-100 btn-lg">
									Beli Sekarang
								</button>
							</Link>
						</div>
					</div>

					<div className="relative aspect-square rounded-2xl bg-linear-to-r p-3 w-full">
						<Image
							fill
							alt="Raras Anisa"
							className="object-cover -translate-y-20 lg:-translate-y-32 2xl:-translate-y-52 drop-shadow-2xl z-0 pointer-events-none"
							src="/images/landing/raras-anisa.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfumeHero;
