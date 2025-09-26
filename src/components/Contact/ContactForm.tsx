import React from 'react';
import { Separator } from '@/components/ui/separator';
import ContactInquiryForm from './ContactInquiryForm';

const ContactForm = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="contact-form"
		>
			<div className="container">
				<h2 className="text-center mb-12 text-3xl font-semibold sm:text-5xl">
					Siap Memulai Kemitraan?
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
							<h3 className="text-xl font-medium mb-4">Hubungi Kami</h3>
							<p className="text-base-content/80 text-sm mb-3">
								Prefer to chat? Give us a call Monday-Friday, 9AM-5PM (GMT+7)
							</p>
							<p className="text-base-content font-medium">+62 21 5555-1234</p>
						</div>

						{/* Business Hours */}
						<div>
							<h3 className="text-xl font-medium mb-4">Jam Operasional</h3>
							<div className="space-y-2 text-sm text-base-content/80">
								<p>Senin - Jumat: 09:00 - 17:00 WIB</p>
								<p>Sabtu: 09:00 - 12:00 WIB</p>
								<p>Minggu: Tutup</p>
							</div>
						</div>

						{/* Quick Response */}
						<div>
							<h3 className="text-xl font-medium mb-4">Respon Cepat</h3>
							<p className="text-base-content/80 text-sm">
								Tim kami berkomitmen memberikan respon dalam waktu 24 jam untuk
								semua pertanyaan bisnis dan kemitraan.
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
