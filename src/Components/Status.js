import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './CSS/status.module.css';

function Status() {

  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const cartresponse = await axios.post('http://localhost:3001/user_product', 
      { userid: userresponse.data.user.userid });
      // console.log(userresponse.data.user.userid);
      // console.log(cartresponse.data);
      setCategories(cartresponse.data);
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(categories);

  return (
    <div className={style.container}>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {categories.map((category, index) => (
        <tr key={index}>
          <td>{category.cartid}</td>
          <td>{category.name}</td>
          <td>{category.quantity}</td>
          <td>{category.totalprice}</td>
          <td>{category.payment_status}</td>
        </tr>
        ))}
      </table>
    </div>
  )
}

export default Status