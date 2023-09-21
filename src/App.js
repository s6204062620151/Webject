import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Status from './Components/Status';
import Cart from './Components/Cart';
import Signin from './Components/SignIn';
import Signup from './Components/SignUp';
import Category1 from './Components/Category1';
import Category2 from './Components/Category2';
import Category3 from './Components/Category3';
import Footer from './Components/Footer';
import Shopdetail from './Components/Shopdetail';

function App() {
  return (
    <div className={style.container}>
      <div className={style.navbar}><Navbar/></div>
      <div className={style.content}>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/Status" Component={Status}/>
          <Route path="/Cart" Component={Cart}/>
          <Route path="/Signin" Component={Signin}/>
          <Route path="/Signup" Component={Signup}/>
          <Route path="/categ1" Component={Category1}/>
          <Route path="/categ2" Component={Category2}/>
          <Route path="/categ3" Component={Category3}/>
          <Route path="/Shopdetail" Component={Shopdetail}/>
        </Routes>
      </div>
      <div className={style.footer}><Footer/></div>
    </div>
  );
}

export default App;
