import styles from './user.module.css';

export default function user() {
  return (
    <div className={styles.user}>
      <div className={styles.titleButton}>
        <h2 className={styles.title}>Edit User</h2>
       <button className={styles.create}>Create</button>
      </div>
      <div className={styles.userDisplayEdit}>
        {/* // ! User Display Are */}
        <div className={styles.displayUser}>
          <p>Display User</p>
        </div>
        {/* // ! Edit Form Are */}
        <div className={styles.editForm}>
          <p>Edit Form</p>
        </div>
      </div>
    </div>
  )
}
