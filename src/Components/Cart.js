import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './CSS/cart.module.css';

function Cart() {

  const [valueproducts, setValueproducts] = useState([]);
  const [cartid, setCartid] = useState(0);

  const getData = async() => {
    try{
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const cartresponse = await axios.post('http://localhost:3001/getcart',
      {userid: userresponse.data.user.userid});
      // console.log(cartresponse.data);
      setValueproducts(cartresponse.data);
      setCartid(cartresponse.data[0].cartid)
      // console.log(cartid)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteproduct = async(productid, id) => {
    try{
      const deleteres = await axios.post('http://localhost:3001/deleteProduct',
      { productid: productid , cartid: cartid, id:id});
      console.log(deleteres.data.message);
      alert(deleteres.data.message);
      window.location.href = '/Cart';
    }
    catch(err){
      console.log(err);
    }
  }

  // console.log(valueproducts)

  return (
    <div className={style.container}>
      <div className={style.productTable}>
        <div className={style.header}>Product In Cart {cartid}.<hr/></div>
        <table>
          <tr>
            <th>ProductId</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>Total_price</th>
            <th>DELETE</th>
          </tr>
          {valueproducts.map((product, index) => (
          <tr key={index}>
            <td>{product.productid}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.totalprice+' $'}</td>
            <td>
              <button onClick={() => deleteproduct(product.productid, product.id)}>DELETE</button>
            </td>
          </tr>
          ))}
        </table>
      </div>

      <div className={style.submitbtn}>
            <button>Confirm Order</button>
      </div>
    </div>
  )
}

export default Cart