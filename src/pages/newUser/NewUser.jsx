import styles from './newUser.module.css';

export default function NewUser() {
  return (
    <div className={styles.newUser}>
      <h2>New User</h2>
      <form className={styles.registrationForm}>
        <div className={styles.firstCol}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="bhaskardas090" name="username" id="username" className={styles.input}/>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='bhaskardaswork@gmail.com' name="email" id="email" className={styles.input}/>
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="9846416984" name="phone" id="phone" className={styles.input}/>
          <label htmlFor="gender">Gender</label>
          <div className={styles.gender}>
            <input type="radio" name="male" id="male" value="male" className={styles.radio}/>
            <p> Male </p>
            <input type="radio" name="female" id="female" value="female" className={styles.radio}/>
            <p> Female </p>
            <input type="radio" name="other" id="other" value="other" className={styles.radio}/>
            <p> Other </p>
          </div>
          <button className={styles.createButton}>Create</button>
        </div>
        <div className={styles.secondCol}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Bhaskar Das" name="fullname" id="fullname" className={styles.input}/>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password" name="password" id="password" className={styles.input}/>
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Nagaon | Assam" name="address" id="address" className={styles.input}/>
          <label htmlFor="active">Active</label>
          <select name="active" id="active" className={styles.option}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  )
}
