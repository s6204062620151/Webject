import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './CSS/searchproduct.module.css'

function Searchproduct() {
  const [product, setProduct] = useState([]);
  const { searchkey } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/searchproduct/${searchkey}`);
      // console.log(response.data);
      if(response.data.length === 0){
        alert("Not found product math!");
        window.location.href = '/';
      }
      //console.log(response.data);
      setProduct(response.data);
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  //console.log(product)

  const selectedproduct = async (productid) =>{
    window.location.href = `/shopdetail/${productid}`;
  }

  return (
    <div className={style.container}>
      {product.map((product, index) => (
        <div key={index} className={style.product} onClick={() => selectedproduct(product.productid)}>
          <img src={`${process. env.PUBLIC_URL}/Image/image/${product.picture}`} alt={`Search product Image`}/>
          <div className={style.categoryname}>{product.name}</div>
          {/* <div>{product.price}</div> */}
        </div>
        ))}
    </div>
  )
}

export default Searchproduct