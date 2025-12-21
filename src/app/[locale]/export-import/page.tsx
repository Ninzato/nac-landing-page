import ExportCta from '@/components/ExportImport/ExportCta';
import { Hero } from '@/components/ExportImport/ExportHero';
import ExportSelectedCommodities from '@/components/ExportImport/ExportSelectedCommodities';
import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import ExportWhyChooseUs from '@/components/ExportImport/ExportWhyChooseUs';
import OrderStep from '@/components/ExportImport/OrderStep';
import { MainFooter } from '@/components/Main/MainFooter';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
	const t = await getTranslations('exportHero');

	return (
		<>
			<ExportTopbar />
			{/* Hero */}
			<Hero
				title={t('title')}
				highlight={t('highlight')}
				description={t('description')}
				primaryCta={{ href: '/export-import/our-commodities', label: t('primaryCta') }}
				secondaryCta={{ href: '/export-import/our-services', label: t('secondaryCta') }}
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
