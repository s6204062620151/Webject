import React from 'react'
import style from './signup.module.css';

function SignUp() {
  return (
    <div className={style.container}>
      <label>Sign up</label><br/>
      <div className={style.content}>
        <div className={style.contentleft}>
          <form className={style.inputLeft}>
            <input
              type='text'
              placeholder='Username'
            /><br/>
            <input
              type='password'
              placeholder='Password'
            /><br/>
            <input
              type='password'
              placeholder='Confirm Password'
            /><br/>
            <input
              type='text'
              placeholder='email'
            /><br/>
            <input
              type='text'
              placeholder='Phonenumber'
            /><br/>
          </form>
        </div>

        <div className={style.contentright}>
          <form className={style.inputRight}>
            <input
              type='text'
              placeholder='Name'
            /><br/>
            <input
              type='text'
              placeholder='Surname'
            /><br/>
            <input
              type='text'
              placeholder='House number'
            /><br/>
            <input
              type='text'
              placeholder='Province'
            /><br/>
            <input
              type='text'
              placeholder='City'
            /><br/>
            <input
              type='text'
              placeholder='District'
            /><br/>
            <input
              type='text'
              placeholder='Postalnumber'
            /><br/>
          </form>
        </div>
      
      </div>
      <button>Sign up</button>
    </div>
  )
}

export default SignUp