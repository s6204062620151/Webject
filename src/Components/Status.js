import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './CSS/status.module.css';

function Status() {

  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const cartresponse = await axios.post('http://localhost:3001/user_product', 
      { userid: userresponse.data.user.userid });
      // console.log(userresponse.data.user.userid);
      // console.log(cartresponse.data);
      setCarts(cartresponse.data);
    }catch (error) {
      console.log(error);
    }
  }

  const showproduct = async (cartid) => {
    try {
      const response = await axios.post('http://localhost:3001/reqproductincart', { cartid: cartid });
      // console.log(response.data)
      setProducts(response.data);
    }
    catch(error){
      console.log(error);
    }
    // console.log(products)
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(categories);

  return (
    <div className={style.container}>
      <div className={style.cartTable}>
        <div className={style.header}>All Cart.<hr/></div>
        <table>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Show product</th>
          </tr>
          {carts.map((cart, index) => (
          <tr key={index}>
            <td>{cart.cartid}</td>
            <td>{cart.payment_status}</td>
            <td><button onClick={() => showproduct(cart.cartid)}>Show</button></td>
          </tr>
          ))}
        </table>
      </div>

      <div className={style.productTable}>
        <div className={style.header}>Product In Cart.<hr/></div>
        <table>
          <tr>
            <th>ProductId</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>Total_price</th>
          </tr>
          {products.map((product, index) => (
          <tr key={index}>
            <td>{product.productid}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.totalprice+' $'}</td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Status