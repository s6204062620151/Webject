import React from 'react'
import './Home.module.css'
import style from './style.module.css'
import bag1 from './Image/product/bag1.jpeg'


const Home = () => {
  return (
    <div>Home page
      <div>
        <section className={style.mainMenu}>
          <img src={bag1} className={style.img}></img>
        </section>
      </div>
    </div>

)};

export default Home