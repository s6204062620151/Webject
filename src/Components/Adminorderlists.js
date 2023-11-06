import React, { useEffect, useState } from 'react';
import { Table,Form,Button } from 'antd';
import axios from 'axios';
import './CSS/Admin.css'

const Adminorderlists = () => {

  const [data, setData] = useState([]);
  const [showpicture, setShowpicture] = useState('');

  useEffect(() => {
    fectedData();
    // console.log(data[0].payment_status)
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
  const handleShowpayment = (picture) => {
    // console.log(picture);
    setShowpicture(picture);
    if(showpicture!==''){
      setShowpicture('');
    }
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
      render: (text,record)=>(
        <div>
          {record.qr_picture !== '' ?(
            <div>
              <Button onClick={() => handleShowpayment(record.qr_picture)}>Show_Payment</Button>
              {
                showpicture !== ''?(
                <img src={'./Image/user-upload/'+showpicture} className='payment_picture'/>
                ):(null)
              }
            </div>
          ):<div>Unuploaded</div>}
        </div>
      )
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
          {record.payment_status !== 'yes' ? ( 
            <div>
              <Button type="primary" onClick={() => handleApprove(record.cartid)}>Approve</Button>
              <Button type="primary" onClick={() => handleReject(record.cartid)} danger>Reject</Button>
            </div>
          ) : <div> Approve Success! </div>}
        </div>
      )
    },
  ];
    

  return (
    <div className='content'>
      <div className='incontent'>
          <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  )
}

export default Adminorderlists