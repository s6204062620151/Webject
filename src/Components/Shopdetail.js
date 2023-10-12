import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './CSS/shopdetail.module.css';

function Shopdetail() {
  const [productselected, setProductselected] = useState([]);
  const [totalquantity, setTotalquantity] = useState(1);

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

  const postProductcart = async (productid, price) => {
    try{
      const userresponse = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      const carttresponse = await axios.post('http://localhost:3001/postproductid',
      { productid: productid , userid: userresponse.data.user.userid , quantity: totalquantity, price: price});
      // console.log(userresponse.data.user.userid);
      console.log(carttresponse);
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div className={style.container}>
      {productselected.map((product, index) => (
        <div key={index} className={style.product}>
          <div className={style.productdetail}>
            <img src={'./Image/image/'+product.picture} alt={`dress Image`}/>
            <div className={style.detailes}>
              <div>{product.name}</div>
              <div>{"$ "+product.price}</div>
              <div>{"Size: "+product.size}</div>
              <div>{"Color: "+product.color}</div>
              <div>
                <input
                  type='number'
                  min="1"
                  max="99"
                  value={totalquantity}
                  onChange={(e) => setTotalquantity(e.target.value)}
                />
              </div>
              <div className={style.addtocart} onClick={() => postProductcart(product.productid, product.price)}> 
                Add To Cart
              </div>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.scripTitle}>Product detail<hr/></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.description}</div>
          </div>
        </div>
        ))}

          <div className={style.otherproduct}>
            <div>Other May You Like<hr/></div>
              <div className={style.productall}>
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
        
      
    </div>
  )
}

export default Shopdetail