import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import logo from './Image/logo.jpg'
import Account from './Account';
import { useCookies } from 'react-cookie';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(['token']);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isSignin = !!cookies.token;
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
            <div className={style.accountmanage}>
              {isSignin ? (
                <li><Account/></li>
              ) : (
              <li>
                <Link to="/Signin">Sign In</Link>
                <Link to="/Signup">| Sign Up</Link>
              </li>
              )}
            </div>
            
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