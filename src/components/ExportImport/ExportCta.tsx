'use client';

import {Link} from '@/i18n/routing';
import React from 'react';
import {useTranslations} from 'next-intl';

const ExportCta = () => {
	const t = useTranslations('exportCta');
	return (
		<section
			className="py-8 lg:py-20"
			id="about"
		>
			<div className="container">
				<div className="border border-border py-8 bg-base-200">
					<h2 className="text-3xl font-semibold sm:text-5xl text-center">
						{t('title')}
					</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						{t('subtitle')}
					</p>
					<div className="mt-6 flex justify-center">
						<Link href="/export-import/our-services">
							<button className="btn btn-neutral btn-outline">
								{t('viewServicesButton')}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExportCta;
