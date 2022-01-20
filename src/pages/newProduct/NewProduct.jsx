import styles from './newProduct.module.css';

export default function NewProduct() {
  return (
    <div className={styles.newProduct}>
      <h1>New Product</h1>
      <form className={styles.form}>
        <label htmlFor="imageFile">Image</label>
        <input type="file" name="imgFile" id="imgFile" />
        <label htmlFor="productname">Name</label>
        <input type="text" name="productname" id="productname" />
        <label htmlFor="stock">Stock</label>
        <input type="text" name="stock" id="stock" />
      </form>
    </div>
  )
}
