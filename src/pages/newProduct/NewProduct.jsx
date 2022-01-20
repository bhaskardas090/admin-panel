import styles from './newProduct.module.css';

export default function NewProduct() {
  return (
    <div className={styles.newProduct}>
      <h1>New Product</h1>
      <form className={styles.form}>
        <label htmlFor="imageFile">Image</label>
        <input type="file" name="imgFile" id="imgFile" className={styles.file}/>
        <label htmlFor="productname">Name</label>
        <input type="text" placeholder="apple airpod" name="productname" id="productname" className={styles.input}/>
        <label htmlFor="stock">Stock</label>
        <input type="text" placeholder="123" name="stock" id="stock" className={styles.input}/>
        <label htmlFor="active">Active</label>
        <select name="active" id="active" className={styles.input}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
      <button className={styles.createButton}>Create</button>
    </div>
  )
}
