import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';


import Signin from './Components/SignIn';
import Signup from './Components/SignUp';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Client from './Client';
import Adminhome from './Admin';
import axios from 'axios';

function App() {
  const [cookies] = useCookies(['token']);
  const isSignin = !!cookies.token;
  
  return (
    <div className={style.container}>
      <div className={style.content}>
        {isSignin ? (
            <Client/>
        ) : (
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
