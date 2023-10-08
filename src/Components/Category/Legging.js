import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../CSS/category.module.css';

function Legging() {
  const [valueproducts, setValueproducts] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/getproduct', {
        type: "Legging"
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

  return (
    <div className={style.container}>
      {valueproducts.map((product, index) => (
        <div key={index} className={style.product}>
          <img src={'./Image/product/'+product.picture} alt={`dress Image`}/>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Legging