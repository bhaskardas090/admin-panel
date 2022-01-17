import styles from './widgetsm.module.css';
import profile from '../../img/man.png'
import view from '../../img/view.png'

export default function WidgetSm() {
  return (
    <div className={styles.widgetSm}>
      <h3 className={styles.title}>New Join Members</h3>
      <div className={styles.member}>
        <img src={profile} alt="profileImage" className={styles.profile}/>
        <div className={styles.userDetail}>
          <p className={styles.name}>Bhaskar Das</p>
          <span className={styles.professon}>Software Engineer</span>
        </div>
        <button className={styles.button}>
          <img src={view} alt="view" className={styles.view}/>
          Display
        </button>
      </div>
      <div className={styles.member}>
        <img src={profile} alt="profileImage" className={styles.profile}/>
        <div className={styles.userDetail}>
          <p className={styles.name}>Bhaskar Das</p>
          <span className={styles.professon}>Software Engineer</span>
        </div>
        <button className={styles.button}>
          <img src={view} alt="view" className={styles.view}/>
          Display
        </button>
      </div>
      <div className={styles.member}>
        <img src={profile} alt="profileImage" className={styles.profile}/>
        <div className={styles.userDetail}>
          <p className={styles.name}>Bhaskar Das</p>
          <span className={styles.professon}>Software Engineer</span>
        </div>
        <button className={styles.button}>
          <img src={view} alt="view" className={styles.view}/>
          Display
        </button>
      </div>
    </div>
  )
}
