import styles from './topbar.module.css';
import notification from '../../img/notification.png'
import setting from '../../img/setting.png'
import language from '../../img/world.png'
import avatar from '../../img/man.png'
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';
// import MobileSidebar from '../mobileSidebar/MobileSidebar';

export default function Topbar({setMobileMenu, setIsMobile}) {
  const handleClick = () => {
    setMobileMenu(true);
    setIsMobile(true);
  }
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarLogo}>
        <Link to="/" className={styles.link}>
          iambhaskar <p style={{display: 'inline', fontSize: '1rem'}}>&lt;~ are active links&gt;</p>
        </Link>
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
          <img src={language} alt="language" className={`${styles.icon} ${styles.language}`}/>
        </div>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <button className={styles.mobileMenu} onClick={handleClick}>
          <Menu className={styles.menuIcon}/>
        </button>
      </div>
    </div>
  )
}
