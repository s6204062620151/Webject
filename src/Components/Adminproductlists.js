import React, { useEffect, useState } from 'react';
import { Table,Button } from 'antd';
import axios from 'axios';
import './CSS/Admin.css'


const Adminproductlists = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/productlists')
      .then((response) => {
        setData(response.data);     // Update the data state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (productid) => {

  }
  
  const columns = [
      {
        title: 'id',
        dataIndex: 'productid',
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Category',
        dataIndex: 'category',
      },
      {
        title: 'Size',
        dataIndex: 'size',
      },
      {
        title: 'Color',
        dataIndex: 'color'
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
  
        render: (text,record)=>(
          <div>
            <Button type="primary" onClick={() => handleDelete(record.productid)} danger>Delete</Button>
          </div>
        )
      }
      // {
      //   title: 'Address',
      //   dataIndex: 'address',
      //   filters: [
      //     {
      //       text: 'London',
      //       value: 'London',
      //     },
      //     {
      //       text: 'New York',
      //       value: 'New York',
      //     },
      //   ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
      // },
    ];
    

  return (
    <div className='content'>
      <div className='incontent'>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  )
}

export default Adminproductlists