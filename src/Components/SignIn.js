import React from 'react'
import { Link } from 'react-router-dom'
import style from './signin.module.css';

function SignIn() {
  return (
    <div className={style.container}>
      <label className={style.title}>Sign In</label>
      <form className={style.inputForm}>
        <div className={style.inputemail}>
          <label>Email :</label>
          <input
            type='text'
          />
        </div>
        <div className={style.inputpassword}>
          <label>Password :</label>
          <input
            type='password'
          />
        </div>
        <button className={style.signinbtn}>Sign in</button>
      </form><br/>
      <div className={style.signupref}>
        You don't have an account yet?
        <Link to="/SignUp">sign up</Link>
      </div>

    </div>
  )
}

export default SignIn