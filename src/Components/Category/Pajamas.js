import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../CSS/category.module.css';

function Pajamas() {
  const [valueproducts, setValueproducts] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/getproduct', {
        type: "Pajamas"
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
  const selectedproduct = (productid) =>{
    // console.log(productid)
    // console.log(pathproduct)
    navigation(`/shopdetail/${productid}`);
  }

  return (
    <div className={style.container}>
      {valueproducts.map((product, index) => (
        <div key={index} className={style.product} 
        onClick={() => selectedproduct(product.productid)}>
          <img src={'./Image/image/'+product.picture} alt={`dress Image`}/>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default Pajamas