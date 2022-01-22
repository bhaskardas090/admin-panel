import styles from './mobileSidebar.module.css';
// import {Menu} from '@mui/icons-material';
import Sidebar from '../sidebar/Sidebar';

export default function MobileSidebar({setIsMobile, setMobileMenu}) {
  return (
  <div className={styles.mobilemenu}>
    <Sidebar setIsMobile={setIsMobile} setMobileMenu={setMobileMenu}/>
  </div>
  );
}
