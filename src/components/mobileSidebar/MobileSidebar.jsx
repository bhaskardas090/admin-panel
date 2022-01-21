import styles from './mobileSidebar.module.css';

export default function MobileSidebar() {
  return (
  <div className={styles.mobileSidebar}>
    <button className={styles.mobileSidebarIcon}></button>
    <p>Mobile</p>
  </div>
  );
}
