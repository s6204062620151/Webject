import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CSS/Home.module.css';
import axios from 'axios';

const Home = () => {
  const [bestsellproduct, setBestsellproduct] = useState({
    name1: '', name2: '', name3: ''
  })
  const [bestproductimg, setBestproductimg] = useState({
    picture1: '', picture2: '', picture3: ''
  })

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bestSell');
      // console.log(response.data.product1);
      // console.log(response.data.product2);
      // console.log(response.data.product3);
      setBestsellproduct({
        name1: response.data.product1.name,
        name2: response.data.product3.name,
        name3: response.data.product2.name
      })
      setBestproductimg({
        picture1: response.data.product1.picture,
        picture2: response.data.product2.picture,
        picture3: response.data.product3.picture
      })
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.topSell}>
          <div className={style.bestsell}>
            <img src={'./Image/product/'+bestproductimg.picture1} alt={`${bestsellproduct.name1} Image`} className={style.img}/>            
            <div className={style.labelname}>No.1 {bestsellproduct.name1}</div>
          </div>
          <div className={style.bestsell}>
            <img src={'./Image/product/'+bestproductimg.picture2} alt={`${bestsellproduct.name2} Image`} className={style.img}/>
            <div className={style.labelname}>No.2 {bestsellproduct.name2}</div>
          </div>
          <div className={style.bestsell}>
            <img src={'./Image/product/'+bestproductimg.picture3} alt={`${bestsellproduct.name3} Image`} className={style.img}/>
            <div className={style.labelname}>No.3 {bestsellproduct.name3}</div>
          </div>
      </div>

      <div className={style.categories}>
        <div className={style.header}>Categories<hr/></div>
        <div className={style.categorybar}>
          <div className={style.categoryChoice}>
            <img src='./Image/product/dress-1.jpeg' alt={`dress Image`}/>
            <Link to="/dress">Dress</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='./Image/product/long-pant-1.jpeg' alt={`Pajamas Image`}/>
            <Link to="/pajamas">Pajamas</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/sweater-1.jpeg' alt={`Hoddie Image`}/>
            <Link to="/hoddie">Hoddie</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/long-pant-2.jpeg' alt={`Legging Image`}/>
            <Link to="/legging">Legging</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/T-shirt-3.jpeg' alt={`Category05 Image`}/>
            <Link>Category05</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/shelf-1.jpeg' alt={`Category06 Image`}/>
            <Link>Category06</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/pant-set-1.jpeg' alt={`Category07 Image`}/>
            <Link>Category07</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/dress-set-1.jpeg' alt={`Category08 Image`}/>
            <Link>Category08</Link>
          </div>
          <div className={style.categoryChoice}>
            <img src='/Image/product/coat-1.jpeg' alt={`Category09 Image`}/>
            <Link>Category09</Link>
          </div>
        </div>
      </div>
    </div>

)};

export default Home