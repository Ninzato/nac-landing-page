import Link from 'next/link';
import React from 'react';

const ExportCta = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="about"
		>
			<div className="container">
				<div className="border border-border py-8 bg-base-200">
					<h2 className="text-3xl font-semibold sm:text-5xl text-center">
						Ready to Start Your Order?
					</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						Let’s move from specs to shipment with a partner focused on quality
						and reliability.
					</p>
					<div className="mt-6 flex justify-center">
						<Link href="/our-services">
							<button className="btn btn-neutral btn-outline">
								View Our Services
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExportCta;
