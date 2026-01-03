'use client';

import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

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

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.97]);
	const textY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.35, 0.75]);

	const videoScale = useTransform(
		scrollYProgress,
		[0, 0.4],
		[1, isMobile ? 1.15 : 1.08]
	);

	return (
		<motion.section
			ref={heroRef}
			className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
			id="perfume-home"
		>
			{/* Video Background */}
			<motion.div className="absolute inset-0 z-0">
				<motion.video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover z-0"
					style={{
						scale: videoScale,
					}}
				>
					<source
						src="/videos/nac-2-hero.mp4"
						type="video/mp4"
					/>
				</motion.video>

				{/* Dark Overlay untuk Kontras */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30"
					style={{ opacity: overlayOpacity }}
				/>

				{/* Subtle Gradient Overlay untuk Luxury Feel */}
				<div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f]/70 via-transparent to-[#0c0707]/50" />
			</motion.div>

			{/* Luxury Overlay */}
			<div className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-8">
				<motion.div
					className="text-center space-y-10 lg:space-y-14"
					style={{ scale: textScale, y: textY }}
				>
					{/* Judul dengan Glow Effect dan Kontras yang Lebih Baik */}
					<div className="overflow-hidden">
						<motion.h1
							className="
                                text-[#f8f5f0]
                                text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem]
                                tracking-[0.15em] md:tracking-[0.2em]
                                leading-[1.15] md:leading-[1.1]
                                font-medium
                                drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
                            "
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.2,
								ease: [0.19, 1.0, 0.22, 1.0],
								delay: 0.1,
							}}
						>
							<span className="block text-[#f8f5f0]">
								{(t('title') ?? '').toUpperCase()}
							</span>
							<span className="block text-[#e8e2d6] mt-3 md:mt-5 text-3xl md:text-5xl lg:text-6xl font-light">
								{(t('subtitle') ?? '').toUpperCase()}
							</span>
						</motion.h1>
					</div>

					{/* Deskripsi dengan Kontras yang Diperbaiki */}
					<motion.div
						className="overflow-hidden"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1.1,
							ease: 'easeOut',
							delay: 0.4,
						}}
					>
						<div className="relative">
							{/* Background Blur untuk Deskripsi */}
							<div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-2xl -m-4" />

							<p
								className="
                                    relative
                                    text-[#f0ece5]
                                    max-w-2xl lg:max-w-3xl 
                                    mx-auto 
                                    text-base md:text-lg lg:text-xl 
                                    font-light 
                                    tracking-wide
                                    leading-relaxed md:leading-loose
                                    font-serif
                                    px-6 py-4
                                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                                "
							>
								{t('description')}
							</p>
						</div>
					</motion.div>

					{/* Button dengan Luxury Touch */}
					<motion.div
						className="overflow-visible pt-6"
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							ease: 'easeOut',
							delay: 0.6,
						}}
					>
						<Link
							href="/perfume/catalog?perfume=melati-dream"
							className="inline-block group overflow-visible"
						>
							<button
								className="
                                    relative
                                    px-14 py-5
                                    text-sm md:text-base 
                                    tracking-[0.25em]
                                    text-[#f8f5f0]
                                    border border-[#f8f5f0]/60
                                    rounded-full
                                    bg-gradient-to-r from-transparent via-white/5 to-transparent
                                    hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10
                                    hover:border-[#f8f5f0]/80
                                    hover:scale-[1.02]
                                    transition-all 
                                    duration-500
                                    overflow-hidden
                                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
                                    before:absolute
                                    before:inset-0
                                    before:bg-gradient-to-r
                                    before:from-transparent
                                    before:via-[#f8f5f0]/20
                                    before:to-transparent
                                    before:translate-x-[-100%]
                                    group-hover:before:translate-x-[100%]
                                    before:transition-transform
                                    before:duration-1000
                                "
							>
								<span className="relative z-10 flex items-center justify-center gap-3">
									{(t('buyButton') ?? '').toUpperCase()}
									<span
										className="
                                        opacity-80 
                                        group-hover:opacity-100 
                                        group-hover:translate-x-1 
                                        transition-all 
                                        duration-300
                                        text-lg
                                    "
									>
										→
									</span>
								</span>
							</button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator yang Lebih Subtle */}
				<motion.div
					className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.6 }}
					transition={{ delay: 1.5, duration: 1 }}
				>
					<div className="flex flex-col items-center">
						<div className="w-px h-12 bg-gradient-to-b from-[#f8f5f0]/60 via-[#f8f5f0]/30 to-transparent" />
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default PerfumeHeroVideo;
