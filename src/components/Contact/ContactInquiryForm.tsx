"use client";

import React, { useState } from 'react';

const ContactInquiryForm = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		company: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Create mailto link with form data
			const subject = encodeURIComponent(
				`Partnership Inquiry from ${formData.fullName}`
			);
			const body = encodeURIComponent(`
Nama: ${formData.fullName}
Email: ${formData.email}
Perusahaan: ${formData.company || 'Not specified'}

Pesan:
${formData.message}
			`);

			const mailtoLink = `mailto:business@nusantaraaromacraft.com?subject=${subject}&body=${body}`;

			// Open email client
			window.location.href = mailtoLink;

			// Reset form and show success
			setFormData({
				fullName: '',
				email: '',
				company: '',
				message: '',
			});
			setSubmitStatus('success');
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<h3 className="text-2xl font-medium mb-6">Kirim Pertanyaan</h3>

			{/* Success Message */}
			{submitStatus === 'success' && (
				<div className="alert alert-success mb-4">
					<span>
						Email client opened successfully! Please send the email to
						complete your inquiry.
					</span>
				</div>
			)}

			{/* Error Message */}
			{submitStatus === 'error' && (
				<div className="alert alert-error mb-4">
					<span>
						Something went wrong. Please try again or contact us directly.
					</span>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Nama Lengkap</legend>
					<input
						name="fullName"
						value={formData.fullName}
						onChange={handleInputChange}
						className="input w-full focus:outline-0"
						placeholder="First and last name"
						type="text"
						required
					/>
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">Email Perusahaan</legend>
					<input
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="input w-full focus:outline-0"
						placeholder="me@company.com"
						type="email"
						required
					/>
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">
						Nama Perusahaan{' '}
						<span className="text-base-content/60">(optional)</span>
					</legend>
					<input
						name="company"
						value={formData.company}
						onChange={handleInputChange}
						className="input w-full focus:outline-0"
						placeholder="Company name"
						type="text"
					/>
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">Pesan Anda</legend>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						className="textarea textarea-bordered w-full focus:outline-0 min-h-32 resize-none"
						placeholder="Write your message"
						required
					/>
				</fieldset>

				<div className="flex justify-end pt-4">
					<button
						type="submit"
						disabled={isSubmitting}
						className="btn btn-primary px-8"
					>
						{isSubmitting ? (
							<>
								<span className="loading loading-spinner loading-sm"></span>
								Sending...
							</>
						) : (
							'Submit'
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactInquiryForm;