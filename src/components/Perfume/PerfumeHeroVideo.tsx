'use client'

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const PerfumeHeroVideo = () => {
	const t = useTranslations('perfumeHero');
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

	const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
	const textY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 0.7]);

	const videoScale = useTransform(
		scrollYProgress,
		[0, 0.4],
		[isMobile ? 1 : 1, isMobile ? 1.1 : 1.05]
	);

	return (
		<motion.section
			ref={heroRef}
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			id="perfume-home"
		>
			{/* Video Background */}
			<motion.video
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
				style={{
					scale: videoScale
				}}
			>
				<source src="/videos/perfume-hero.mp4" type="video/mp4" />
			</motion.video>

			{/* Luxury Overlay */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"
				style={{ opacity: overlayOpacity }}
			/>

			{/* Content Overlay */}
			<div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center space-y-8 bg-black/20 p-8 lg:p-12 border border-white/10"
					style={{
						scale: textScale,
						y: textY
					}}
				>
					<motion.h1
						className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
					>
						{t('title')}
						<span className="font-montserrat bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> {t('subtitle')}</span>
					</motion.h1>
					<motion.p
						className="text-white max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed mx-auto drop-shadow-lg"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
					>
						{t('description')}
					</motion.p>
					<motion.div
						className="pt-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
					>
						<Link href="/perfume/catalog?perfume=raras-anisa">
							<button className="btn btn-accent hover:btn-accent/90 rounded-none btn-lg px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-accent/25">
								{t('buyButton')}
							</button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default PerfumeHeroVideo;
