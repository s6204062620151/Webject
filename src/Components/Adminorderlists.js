import React, { useEffect, useState } from 'react';
import { Table,Form,Button } from 'antd';
import axios from 'axios';
import './CSS/Admin.css'

const Adminorderlists = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fectedData();
  }, []);

  const fectedData = () => {
    axios.get('http://localhost:3001/orderlists')
    .then((response) => {
      setData(response.data);     // Update the data state with fetched data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  const handleApprove = (cartid) => {
    console.log('Approve',cartid)
    const data ={
      cartid: cartid,
      status: 'yes',
    }
    axios.put('http://localhost:3001/statuschange',data)
    .then((response) => {
      console.log('Order status updated:', response);
      fectedData();
    })
    .catch((error) => {
      console.error('Error updating order status:', error);
    });
  };
  const handleReject = (cartid) => {
    console.log('Rejct',cartid)
    const data ={
      cartid: cartid,
      status: 'no',
    }
    axios.put('http://localhost:3001/statuschange',data)
    .then((response) => {
      console.log('Order status updated:', response);
      fectedData();
    })
    .catch((error) => {
      console.error('Error updating order status:', error);
    });
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'cartid',
      key: 'cartid',
    },
    {
      title: 'Picture',
      dataIndex: 'qr_picture',
      key: 'qr_picture',
    },
    {
      title: 'Date',
      dataIndex: 'upload_date',
      key: 'payment_status',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'payment_status',
      key: 'payment_status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text,record)=>(
        <div>
          <Button type="primary" onClick={() => handleApprove(record.cartid)}>Aprrove</Button>
          <Button type="primary" onClick={() => handleReject(record.cartid)} danger>Reject</Button>
        </div>
      )
    },
  ];
    

  return (
    <div className='content'>
      <div className='incontent'>
        <Form>
          <Table columns={columns} dataSource={data}/>
        </Form>
      </div>
    </div>
  )
}

export default Adminorderlists