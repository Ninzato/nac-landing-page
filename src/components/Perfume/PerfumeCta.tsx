import Link from 'next/link';

const PerfumeCta = () => {
	return (
		<section
			className="relative py-8 lg:py-20 bg-accent/10"
			id="brands"
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
					<div className="flex flex-col gap-8 md:gap-10">
						<h1 className="text-5xl leading-13 font-bold md:text-6xl md:leading-18">
							Rasakan sensasi aroma harmoni Sunda
						</h1>
						<Link href="/perfume/catalog?perfume=raras-anisa" className='w-full'>
							<button className="btn btn-outline btn-accent btn-lg flex rounded-none w-full">
								Cek Produk{' '}
								<span className="iconify ph--arrow-right-light size-5"></span>
							</button>
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-3xl font-bold">
							Hadirkan kenyamanan dan kepercayaan diri
						</h2>
						<p className="text-xl leading-8">
							Wewangian Raras Anisa ditujukan bagi mereka yang menghargai
							keindahan yang tenang dan kekuatan yang lembut. Aroma ini
							merupakan perayaan identitas, yang diciptakan dengan cinta dan
							rasa hhormat terhadap warisan luhur Sunda.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfumeCta;
