import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import ContactInquiryForm from './ContactInquiryForm';

const ContactForm = () => {
	const t = useTranslations('contactForm');

	return (
		<section
			className="py-8 lg:py-20"
			id="contact-form"
		>
			<div className="container">
				<h2 className="text-center mb-12 text-3xl font-semibold sm:text-5xl">
					{t('title')}
				</h2>

				<div className="grid lg:grid-cols-2 gap-12 relative">
					{/* Separator between columns */}
					<Separator
						orientation="vertical"
						className="absolute left-1/2 top-0 h-full hidden lg:block transform -translate-x-1/2"
					/>
					{/* Left Column - Contact Information */}
					<div className="space-y-8">
						{/* Phone Section */}
						<div>
							<h3 className="text-xl font-medium mb-4">{t('phone.title')}</h3>
							<p className="text-base-content/80 text-sm mb-3">
								{t('phone.description')}
							</p>
							<p className="text-base-content font-medium">+6285710596000</p>
						</div>

						{/* Business Hours */}
						<div>
							<h3 className="text-xl font-medium mb-4">{t('hours.title')}</h3>
							<div className="space-y-2 text-sm text-base-content/80">
								<p>{t('hours.monday')}</p>
								<p>{t('hours.saturday')}</p>
								<p>{t('hours.sunday')}</p>
							</div>
						</div>

						{/* Quick Response */}
						<div>
							<h3 className="text-xl font-medium mb-4">{t('response.title')}</h3>
							<p className="text-base-content/80 text-sm">
								{t('response.description')}
							</p>
						</div>
					</div>

					{/* Right Column - Form */}
					<ContactInquiryForm />
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
