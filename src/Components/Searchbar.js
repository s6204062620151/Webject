import React from 'react';
import style from './searchbar.module.css';

function Searchbar() {
  return (
    <div className={style.container}>
        <div>LOGO</div>
        <div className={style.inputSearch}>
            <input/>
            <button>SEARCH</button>
        </div>
    </div>
  )
}

export default Searchbar