import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './CSS/shopdetail.module.css';

function Shopdetail() {
  const [productselected, setProductselected] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getproductSelected');
      // console.log(response.data[0]);
      setProductselected(response.data)
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(productselected);

  const postProduct = async (productid) => {
    try{
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const carttresponse = await axios.post('http://localhost:3001/postproductid',
      { productid: productid , email: userresponse.data.user.email });
    }
    catch(error){
      console.log(error);
    }
  }

  // const pickItcart = () =>{

  // }

  return (
    <div className={style.container}>
      {productselected.map((product, index) => (
        <div key={index} className={style.product}>
          <div className={style.productdetail}>
            <img src={'./Image/product/'+product.picture} alt={`dress Image`}/>
            <div className={style.detailes}>
              <div>{product.name}</div>
              <div>{"$ "+product.price}</div>
              <div>{"Size: "+product.size}</div>
              <div>{"Color: "+product.color}</div>
              {/* onClickfunction? */}
              <div className={style.addtocart} onClick=""> 
                Add To Cart
              </div>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.scripTitle}>Product detail</div>
            <div>{product.description}</div>
          </div>
          <div>Other May You Like</div>

          {/* add picture path */}
          <div className={style.otherproduct}>
            <div className={style.oterproduct} onClick="">
              <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`} className={style.otherproductimage} />
            </div>
            <div className={style.oterproduct} onClick="">
              <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`} className={style.otherproductimage} />
            </div>
            <div className={style.oterproduct} onClick="">
              <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`} className={style.otherproductimage} />
            </div>
            <div className={style.oterproduct} onClick="">
              <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`} className={style.otherproductimage} />
            </div>
            <div className={style.oterproduct} onClick="">
              <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`} className={style.otherproductimage} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shopdetail