import { PerfumeTopbar } from '@/components/Perfume/PerfumeTopbar'
import { MainFooter } from '@/components/Main/MainFooter'
import styles from './perfume.module.css'

const PerfumeHome = () => {
  return (
    <div className={styles.perfumeContainer}>
      <PerfumeTopbar/>
      <MainFooter/>
    </div>
  )
}

export default PerfumeHome