import styles from './widgetBg.module.css';
import profile from '../../img/man.png'

export default function WidgetBg() {
  const Button = ({type}) => {
    return <button className={`${styles.widgetBgButton} ${styles[type]}`}>{type}</button>
  }
  return (
    <div className={styles.widgetBg}>
      <h3 className={styles.title}>Latest Transactions</h3>
      <table className={styles.transactions}>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr className={styles.profileDetails}>
          <td className={styles.profile}>
            <img src={profile} alt="profileImg" className={styles.profileImg}/>
            <span className={styles.profileName}>Bhaskar Das</span>
          </td>
          <td className={styles.date}>13 Nov 1999</td>
          <td className={styles.value}>$499.50</td>
          <td><Button type="Approved"/></td>
        </tr>
        <tr className={styles.profileDetails}>
          <td className={styles.profile}>
            <img src={profile} alt="profileImg" className={styles.profileImg}/>
            <span className={styles.profileName}>Bhaskar Das</span>
          </td>
          <td className={styles.date}>13 Nov 1999</td>
          <td className={styles.value}>$499.50</td>
          <td><Button type="Pending"/></td>
        </tr>
        <tr className={styles.profileDetails}>
          <td className={styles.profile}>
            <img src={profile} alt="profileImg" className={styles.profileImg}/>
            <span className={styles.profileName}>Bhaskar Das</span>
          </td>
          <td className={styles.date}>13 Nov 1999</td>
          <td className={styles.value}>$499.50</td>
          <td><Button type="Declined"/></td>
        </tr>
      </table>
    </div>
  )
}
