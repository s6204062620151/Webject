import React, { useState } from 'react'
import style from './signup.module.css';

const SignUp = () => {
  const [inputName, setinputName] = useState('')
  const [inputSurname, setinputSurname] = useState('')
  const [inputEmail, setinputEmail] = useState('')
  const [inputPhone, setinputPhone] = useState('')
  const [inputPassword, setinputPassword] = useState('')
  const [inputCPassword, setinputCPassword] = useState('')
  const [inputHousenumber, setinputHousenumber] = useState('')
  const [inputProvince, setinputProvince] = useState('')
  const [inputCity, setinputCity] = useState('')
  const [inputDistrict, setinputDistrict] = useState('')
  const [inputZipcode, setinputZipcode] = useState('')

  const submit = async (e) => {
    e.preventDefault();

    var password
    if(inputPassword===inputCPassword){
      password = inputPassword
    }

    const inputData = {
      "name": inputName+' '+inputSurname,
      "email": inputEmail,
      "password": password,
      "phone_number": inputPhone,
      "address": inputHousenumber+'/'+inputProvince+'/'+inputCity+'/'+inputDistrict+'/'+inputZipcode,
    }
    // console.log(inputData)
    try{
      const response = await fetch('http://127.0.0.1:8000/api/signuppost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log('Data sent successfully');
      } else {
        console.log(response.text())
        // Handle errors, e.g., show an error message to the user
        console.error('Error sending data');
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <form id='signup' className={style.signupform} onSubmit={submit}>
      <div className={style.signuptopic}>SignUp</div>
      <div className={style.signup}>
        <div className={style.signupcontainer}>
          <div>
            <div>Name</div>
            <input 
              type="text" 
              id="signup-name" 
              pattern='[A-Z]{1}[a-z]+' 
              title=''
              placeholder='ขึ้นต้นด้วยตัวพิมพ์ใหญ่'
              required
              value={inputName}
              onChange={(e) => setinputName(e.target.value)}/>
          </div>
          <div>
            <div>Email</div>
            <input 
              type="email" 
              id="signup-email" 
              pattern='[0-9a-z_]+@(gmail|hotmail|outlook)(\.com|\.co.th)' 
              title='' 
              placeholder='@gmail.com'
              required 
              value={inputEmail}
              onChange={(e) => setinputEmail(e.target.value)}/>
          </div>
          <div>
            <div>Password</div>
            <input 
              type="password" 
              id="signup-password" 
              pattern='[a-z]{4}[0-9]{4}' 
              title='' 
              placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'
              value={inputPassword}
              onChange={(e) => setinputPassword(e.target.value)}/>
          </div>
          <div>
            <div>House number</div>
            <input 
              type="text" 
              id="signup-housenumber" 
              pattern='^[02][0-9]{3}' 
              placeholder='start with 02' 
              value={inputHousenumber}
              onChange={(e) => setinputHousenumber(e.target.value)}/>
          </div>
          <div>
            <div>City</div>
            <input 
              type="text" 
              id="signup-city"
              value={inputCity}
              onChange={(e) => setinputCity(e.target.value)}/>
          </div>
          <div>
            <div>zip code</div>
            <input 
              type="text" 
              id="signup-zipcode" 
              pattern='[0-9]{4}' 
              title='' 
              placeholder='ตัวเลข 4 ตัว' 
              value={inputZipcode}
              onChange={(e) => setinputZipcode(e.target.value)}/>
          </div> 
        </div>
        <div className={style.signupcontainer}>
          <div>
            <div>Surname</div>
            <input 
              type="text" 
              id="signup-surname" 
              pattern='^[A-Z]{1}[a-z]+' 
              title='' 
              placeholder='ขึ้นต้นด้วยตัวพิมพ์ใหญ่' 
              value={inputSurname}
              onChange={(e) => setinputSurname(e.target.value)}/>
          </div>
          <div>
            <div>Phone number</div>
            <input 
              type="text" 
              id="signup-phonenumber" 
              pattern='[0-9]{10}' 
              title='' 
              placeholder='ตัวเลข 10 ตัว'
              value={inputPhone}
              onChange={(e) => setinputPhone(e.target.value)}/>
          </div>
          <div>
            <div>Confirm password</div>
            <input 
              type="password" 
              id="signup-confirmpassword" 
              placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'
              value={inputCPassword}
              onChange={(e) => setinputCPassword(e.target.value)}/>
          </div>
          <div>
            <div>Province</div>
            <input 
              type="text" 
              id="signup-province"
              value={inputProvince}
              onChange={(e) => setinputProvince(e.target.value)}/>
          </div>
          <div>
            <div>District</div>
            <input 
              type="text" 
              id="signup-district"
              value={inputDistrict}
              onChange={(e) => setinputDistrict(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className={style.btncontainer}>
        <button type='submit'>SignUp</button>
      </div>

      <div></div>
    </form>
  )
}


export default SignUp