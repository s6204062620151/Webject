import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import logo from './Image/logo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav>
        <ul className={style.Navmenu}>
            <li className={style.categoryMenu} onClick={toggleDropdown}>
            {/* <img src={logo} className={style.img}></img> */}
                categories
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Status">Status</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
            <li><Link to="/SignIn">Sign In</Link> <Link to="/SignUp"> | Sign Up</Link></li>
        </ul>
        {isOpen && (
          <ul className={style.dropdownmenu}>
            <li><Link to="/categ1">Category1</Link></li>
            <li><Link to="/categ2">Category2</Link></li>
            <li><Link to="/categ3">Category3</Link></li>
          </ul>
        )}
    </nav>
  )
}

export default Navbar