import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './CSS/searchbar.module.css';



function Searchbar() {
    const [searchkey, setSearchkey] = useState('');

    const navigation = useNavigate();
    const home = () =>{
      navigation('/');
    }
    const seach = () => {
      // console.log(searchkey);
      navigation(`/searchproduct/${searchkey}`)
    }
  return (
    <div className={style.container}> 
            <div  onClick={home}>
                <img src={`${process.env.PUBLIC_URL}/Image/logo.jpg`} className={style.logo}></img>
                </div>
                  <div className={style.inputSearch}>
                    <input 
                      placeholder="What's you looking for ?"
                      onChange={(e) => setSearchkey(e.target.value)}/>
                  <div>
                  <button onClick={seach}>SEARCH</button>
                </div> 
            </div>
    </div>
  )
}
export default Searchbar