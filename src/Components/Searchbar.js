import React from 'react';
import style from './CSS/searchbar.module.css';

function Searchbar() {
  return (
    <div> 
        <div className={style.container}>
        <img src='./Image/logo.jpg' className={style.logo}></img>
            <div className={style.inputSearch}>
                <input/>
                <button>SEARCH</button>
            </div>
        </div>
    </div>
  )
}
export default Searchbar