import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CSS/navbar.module.css';
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

              <div>categories</div>
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
          </ul>
        )}
        
    </nav>
  )
}

export default Navbar