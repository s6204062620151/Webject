import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
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
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getUser', {withCredentials: true});
      // console.log(response.data.user.email);
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
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
          <Route path="/shopdetail" Component={Shopdetail}/>
        </Routes>
      </div>
      
      <div className={style.footer}><Footer/></div>
    </div>
  );
}

export default App;
