import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ContactCard = () => {
	const t = useTranslations('contactCard');

	return (
		<div
			className="py-8 lg:py-20"
			id="contact-card"
		>
			<div className="container">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold sm:text-5xl mb-4">{t('title')}</h2>
					<p className="text-base-content/80 sm:text-xl">
						{t('subtitle')}
					</p>
				</div>

				{/* Main Contact Card */}
				<div className="grid lg:grid-cols-2 gap-6 items-center">
					{/* Left Side - Logo */}
					<div className="bg-base-200/50 rounded-xl p-8 lg:p-16 flex items-center justify-center aspect-square">
						<Image
							alt="Nusantara Aroma Craft Logo"
							src="/images/logo/nac-logo-official-vertical.png"
							width={300}
							height={200}
							className="max-w-full h-auto"
						/>
					</div>

					{/* Right Side - Contact Information */}
					<div className="bg-base-200/50 rounded-xl p-4 flex flex-col gap-4 aspect-square">
						{/* Email Section */}
						<div className='bg-base-100 flex-1 flex flex-col w-full p-6 rounded-xl justify-between'>
							<h3 className="flex-1 text-xl font-medium mb-4">{t('email')}</h3>
							<div className="flex-1 flex flex-col justify-end gap-2">
								<p className="text-base-content/80">
									info@nusantaraaromacraft.com
								</p>
								<p className="text-base-content/80">
									business@nusantaraaromacraft.com
								</p>
							</div>
						</div>

						{/* Offices Section */}
						<div className='bg-base-100 flex-1 flex flex-col w-full p-6 rounded-xl'>
							<h3 className="flex-1 text-xl font-medium mb-6">{t('offices')}</h3>
							<div className="flex-1 flex items-center">
								<div className="grid sm:grid-cols-2 gap-6 w-full">
									{/* Jakarta Office */}
									<div>
										<h4 className="font-medium text-base-content/90 mb-2">
											{t('jakarta')}
										</h4>
										<p className="text-sm text-base-content/70">
											Jl. Sudirman Kav. 52-53
											<br />
											Jakarta Selatan 12190
											<br />
											Indonesia
										</p>
									</div>

									{/* Surabaya Office */}
									<div>
										<h4 className="font-medium text-base-content/90 mb-2">
											{t('surabaya')}
										</h4>
										<p className="text-sm text-base-content/70">
											Jl. Pemuda No. 31-37
											<br />
											Surabaya 60271
											<br />
											East Java, Indonesia
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
