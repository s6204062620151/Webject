import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from './CSS/footer.module.css';

function Footer() {
  return (
    <footer className={style.container}>
        <div className={style.firstcolumn}>
            <div className={style.title}>
                <div className={style.contract}>contact us</div>
                <div className={style.address}>address</div>
            </div>
            <div className={style.contractinfo}>
                <div className={style.addressinfo}> 
                    <FontAwesomeIcon icon={faLocationDot}/> 
                    Thailand
                </div>
                <div className={style.emailinfo}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    abcing.mail.com
                </div>
                <div className={style.phoneinfo}>
                    <FontAwesomeIcon icon={faPhone}/>
                    08x xxxxxxxx
                </div>
            </div>

        </div>

        <div className={style.secondcolumn}>
            <div className={style.footnav}>
                <ul className={style.navigation}>
                    <div>QUICK SHOP</div>
                    <li><Link to="/">{'>'} Home</Link></li>
                    <li><Link to="/Shop">{'>'} Shop</Link></li>
                    <li><Link to="/Shopdetail">{'>'} Shop Detail</Link></li>
                    <li><Link to="/Cart">{'>'} Shopping Cart</Link></li>
                </ul>
            </div>


        </div>

        <div className={style.thirdcolumn}>
            <div className={style.accountnav}>
                <ul className={style.navigation}>
                    <div>MY ACCOUNT</div>
                    <li><Link to="/">{'>'} Home</Link></li>
                    <li><Link to="/Shop">{'>'} Shop</Link></li>
                    <li><Link to="/Shopdetail">{'>'} Shop Detail</Link></li>
                    <li><Link to="/Cart">{'>'} Shopping Cart</Link></li>
                    <li><Link to="/">{'>'} Log Out</Link></li>
                </ul>
            </div>


        </div>

        <div className={style.forthcolumn}>
            <div className={style.title}>FOLLOW US</div>
            <div className={style.socialmedia}>
                <div>
                    <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/'>
                    <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
                <div>
                    <a href='https://www.google.com/'>
                    <FontAwesomeIcon icon={faGlobe}/>
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer