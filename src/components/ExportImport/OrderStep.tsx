'use client';

import Image from 'next/image';
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

interface OrderStep {
	number: string;
	title: string;
	description: string;
}

const OrderStep = () => {
	const t = useTranslations('orderStep');
	return (
		<section
			className="py-8 lg:py-20"
			id="order-step"
		>
			<div className="container">
				<div className="grid gap-8 md:grid-cols-2 md:items-center">
					<div>
						<h2 className="text-3xl font-semibold sm:text-5xl">
							{t('title')}
						</h2>
						<ol className="mt-4 space-y-4 text-base-content">
							{t.raw('steps').map((step: OrderStep, index: number) => (
								<li key={index} className='text-justify'>
									<span className="font-medium text-foreground">
										{step.number}) {step.title}
									</span>{' '}
									{step.description}
								</li>
							))}
						</ol>
						<div className="mt-6">
							<Link href="/export-import/our-services">
								<button className="btn btn-secondary btn-outline w-full">
									{t('viewServicesButton')}
								</button>
							</Link>
						</div>
					</div>
					<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
						{/* cargo/containers imagery */}
						<Image
							src="/images/landing/cargo-containers-logistics-ship-yard.jpg"
							alt="Cargo logistics and containers"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrderStep;
