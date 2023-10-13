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

function App() {

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
          <Route path="/shopdetail/:pathproduct" Component={Shopdetail}/>
        </Routes>
      </div>
      
      <footer className={style.footer}><Footer/></footer>
    </div>
  );
}

export default App;
