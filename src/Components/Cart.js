import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './CSS/cart.module.css';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const [valueproducts, setValueproducts] = useState([]);
  const [cartid, setCartid] = useState(0);
  const [page] = useState('cart');

  const getData = async() => {
    try{
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const cartresponse = await axios.post('http://localhost:3001/getcart',
      {userid: userresponse.data.user.userid});
      // console.log(cartresponse.data);
      
      if(cartresponse.data.length === 0){
        alert("Cart is Empty!");
        window.location.href = '/';
      }
      else{
        setValueproducts(cartresponse.data);
      }
      setCartid(cartresponse.data[0].cartid);
      //console.log(cartresponse.data)
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

  const navigation = useNavigate();
  const confirm = async () => {
    try{
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      window.location.href = `/ordercheck/${userresponse.data.user.userid}/${cartid}/${page}`;
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
          <thead>
            <tr>
              <th>ProductId</th>
              <th>ProductName</th>
              <th>Quantity</th>
              <th>Total_price</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
          {valueproducts.map((product, index) => (
          <tr key={index}>
            <td>{product.productid}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.totalprice+' $'}</td>
            <td>
              <div className={style.cartBtn}>
                <button onClick={() => deleteproduct(product.productid, product.id)}>DELETE</button>
              </div>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>

      <div className={style.submitbtn}>
            <button onClick={() => confirm()}>Confirm Order</button>
      </div>
    </div>
  )
}

export default Cart