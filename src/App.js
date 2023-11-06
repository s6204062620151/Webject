import { Route, Routes,useLocation } from 'react-router-dom';
import style from './App.module.css';
import Signin from './Components/SignIn';
import Signup from './Components/SignUp';
import { useCookies } from 'react-cookie';
import Client from './Client';

function App() {
  const [cookies] = useCookies(['token']);
  const isSignin = !!cookies.token;
  
  return (
    <div>
      {isSignin ? (
        <Client/>
      ) : (
      <div className={style.container}>
        <div className={style.title}>
          <img src="/Image/logo.jpg" className={style.logo}></img>
          <div>Doki Shop</div>
        </div>
        <div className={style.content}>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
