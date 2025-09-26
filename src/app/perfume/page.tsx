import { PerfumeTopbar } from '@/components/Perfume/PerfumeTopbar'
import { MainFooter } from '@/components/Main/MainFooter'
import styles from './perfume.module.css'
import FeaturedCarousel from '@/components/Perfume/FeaturedCarousel'

const PerfumeHome = () => {
  return (
    <div className={styles.perfumeContainer}>
      <PerfumeTopbar/>
      <FeaturedCarousel/>
      <MainFooter/>
    </div>
  )
}

export default PerfumeHome