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
  const [simpleproducts, setSimpleproducts] = useState({
    simple1id: '', simple1picture: '',
    simple2id: '', simple2picture: '',  
    simple3id: '', simple3picture: '', 
    simple4id: '', simple4picture: '', 
    simple5id: '', simple5picture: '',
    simple6id: '', simple6picture: '' 
  });

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

      const getproductres = await axios.get('http://localhost:3001/getsimpleproduct');
      setSimpleproducts({
        simple1id: getproductres.data.simple1.productid, 
        simple1picture: getproductres.data.simple1.picture,
        simple2id: getproductres.data.simple2.productid, 
        simple2picture: getproductres.data.simple2.picture,  
        simple3id: getproductres.data.simple3.productid, 
        simple3picture: getproductres.data.simple3.picture, 
        simple4id: getproductres.data.simple4.productid, 
        simple4picture: getproductres.data.simple4.picture, 
        simple5id: getproductres.data.simple5.productid, 
        simple5picture: getproductres.data.simple5.picture,
        simple6id: getproductres.data.simple6.productid, 
        simple6picture: getproductres.data.simple6.picture 
      });
      // console.log(simpleproducts);
      // console.log(getproductres.data.simple1.productid)
    }catch (error) {
      console.error(error);
    }
  }
  // console.log(simpleproducts);
  const navigation = useNavigate();
  const selectedproduct = (productid) =>{
    // console.log(productid)
    // console.log(pathproduct)
    navigation(`/shopdetail/${productid}`);
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
  const categorybag = () =>{
    navigation('/bag');
  }
  const categoryclothes = () =>{
    navigation('/clothes');
  }
  const categorycoat = () =>{
    navigation('/coat');
  }
  const categoryhat = () =>{
    navigation('/hat');
  }
  const categorylongpant = () =>{
    navigation('/long-pant');
  }
  const categorypant = () =>{
    navigation('/pant');
  }
  const categoryshirt = () =>{
    navigation('/shirt');
  }
  const categorysweater = () =>{
    navigation('/sweater');
  }
  const categorytshirt = () =>{
    navigation('/tshirt');
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
          <div className={style.categoryChoice} onClick={categorybag}>
            <img src='/Image/image/bag/bag-1.jpeg' alt={`Bag Image`}/>
            <div>Bag</div>
          </div>
          <div className={style.categoryChoice} onClick={categoryclothes}>
            <img src='/Image/image/clothes set/clothes-set-1.jpg' alt={`Clothes Image`}/>
            <div>Clothes set</div>
          </div>
          <div className={style.categoryChoice} onClick={categorycoat}>
            <img src='/Image/image/coat/coat-1.jpeg' alt={`Coat Image`}/>
            <div>Coat</div>
          </div>
          <div className={style.categoryChoice} onClick={categoryhat}>
            <img src='/Image/image/hat/hat-1.jpeg' alt={`Hat Image`}/>
            <div>Hat</div>
          </div>
          <div className={style.categoryChoice} onClick={categorylongpant}>
            <img src='/Image/image/long pant/long-pant-1.jpeg' alt={`Long pant Image`}/>
            <div>Long pant</div>
          </div>
          <div className={style.categoryChoice} onClick={categorypant}>
            <img src='/Image/image/pant/pant-1.jpeg' alt={`Pant Image`}/>
            <div>Pant</div>
          </div>
          <div className={style.categoryChoice} onClick={categoryshirt}>
            <img src='/Image/image/shirt/shirt-1.png' alt={`Shirt Image`}/>
            <div>Shirt</div>
          </div>
          <div className={style.categoryChoice} onClick={categorysweater}>
            <img src='/Image/image/sweater/sweater-1.jpeg' alt={`Sweater Image`}/>
            <div>Sweater</div>
          </div>
          <div className={style.categoryChoice} onClick={categorytshirt}>
            <img src='/Image/image/t-shirt/T-shirt-1.png' alt={`T-shirt Image`}/>
            <div>T-shirt</div>
          </div>
        </div>
      </div>

      <div className={style.containerProduct}>
        <div className={style.header}>Products<hr/></div>
        <div className={style.showProduct}>
          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple1picture} 
              alt={`${simpleproducts.simple1id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple1id)}/>
          </div>

          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple2picture} 
              alt={`${simpleproducts.simple2id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple2id)}/>
          </div>

          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple3picture} 
              alt={`${simpleproducts.simple3id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple3id)}/>
          </div>

          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple4picture} 
              alt={`${simpleproducts.simple4id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple4id)}/>
          </div>

          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple5picture} 
              alt={`${simpleproducts.simple5id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple5id)}/>
          </div>

          <div className={style.product}>
            <img 
              src={'./Image/image/'+simpleproducts.simple6picture} 
              alt={`${simpleproducts.simple1id} Image`} 
              onClick={() => selectedproduct(simpleproducts.simple6id)}/>
          </div>
        </div>
      </div>

    </div>

)};

export default Home