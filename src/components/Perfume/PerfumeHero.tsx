'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const PerfumeHero = () => {
	const heroRef = useRef<HTMLElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile breakpoint (768px - Tailwind's md breakpoint)
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const { scrollYProgress } = useScroll();

	const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
	const textY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

	const imageScale = useTransform(
		scrollYProgress,
		[0, 0.3],
		[isMobile ? 1.3 : 1, isMobile ? 1.8 : 1.2]
	);

	return (
		<motion.section
			ref={heroRef}
			className="py-8 lg:py-20 max-h-[820px] lg:max-h-[894px] overflow-hidden"
			id="perfume-home"
		>
			<div className="container">
				<div className="flex gap-8 items-center flex-col lg:gap-16">
					<motion.div
						className="space-y-8"
						style={{
							scale: textScale,
							y: textY
						}}
					>
						<motion.h1
							className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0 }}
						>
							Raras Anisa,
							<span className="text-accent font-montserrat"> Harmoni Sunda</span>
						</motion.h1>
						<motion.p
							className="text-base-content/80 max-w-3xl text-xl leading-8 text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0.3 }}
						>
							Terinspirasi oleh jantung tanah Sunda. RARAS ANISA adalah wewangian yang menangkap keanggunan dan kecantikan putri Priyanjan. Ini adalah harmoni lembut melati yang rimbun, kehangatan cendana, dan kedalaman oud. Keindahan yang menenangkan jiwa.
						</motion.p>
						<motion.div
							className="gap-3 sm:mt-16 flex justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
						>
							<Link href="/perfume/catalog?perfume=raras-anisa">
								<button className="btn btn-outline btn-accent rounded-none z-100 btn-lg">
									Beli Sekarang
								</button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative aspect-square rounded-2xl bg-linear-to-r p-3 w-full"
						style={{
							scale: imageScale
						}}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 0.6, delay: 0.9 }}
					>
						<Image
							fill
							alt="Raras Anisa"
							className="object-cover translate-y-10 md:-translate-y-28 2xl:-translate-y-52 drop-shadow-2xl z-0 pointer-events-none"
							src="/images/landing/raras-anisa.png"
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default PerfumeHero;
