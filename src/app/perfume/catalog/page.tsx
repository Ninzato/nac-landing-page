import { PerfumeTopbar } from '@/components/Perfume/PerfumeTopbar';
import CatalogWrapper from '@/components/Perfume/CatalogWrapper';
import { MainFooter } from '@/components/Main/MainFooter';
import styles from '../perfume.module.css';

const CatalogPage = () => {
	return (
		<div className={styles.perfumeContainer}>
			<PerfumeTopbar />
			<CatalogWrapper />
			<MainFooter/>
		</div>
	);
};

export default CatalogPage;
