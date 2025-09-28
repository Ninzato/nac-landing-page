import Image from 'next/image';
import Link from 'next/link';

const OrderStep = () => {
	return (
		<section
			className="py-8 lg:py-20"
			id="order-step"
		>
			<div className="container">
				<div className="grid gap-8 md:grid-cols-2 md:items-center">
					<div>
						<h2 className="text-3xl font-semibold sm:text-5xl">
							How Export Orders Are Made
						</h2>
						<ol className="mt-4 space-y-4 text-base-content">
							<li>
								<span className="font-medium text-foreground">
									1) Inquiry & Specs.
								</span>{' '}
								Tell us your target specs, quantity, destination, Incoterms, and
								timeline.
							</li>
							<li>
								<span className="font-medium text-foreground">
									2) Quote & Samples.
								</span>{' '}
								We confirm availability, submit pricing and lead times, and
								dispatch samples if needed.
							</li>
							<li>
								<span className="font-medium text-foreground">
									3) QC & Documents.
								</span>{' '}
								We run quality checks and prepare CoA/MSDS, phytosanitary/export
								permits, and HS codes.
							</li>
							<li>
								<span className="font-medium text-foreground">
									4) Packing & Shipment.
								</span>{' '}
								Commodity‑appropriate packing, insurance options, tracking
								updates, and on‑time delivery.
							</li>
						</ol>
						<div className="mt-6">
							<Link href="/our-services">
								<button className="btn btn-secondary btn-outline w-full">
									View Our Services
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
