import styles from './productList.module.css';
import { DataGrid } from '@mui/x-data-grid';
import airpod from '../../img/airpod.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
  const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'product', headerName: 'Product', width: 230, renderCell: (params) => {
    return(
      <div className={styles.product}>
        <img src={airpod} alt="product" />
        {params.row.product}

      </div>
    )
  } },
  { field: 'stock', headerName: 'Stock', width: 230 },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 180,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    renderCell: (params) => {
      return(
        <div className={styles.buttons}>
          <Link to={`/product/${params.row.id}`}>
            <button className={styles.edit}>Edit</button>
          </Link>
          <button className={styles.delete} onClick={()=>handleDelete(params.row.id)}>Delete</button>
        </div>
      )
    }
  }
];

const rows = [
  { id: 1, product: 'Apple Airpod', stock: '123', status: 'active', price: 6000, imgUrl: {airpod}},
  { id: 2, product: 'Apple Airpod', stock: '123', status: 'active', price: 3000, imgUrl: {airpod} },
  { id: 3, product: 'Apple Airpod', stock: '123', status: 'active', price: 2000, imgUrl: {airpod} },
  { id: 4, product: 'Apple Airpod', stock: '123', status: 'active', price: 5000, imgUrl: {airpod} },
  { id: 5, product: 'Apple Airpod', stock: '123', status: 'active', price: 7000, imgUrl: {airpod} },
  { id: 6, product: 'Apple Airpod', stock: '123', status: 'active', price: 2000, imgUrl: {airpod} },
  { id: 7, product: 'Apple Airpod', stock: '123', status: 'active', price: 7000, imgUrl: {airpod} },
  { id: 8, product: 'Apple Airpod', stock: '123', status: 'active', price: 2000, imgUrl: {airpod} },
  { id: 9, product: 'Apple Airpod', stock: '123', status: 'active', price: 1000, imgUrl: {airpod} },
];

  const [data, setData] = useState(rows);


  const handleDelete = (id) => {
  setData(prevData => prevData.filter(item => item.id !== id));
}
  return (
    <div className={styles.productList}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
