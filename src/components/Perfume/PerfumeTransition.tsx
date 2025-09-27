'use client'

import { motion } from 'motion/react';

const PerfumeTransition = () => {
	return (
		<section
			className="py-16 lg:py-32 bg-accent/10"
			id="home"
		>
			<div className="container">
				<div className="flex flex-col gap-4 lg:gap-8">
					<motion.h2
						className="font-semibold text-2xl sm:text-3xl xl:text-[44px] tracking-wide text-center xl:text-left"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 0.6, delay: 1.2 }}
					>
						Mahakarya terbaru kami dalam dunia parfum.
					</motion.h2>
					<motion.h2
						className="font-semibold text-2xl sm:text-3xl xl:text-[44px] text-center xl:text-right tracking-wide"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 0.6, delay: 1.2 }}
					>
						Memadukan <span className="font-montserrat text-accent">Kelembutan, Harmoni dan Kebaikan</span>
					</motion.h2>
					<motion.h2
						className="font-semibold text-2xl sm:text-3xl xl:text-[44px] tracking-wide text-center xl:text-left"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ease: "easeOut", duration: 0.6, delay: 1.2 }}
					>
						Dalam sebuah racikan dengan kualitas terbaik.
					</motion.h2>
				</div>
			</div>
		</section>
	);
};

export default PerfumeTransition;
