import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CSS/navbar.module.css';
import Account from './Account';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faHouse } from '@fortawesome/free-solid-svg-icons'

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
              <a>categories</a>
                <div className={style.mobileMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
            </li>
            <div className={style.navlink}>
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
            </div>
        </ul>
        {isOpen && (
          <ul className={style.dropdownmenu}>
            <li><Link to="/dress">Dress</Link></li>
            <li><Link to="/pajamas">Pajamas</Link></li>
            <li><Link to="/hoddie">Hoddie</Link></li>
            <li><Link to="/legging">Legging</Link></li>
            <li><Link to="/bag">Bag</Link></li>
            <li><Link to="/clothes">Clothes set</Link></li>
            <li><Link to="/coat">Coat</Link></li>
            <li><Link to="/hat">Hat</Link></li>
            <li><Link to="/long-pant">Long pant</Link></li>
            <li><Link to="/pant">Pant</Link></li>
            <li><Link to="/shirt">Shirt</Link></li>
            <li><Link to="/sweater">Sweater</Link></li>
            <li><Link to="/tshirt">T-shirt</Link></li>
            <li></li>
          </ul>
        )}
        
    </nav>
  )
}

export default Navbar