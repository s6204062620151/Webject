import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../CSS/category.module.css';
import { useNavigate } from 'react-router-dom';

function Hoddie() {
  const [valueproducts, setValueproducts] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/getproduct', {
        type: "Hoddie"
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
          <div className={style.categoryname}>{product.name}</div>
          {/* <div>{product.price}</div> */}
        </div>
      ))}
    </div>
  )
}

export default Hoddie