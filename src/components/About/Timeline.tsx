import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type TimelineEntry = {
	date: string;
	title: string;
	content: string;
};

const timelineData: TimelineEntry[] = [
	{
		date: '1990s',
		title: 'Eksplorasi Warisan Aromatik Indonesia',
		content:
			'Perjalanan kami dimulai dengan eksplorasi mendalam terhadap kekayaan warisan aromatik Nusantara. Kami menjelajahi berbagai daerah di Indonesia untuk memahami tradisi penggunaan rempah dan aromaterapi yang telah diwariskan turun-temurun, mengidentifikasi bahan-bahan premium yang menjadi identitas olfaktori Indonesia.',
	},
	{
		date: '2000s',
		title: 'Pengembangan Jaringan Supplier Tradisional',
		content:
			'Dekade ini menandai pembentukan jaringan kemitraan strategis dengan para petani dan pengrajin lokal. Kami membangun hubungan langsung dengan komunitas tradisional yang telah menjaga kualitas bahan-bahan aromatik selama generasi, memastikan pasokan yang berkelanjutan dan berkualitas tinggi sambil mendukung ekonomi lokal.',
	},
	{
		date: '2010s',
		title: 'Sertifikasi Internasional dan Ekspansi Global',
		content:
			'Era transformasi menuju standar global dimana kami meraih berbagai sertifikasi internasional yang mengakui kualitas dan keaslian produk kami. Ekspansi ke pasar internasional dimulai, memperkenalkan keunikan aroma Indonesia kepada dunia sambil tetap mempertahankan nilai-nilai tradisional dan kualitas premium.',
	},
	{
		date: '2020s',
		title: 'Inovasi Berkelanjutan dan Kemitraan Premium',
		content:
			'Memasuki era digital dan keberlanjutan, kami mengintegrasikan teknologi terdepan dalam proses produksi sambil memperkuat komitmen terhadap praktik ramah lingkungan. Kemitraan dengan brand-brand premium global memperkuat posisi kami sebagai pionir dalam industri aromaterapi berkualitas tinggi dari Indonesia.',
	},
];

export const Timeline = () => {
	return (
		<section className="py-8 lg:py-20">
			<div className="container">
				<h1 className="text-3xl font-semibold sm:text-5xl mb-8 text-center">
					Perjalanan Nusantara Aroma Craft
				</h1>
				<div className="relative mx-auto max-w-4xl">
					<Separator
						orientation="vertical"
						className="bg-accent absolute left-2 top-4"
					/>
					{timelineData.map((entry, index) => (
						<div
							key={index}
							className="relative mb-10 pl-8"
						>
							<div className="bg-accent absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
							<h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
								{entry.title}
							</h4>

							<h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
								{entry.date}
							</h5>

							<Card className="my-5 border-none bg-base-200/60 shadow-sm rounded-xl">
								<CardContent className="px-0 xl:px-2">
									<div
										className="prose dark:prose-invert text-base-content"
										dangerouslySetInnerHTML={{ __html: entry.content }}
									/>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
