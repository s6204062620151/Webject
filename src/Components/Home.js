import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './CSS/Home.module.css';
import axios from 'axios';

const Home = () => {
  const [bestsellproduct, setBestsellproduct] = useState({
    name1: '', name2: '', name3: '', id1: '', id2: '', id3: ''
  })
  const [bestproductimg, setBestproductimg] = useState({
    picture1: '', picture2: '', picture3: ''
  })
  const [valueproducts, setValueproducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bestSell');
      // console.log(response.data.product1.productid);
      // console.log(response.data.product2);
      // console.log(response.data.product3);
      setBestsellproduct({
        name1: response.data.product1.name,
        name2: response.data.product2.name,
        name3: response.data.product3.name,
        id1: response.data.product1.productid,
        id2: response.data.product2.productid,
        id3: response.data.product3.productid
      })
      setBestproductimg({
        picture1: response.data.product1.picture,
        picture2: response.data.product2.picture,
        picture3: response.data.product3.picture
      })
      // console.log(response)

      const getproductres = await axios.get('http://localhost:3001/getAllproduct');
      setValueproducts(getproductres.data);
    }catch (error) {
      console.error(error);
    }
  }

  const navigation = useNavigate();
  const selectedproduct = async (productid) =>{
    try{
      const response = await axios.post('http://localhost:3001/selectedProduct', {
        productid:  productid
      })
      navigation('/shopdetail');
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(valueproducts);

  const categorydress = () =>{
    navigation('/dress');
  }
  const categorypajamas = () =>{
    navigation('/pajamas');
  }
  const categoryhoddie = () =>{
    navigation('/hoddie');
  }
  const categorylegging = () =>{
    navigation('/legging');
  }


  return (
    <div className={style.container}>
      <div className={style.topSell}>
          <div className={style.bestsell} onClick={() => selectedproduct(bestsellproduct.id1)}>
            <img src={'./Image/image/'+bestproductimg.picture1} alt={`${bestsellproduct.name1} Image`} className={style.img}/>            
            <div className={style.labelname}>No.1 {bestsellproduct.name1}</div>
          </div>
          <div className={style.bestsell} onClick={() => selectedproduct(bestsellproduct.id2)}>
            <img src={'./Image/image/'+bestproductimg.picture2} alt={`${bestsellproduct.name2} Image`} className={style.img}/>
            <div className={style.labelname}>No.2 {bestsellproduct.name2}</div>
          </div>
          <div className={style.bestsell} onClick={() => selectedproduct(bestsellproduct.id3)}>
            <img src={'./Image/image/'+bestproductimg.picture3} alt={`${bestsellproduct.name3} Image`} className={style.img}/>
            <div className={style.labelname}>No.3 {bestsellproduct.name3}</div>
          </div>
      </div>

      <div className={style.categories}>
        <div className={style.header}>Categories<hr/></div>
        <div className={style.categorybar}>
          <div className={style.categoryChoice} onClick={categorydress}>
            <img src='./Image/image/dress/dress-1.jpeg' alt={`dress Image`}/>
            <div>Dress</div>
          </div>
          <div className={style.categoryChoice} onClick={categorypajamas}>
            <img src='./Image/image/long pant/long-pant-1.jpeg' alt={`Pajamas Image`}/>
            <div>Pajamas</div>
          </div>
          <div className={style.categoryChoice} onClick={categoryhoddie}>
            <img src='/Image/image/hoodie set/hoodie-set-1.jpeg' alt={`Hoddie Image`}/>
            <div>Hoddie</div>
          </div>
          <div className={style.categoryChoice} onClick={categorylegging}>
            <img src='/Image/image/long pant/long-pant-2.jpeg' alt={`Legging Image`}/>
            <div>Legging</div>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/image/t-shirt/T-shirt-3.jpeg' alt={`Category05 Image`}/>
            <div>Category05</div>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/image/sweater/sweater-1.jpeg' alt={`Category06 Image`}/>
            <div>Category06</div>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/image/pant/pant-1.jpeg' alt={`Category07 Image`}/>
            <div>Category07</div>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/image/clothes set/clothes-set-1.jpg' alt={`Category08 Image`}/>
            <div>Category08</div>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/image/coat/coat-1.jpeg' alt={`Category09 Image`}/>
            <div>Category09</div>
          </div>
        </div>
      </div>

      <div className={style.containerProduct}>
        <div className={style.header}>Products<hr/></div>
        <div className={style.showProduct}>
          {valueproducts.map((product, index) => (
            <div key={index} className={style.product}
            onClick={() => selectedproduct(product.productid)}>
              <img src={'./Image/image/'+product.picture} alt={`Product Image`}/>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>
      </div>

    </div>

)};

export default Home