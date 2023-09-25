import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './signin.module.css';
import axios from 'axios'

function SignIn() {

  const [inputEmail, setinputEmail] = useState('')
  const [inputPassword, setinputPassword] = useState('')
  const [errorMessage, seterrorMessage] = useState('')

  const SignIn = async (e) =>{
    e.preventDefault();
    
    const inputData ={
      "email": inputEmail,
      "password": inputPassword,
    }
    // console.log(inputData)
    try{
      const response = await fetch('http://127.0.0.1:8000/api/signinpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      }).then(function (a) {
            return a.json(); // call the json method on the response to get JSON
        })
        .then(function (json) {
            console.log(json.message)
            seterrorMessage(json.message)
        });

      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log('Data sent successfully');
        console.log(response.data)
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error sending data');        
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.container}>
      <label className={style.title}>Sign In</label>
      <form className={style.inputForm}>
        <div className={style.inputemail}>
          <label>Email :</label>
          <input
            type='text'
            value={inputEmail}
            onChange={(e) => setinputEmail(e.target.value)}
          />
        </div>
        <div className={style.inputpassword}>
          <label>Password :</label>
          <input
            type='password'
            value={inputPassword}
            onChange={(e) => setinputPassword(e.target.value)}
          />
        </div>
        <button className={style.signinbtn} onClick={SignIn}>Sign in</button>
      </form><br/>
      <div className={style.error}>
          {errorMessage}
      </div><br/>
      <div className={style.signupref}>
        You don't have an account yet?
        <Link to="/SignUp">sign up</Link>
      </div>

    </div>
  )
}

export default SignIn