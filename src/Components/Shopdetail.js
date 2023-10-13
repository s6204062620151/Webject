import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './CSS/shopdetail.module.css';
import { useParams } from 'react-router-dom';

function Shopdetail() {
  const [productselected, setProductselected] = useState([]);
  const [totalquantity, setTotalquantity] = useState(1);
  const [recproducts, setRecproducts] = useState({
    rec1id: '', rec1picture: '',
    rec2id: '', rec2picture: '',  
    rec3id: '', rec3picture: '', 
    rec4id: '', rec4picture: '', 
    rec5id: '', rec5picture: '' 
  });
  const { pathproduct } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/getproductSelected/${pathproduct}`);
      const recproductres = await axios.get('http://localhost:3001/reccomendproduct');
      console.log(recproductres);
      // console.log(response.data[0].category);
      setProductselected(response.data[0]);
      setRecproducts({
        rec1id: recproductres.data.rec1.productid, 
        rec1picture: recproductres.data.rec1.picture,
        rec2id: recproductres.data.rec2.productid, 
        rec2picture: recproductres.data.rec2.picture,
        rec3id: recproductres.data.rec3.productid, 
        rec3picture: recproductres.data.rec3.picture,
        rec4id: recproductres.data.rec4.productid, 
        rec4picture: recproductres.data.rec4.picture,
        rec5id: recproductres.data.rec5.productid, 
        rec5picture: recproductres.data.rec5.picture,
      });
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(recproducts);

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

  const selectedproduct = async (productid) =>{
    window.location.href = `/shopdetail/${productid}`;
  }


  return (
    <div className={style.container}>
        <div className={style.product}>
          <div className={style.productdetail}>
            <img src={`${process.env.PUBLIC_URL}/Image/image/${productselected.picture}`} alt={`dress Image`}/>
            <div className={style.detailes}>
              <div>{productselected.name}</div>
              <div>{"$ "+productselected.price}</div>
              <div>{"Size: "+productselected.size}</div>
              <div>{"Color: "+productselected.color}</div>
              <div>
                <input
                  type='number'
                  min="1"
                  max="99"
                  value={totalquantity}
                  onChange={(e) => setTotalquantity(e.target.value)}
                />
              </div>
              <div className={style.addtocart} onClick={() => postProductcart(productselected.productid, productselected.price)}> 
                Add To Cart
              </div>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.scripTitle}>Product detail<hr/></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{productselected.description}</div>
          </div>
        </div>

          <div className={style.otherproduct}>
            <div>Other May You Like<hr/></div>
              <div className={style.productall}>
                <div className={style.oterproduct} onClick={() => selectedproduct(recproducts.rec1id)}>
                  <img src={`${process.env.PUBLIC_URL}/Image/image/${recproducts.rec1picture}`} alt={`Pajamas Image`} className={style.otherproductimage} />
                </div>
                <div className={style.oterproduct} onClick={() => selectedproduct(recproducts.rec2id)}>
                  <img src={`${process.env.PUBLIC_URL}/Image/image/${recproducts.rec2picture}`} alt={`Pajamas Image`} className={style.otherproductimage} />
                </div>
                <div className={style.oterproduct} onClick={() => selectedproduct(recproducts.rec3id)}>
                  <img src={`${process.env.PUBLIC_URL}/Image/image/${recproducts.rec3picture}`} alt={`Pajamas Image`} className={style.otherproductimage} />
                </div>
                <div className={style.oterproduct} onClick={() => selectedproduct(recproducts.rec4id)}>
                  <img src={`${process.env.PUBLIC_URL}/Image/image/${recproducts.rec4picture}`} alt={`Pajamas Image`} className={style.otherproductimage} />
                </div>
                <div className={style.oterproduct} onClick={() => selectedproduct(recproducts.rec5id)}>
                  <img src={`${process.env.PUBLIC_URL}/Image/image/${recproducts.rec5picture}`} alt={`Pajamas Image`} className={style.otherproductimage} />
                </div>
              </div>
          </div>
        
      
    </div>
  )
}

export default Shopdetail