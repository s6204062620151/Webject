import { Route, Routes } from 'react-router-dom';
import style from './client.module.css';


import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar'
import Home from './Components/Home';
import Status from './Components/Status';
import Shopdetail from './Components/Shopdetail';
import Cart from './Components/Cart';
import Signin from './Components/SignIn';
import Signup from './Components/SignUp';
import Footer from './Components/Footer';
import Dress from './Components/Category/Dress';
import Pajamas from './Components/Category/Pajamas';
import Hoddie from './Components/Category/Hoddie';
import Legging from './Components/Category/Legging';
import Bag from './Components/Category/Bag';
import Clothes from './Components/Category/Clothes';
import Coat from './Components/Category/Coat';
import Hat from './Components/Category/Hat';
import Longpant from './Components/Category/Longpant';
import Pant from './Components/Category/Pant';
import Shirt from './Components/Category/Shirt';
import Sweater from './Components/Category/Sweater';
import Tshirt from './Components/Category/Tshirt';
import Searchproduct from './Components/Searchproduct';
import Ordercheck from './Components/Ordercheck';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

function Client() {
  const [role, setRole] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      setRole(response.data.user.role);
      // console.log(role)
    }catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log(role)
  return (
    <div>
      {role === "admin" ? (
        <Admin/>
      ) : (
        <div className={style.container}>
          <div className={style.searchbar}><Searchbar/></div>
          <div className={style.navbar}><Navbar/></div>
          <div className={style.content}>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/Status" Component={Status}/>
              <Route path="/Cart" Component={Cart}/>
              <Route path="/Signin" Component={Signin}/>
              <Route path="/Signup" Component={Signup}/>
              <Route path="/dress" Component={Dress}/>
              <Route path="/pajamas" Component={Pajamas}/>
              <Route path="/hoddie" Component={Hoddie}/>
              <Route path="/legging" Component={Legging}/>
              <Route path="/bag" Component={Bag}/>
              <Route path="/clothes" Component={Clothes}/>
              <Route path="/coat" Component={Coat}/>
              <Route path="/hat" Component={Hat}/>
              <Route path="/long-pant" Component={Longpant}/>
              <Route path="/pant" Component={Pant}/>
              <Route path="/shirt" Component={Shirt}/>
              <Route path="/sweater" Component={Sweater}/>
              <Route path="/tshirt" Component={Tshirt}/>
              <Route path="/shopdetail/:pathproduct" Component={Shopdetail}/>
              <Route path="/searchproduct/:searchkey" Component={Searchproduct}/>
              <Route path="/ordercheck/:userid/:cartid/:from" Component={Ordercheck}/>
            </Routes>
            <div className={style.footer}><Footer/></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Client