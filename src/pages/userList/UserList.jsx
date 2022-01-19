import styles from './userList.module.css';
import { DataGrid } from '@mui/x-data-grid';
import avatar from '../../img/man.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'username', headerName: 'User Name', width: 230, renderCell: (params) => {
    return(
      <div className={styles.username}>
        <img src={avatar} alt="avatar" />
        {params.row.username}

      </div>
    )
  } },
  { field: 'email', headerName: 'Email', width: 230 },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
  },
  {
    field: 'transactions',
    headerName: 'Transactions',
    width: 180,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    renderCell: (params) => {
      return(
        <div className={styles.buttons}>
          <Link to={`/user/${params.row.id}`}>
            <button className={styles.edit}>Edit</button>
          </Link>
          <button className={styles.delete} onClick={()=>handleDelete(params.row.id)}>Delete</button>
        </div>
      )
    }
  }
];

const rows = [
  { id: 1, username: 'Bnow Das', email: 'Jon@gmail.com', status: 'active', transactions: 6000, imgUrl: {avatar}},
  { id: 2, username: 'Lannister Choudhury', email: 'Cersei@gmail.com', status: 'active', transactions: 3000, imgUrl: {avatar} },
  { id: 3, username: 'Lannister Doe', email: 'Jaime@gmail.com', status: 'active', transactions: 2000, imgUrl: {avatar} },
  { id: 4, username: 'Tony Stark', email: 'Arya@gmail.com', status: 'active', transactions: 5000, imgUrl: {avatar} },
  { id: 5, username: 'Targaryen Saha', email: 'Daenerys@gmail.com', status: 'active', transactions: 7000, imgUrl: {avatar} },
  { id: 6, username: 'Melisandre Mendela', email: 'Das@gmail.com', status: 'active', transactions: 2000, imgUrl: {avatar} },
  { id: 7, username: 'Clifford Kingston', email: 'Ferrara@gmail.com', status: 'active', transactions: 7000, imgUrl: {avatar} },
  { id: 8, username: 'Frances Paris', email: 'Rossini@gmail.com', status: 'active', transactions: 2000, imgUrl: {avatar} },
  { id: 9, username: 'Roxie Rudis', email: 'Harvey@gmail.com', status: 'active', transactions: 1000, imgUrl: {avatar} },
];

  const [data, setData] = useState(rows);


  const handleDelete = (id) => {
  setData(prevData => prevData.filter(item => item.id !== id));
}
  return (
    <div className={styles.userList}>
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
