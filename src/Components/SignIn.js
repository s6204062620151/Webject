import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CSS/signin.module.css';
import axios from 'axios'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  axios.defaults.withCredentials = true;
  const SignIn = async (e) =>{
    e.preventDefault();
    
    try{
      const response = await axios.post('http://localhost:3001/signin', {
        email: email,
        password: password
      })
      // console.log(response.data.token);
      // console.log(response.data.exp);
      if(response.data.message === "SignIn Successful!"){
        //console.log(1)
        //localStorage.setItem('token', response.data.token);
        //console.log(2)
        alert(response.data.message);
      }
      else{
        alert(response.data.message);
        setMessage(response.data.message);
      }
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className={style.container}>
      <label className={style.title}>Sign In</label>
      <form className={style.inputForm}>
        <div className={style.inputemail}>
          {/* <label>Email : </label> */}
          <div className={style.emailInput}>
            <input
              placeholder='Email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
        </div>
        <div className={style.inputpassword}>
          {/* <label>Password : </label> */}
          <div className={style.passwordInput}>
            <input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>{message}</div>
            <button className={style.signinbtn} onClick={SignIn}>Sign in</button>
      </form><br/>
      <div className={style.signupref}>
        You don't have an account yet?
        <Link to="/SignUp">sign up</Link>
      </div>

    </div>
  )
}

export default SignIn