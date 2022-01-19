import styles from './sidebar.module.css'
// ! Icon Image Import
import home from '../../img/home.png'
import analytics from '../../img/analytics.png'
import sales from '../../img/sales.png'
import users from '../../img/users.png'
import products from '../../img/products.png'
import transactions from '../../img/transactions.png'
import reports from '../../img/reports.png'
import mail from '../../img/mail.png'
import feedback from '../../img/feedback.png'
import message from '../../img/message.png'
import manage from '../../img/manage.png'
// ! Library Imports
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarCategories}>
          <div className={styles.sidebarHeader}>
            Dashboard
          </div>
          <div className={styles.sidebarIconGroup}>
            <Link to="/" className={styles.link}>
              <div className={styles.sidebarIcon}>
                <img src={home} alt="" className={styles.icon}/>
                <span className={styles.iconText}>Home</span>
              </div>
            </Link>
            <div className={styles.sidebarIcon}>
              <img src={analytics} alt="" className={styles.icon}/>
              <span className={styles.iconText}>Analytics</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={sales} alt="" className={styles.icon}/>
              <span className={styles.iconText}>Sales</span>
            </div>
          </div>        
        </div>
        <div className={styles.sidebarCategories}>
          <div className={styles.sidebarHeader}>
            Quick Menu
          </div>
          <div className={styles.sidebarIconGroup}>
            <Link to="/users" className={styles.link}>
              <div className={styles.sidebarIcon}>
                <img src={users} alt="users" className={styles.icon}/>
                <span className={styles.iconText}>User</span>
              </div>
            </Link>
            <Link to="/products" className={styles.link}>
              <div className={styles.sidebarIcon}>
                <img src={products} alt="products" className={styles.icon}/>
                <span className={styles.iconText}>Products</span>
              </div>
            </Link>
            <div className={styles.sidebarIcon}>
              <img src={transactions} alt="transactions" className={styles.icon}/>
              <span className={styles.iconText}>Transactions</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={reports} alt="reports" className={styles.icon}/>
              <span className={styles.iconText}>Reports</span>
            </div>
          </div>        
        </div>
        <div className={styles.sidebarCategories}>
          <div className={styles.sidebarHeader}>
            Notificatons
          </div>
          <div className={styles.sidebarIconGroup}>
            <div className={styles.sidebarIcon}>
              <img src={mail} alt="mail" className={styles.icon}/>
              <span className={styles.iconText}>Mail</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={feedback} alt="feedback" className={styles.icon}/>
              <span className={styles.iconText}>Feedback</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={message} alt="message" className={styles.icon}/>
              <span className={styles.iconText}>Message</span>
            </div>
          </div>        
        </div>
        <div className={styles.sidebarCategories}>
          <div className={styles.sidebarHeader}>
            Staff
          </div>
          <div className={styles.sidebarIconGroup}>
            <div className={styles.sidebarIcon}>
              <img src={manage} alt="manage" className={styles.icon}/>
              <span className={styles.iconText}>Manage</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={analytics} alt="" className={styles.icon}/>
              <span className={styles.iconText}>Analytics</span>
            </div>
            <div className={styles.sidebarIcon}>
              <img src={reports} alt="reports" className={styles.icon}/>
              <span className={styles.iconText}>Reports</span>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}
