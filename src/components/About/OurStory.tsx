import Image from 'next/image';

export const OurStory = () => {
	return (
		<section className="py-8 lg:py-20">
			<div className="container">
				{/* Main Our Story Section */}
				<div className="grid lg:grid-cols-2 gap-16 items-start">
				{/* Left Content Column */}
				<div className="space-y-6">
					<h1 className="text-3xl font-semibold sm:text-5xl mb-8">Our Story</h1>

					<p className="text-base-content leading-relaxed">
						Indonesia telah menjadi pusat perdagangan rempah dan aromatics
						selama ribuan tahun. Jalur sutera yang legendaris membawa keharuman
						kayu agarwood, kopi, dan rempah-rempah Nusantara ke istana-istana di
						seluruh dunia. Namun seiring berjalannya waktu, kekayaan aromatik
						ini sering kali hilang dalam rantai distribusi global yang tidak
						menghargai keunikan dan kualitas aslinya.
					</p>

					<p className="text-base-content leading-relaxed">
						Nusantara Aroma Craft lahir dari keprihatinan ini. Didirikan oleh
						sekelompok profesional yang memiliki visi sama tentang pentingnya
						melestarikan dan mengangkat warisan aromatik Indonesia, kami
						berkomitmen untuk menjadi jembatan antara kearifan tradisional
						Nusantara dengan kebutuhan pasar global modern.
					</p>

					<p className="text-base-content leading-relaxed">
						Perjalanan kami dimulai dengan eksplorasi mendalam ke berbagai
						daerah di Indonesia, mempelajari teknik tradisional pembuatan parfum
						dan pengolahan komoditi aromatik. Dari hutan-hutan Kalimantan yang
						menyimpan kayu agarwood terbaik dunia, hingga perkebunan kopi di
						pegunungan Jawa yang menghasilkan biji dengan karakter unik, setiap
						langkah membawa kami semakin dekat dengan esensi sejati Indonesia.
					</p>
				</div>

				<div className="relative aspect-square rounded-xl overflow-hidden">
					<Image
						src="/images/landing/building.jpg"
						alt="Nusantara Aroma Craft Headquarter"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
		</section>
	);
};
