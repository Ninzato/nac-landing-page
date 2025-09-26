import { PerfumeTopbar } from '@/components/Perfume/PerfumeTopbar';
import CatalogWrapper from '@/components/Perfume/CatalogWrapper';
import { MainFooter } from '@/components/Main/MainFooter';
import { Suspense } from 'react';
import styles from '../perfume.module.css';

const CatalogPage = () => {
	return (
		<div className={styles.perfumeContainer}>
			<PerfumeTopbar />
			<Suspense fallback={<div>Loading...</div>}>
				<CatalogWrapper />
			</Suspense>
			<MainFooter/>
		</div>
	);
};

export default CatalogPage;
