import styles from './user.module.css';
import {Link} from 'react-router-dom'; 
// ! Icon Import
import {Person, DateRange, PhoneAndroid, Mail, MyLocation, FileUpload} from '@mui/icons-material';
import avatar from '../../img/man.png';
import krishna from '../../img/krishna.png';

export default function user() {
  return (
    <div className={styles.user}>
      <div className={styles.titleButton}>
        <h2 className={styles.title}>Edit User</h2>
        <Link to="/newUser">
          <button className={styles.create}>Create</button>
        </Link>
      </div>
      <div className={styles.userDisplayEdit}>
        {/* // ! User Display Are */}
        <div className={styles.displayUser}>
          <div className={styles.userMainDetails}>
            <img src={avatar} alt="avatar" />
            <div className={styles.nameProfesson}>
              <h5>Anna Becker</h5>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className={styles.accountDetails}>
            <p className={styles.accountDetailsTitle}>Account Details</p>
            <div className={styles.nameSection}>
              <Person/>
              <p className={styles.name}>annabeck99</p>
            </div>
            <div className={styles.dateSection}>
              <DateRange />
              <p className={styles.date}>10.11.1200</p>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <p className={styles.contactDetailsTitle}>Contact Details</p>
            <div className={styles.numberSection}>
              <PhoneAndroid />
              <p className={styles.phone}>+91 1234567895</p>
            </div>
            <div className={styles.emailSection}>
              <Mail />
              <p className={styles.email}>bhaskardaswork@gmail.com</p>
            </div>
            <div className={styles.locationSection}>
              <MyLocation />
              <p className={styles.location}>Nagaon, Assam, India</p>
            </div>
          </div>
        </div>
        {/* // ! Edit Form Are */}
        <div className={styles.editForm}>
          <div className={styles.editFormSection}>
            <h2>Edit</h2>
            <form className={styles.editFormPart}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder='bhaskardas090' />
              <label htmlFor="fullname">Full Name</label>
              <input type="text" name="fullname" id="fullname" placeholder='Bhaskar Das'/>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder='bhaskardaswork@gmail.com'/>
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phone" placeholder='34393849384'/>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" placeholder='Nagaon | Assam | India'/>
            </form>
          </div>
          <div className={styles.imgUpload}>
            <div className={styles.imageUploadSection}>
             <img src={krishna} alt="avatar" />
             <label htmlFor="file">
              <FileUpload />
             </label>
             <input type="file" name="file" id="file" className={styles.file}>
            </input>
            </div>
            <button className={styles.uploadButton}>Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}
