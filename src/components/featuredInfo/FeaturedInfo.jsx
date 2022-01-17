import styles from './featuredinfo.module.css';
import up from '../../img/up.png'
import down from '../../img/down.png'


export default function FeaturedInfo() {
  return (
    <div className={styles.featuredInfo}>
      <div className={styles.featured}>
        <div className={styles.featuredTitle}>Revenue</div>
        <div className={styles.featuredPriceSection}>
          <div className={styles.featuredPrice}>$2,454</div>
          <div className={styles.featuredPriceDifference}>-11.4</div>
          <img src={down} alt="down trend" className={styles.featuredPriceTrend}/>
        </div>
        <div className={styles.featuredText}>Compared to last month</div>
      </div>
      <div className={styles.featured}>
        <div className={styles.featuredTitle}>Sales</div>
        <div className={styles.featuredPriceSection}>
          <div className={styles.featuredPrice}>$4,354</div>
          <div className={styles.featuredPriceDifference}>-11.4</div>
          <img src={up} alt="up trend" className={styles.featuredPriceTrend}/>
        </div>
        <div className={styles.featuredText}>Compared to last month</div>
      </div>
      <div className={styles.featured}>
        <div className={styles.featuredTitle}>Cost</div>
        <div className={styles.featuredPriceSection}>
          <div className={styles.featuredPrice}>$1,845</div>
          <div className={styles.featuredPriceDifference}>-11.4</div>
          <img src={down} alt="down trend" className={styles.featuredPriceTrend}/>
        </div>
        <div className={styles.featuredText}>Compared to last month</div>
      </div>
    </div>
  )
}
