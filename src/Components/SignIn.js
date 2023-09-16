import React from 'react'
import style from './style.css'

function SignIn() {
  return (
    <div>
      <form id='signin'>
        <label>SignIn</label>
        <label>Username</label>
        <input type="text" id="username" placeholder='@email.com'/>
        <label>Password</label>
        <input type="password" id="password"/>

        <input type="submit" id="submit"/>
      </form>
    </div>
  )
}

export default SignIn