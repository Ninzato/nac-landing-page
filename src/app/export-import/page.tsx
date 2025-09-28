import { Hero } from '@/components/ExportImport/ExportHero';
import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import ExportSelectedCommodities from '@/components/ExportImport/ExportSelectedCommodities';
import OrderStep from '@/components/ExportImport/OrderStep';
import ExportWhyChooseUs from '@/components/ExportImport/ExportWhyChooseUs';
import { MainFooter } from '@/components/Main/MainFooter';
import ExportCta from '@/components/ExportImport/ExportCta';

export default function HomePage() {
	return (
		<>
			<ExportTopbar />
			{/* Hero */}
			<Hero
				title="Indonesia’s Premium Exports,"
				highlight="Delivered Reliably"
				description="Your trusted partner for perfumery raw materials (oud & essential oils), specialty coffee beans, and high‑quality charcoal. We handle sourcing, quality checks, documentation, and logistics—end to end."
				primaryCta={{ href: '/our-commodities', label: 'Explore Commodities' }}
				secondaryCta={{ href: '/our-services', label: 'How We Work' }}
				imageSrc="/images/landing/cargo.jpg"
				imageAlt="Cargo"
			/>
			<ExportSelectedCommodities />

			<OrderStep />

			<ExportWhyChooseUs />

			<ExportCta />

			<MainFooter />
		</>
	);
}
