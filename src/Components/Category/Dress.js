import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../CSS/category.module.css';
import { useNavigate } from 'react-router-dom';

function Dress() {
  const [valueproducts, setValueproducts] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/getproduct', {
        type: "Dress"
      });
      setValueproducts(response.data);
    }catch (error) {
      console.error(error);
    }
  }

  
  useEffect(() => {
    getData();
    
  }, []);
  //console.log(valueproducts);

  const navigation = useNavigate();
   const selectedproduct = async (productid) =>{
      try{
        const response = await axios.post('http://localhost:3001/selectedProduct', {
          productid:  productid
        })
        navigation('/shopdetail')
      }
      catch(err){
        console.log(err);
      }
   }

  return (
    <div className={style.container}>
      {valueproducts.map((product, index) => (
        <div key={index} className={style.product}
        onClick={() => selectedproduct(product.productid)}>
          <img src={'./Image/product/'+product.picture} alt={`dress Image`}/>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Dress