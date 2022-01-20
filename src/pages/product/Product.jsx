import Chart from '../../components/chart/Chart';
import styles from './product.module.css';
import product from '../../img/airpod.jpg'
import {FileUpload} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Product() {
  const data = [
  {
    month: 'Jan',
    sales: 500,
  },
  {
    month: 'Feb',
    sales: 300,
  },
  {
    month: 'Mar',
    sales: 600,
  },
];
  return (
    <div className={styles.product}>
      <div className={styles.titleCreate}>
      <h1>Product</h1>
      <Link to="/newProduct">
        <button className={styles.createButton}>Create</button>
      </Link>
      </div>
      <div className={styles.salesProductDetails}>
        <div className={styles.sales}>
          <Chart title="Sales Performance" data={data} xaxis="month" datakey="sales" grid={false}/>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productImgTitle}>
            <img src={product} alt="product" className={styles.productImg}/>
            <p className={styles.productTitle}>Apple Airpod</p>
          </div>
          <div className={styles.itemDetails}>
            <p className={styles.itemTag}>id: </p>
            <span className={styles.itemTagValue}>123</span>
          </div>
          <div className={styles.itemDetails}>
            <p className={styles.itemTag}>sales: </p>
            <span className={styles.itemTagValue}>2343</span>
          </div>
          <div className={styles.itemDetails}>
            <p className={styles.itemTag}>active: </p>
            <span className={styles.itemTagValue}>yes</span>
          </div>
          <div className={styles.itemDetails}>
            <p className={styles.itemTag}>in stock: </p>
            <span className={styles.itemTagValue}>no</span>
          </div>
        </div> 
      </div>
      <div className={styles.editFormPart}>
        <div className={styles.editForm}>
          <form className={styles.form}>
            <label htmlFor="productname">Product Name</label>
            <input type="text" placeholder="Apple Airpod" name="productname" id="productname" />
            <label htmlFor="instock">In Stock</label>
            <select name="instock" id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </form>
        </div>
        <div className={styles.imgUpload}>
           <div className={styles.imageUploadSection}>
             <img src={product} alt="product" />
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
  )
}
