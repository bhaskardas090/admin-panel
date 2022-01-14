import styles from './topbar.module.css';
import notification from '../../img/notification.png'
import setting from '../../img/setting.png'
import language from '../../img/world.png'
import avatar from '../../img/man.png'


export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarLogo}>
        iambhaskar
      </div>
      <div className={styles.topbarIcons}>
        <div className={styles.topbarIcon}>
          <img src={notification} alt="notification" className={styles.icon}/>
          <span className={styles.data}>1</span>
        </div>
        <div className={styles.topbarIcon}>
          <img src={setting} alt="setting" className={styles.icon}/>
          <span className={styles.data}>1</span>
        </div>
        <div className={styles.topbarIcon}>
          <img src={language} alt="language" className={styles.icon}/>
        </div>
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
    </div>
  )
}
