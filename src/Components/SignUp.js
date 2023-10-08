import React, { useState } from 'react'
import style from './CSS/signup.module.css';
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [housenumber, setHousenumber] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:3001/signup',{
        email: email,
        password: password,
        name: name+' '+surname,
        phone_number: phonenumber,
        address: housenumber+'/'+province+'/'+city+'/'+district+'/'+zipcode,
        role: 'user'
      });
      console.log(response.data.message);
      if(response.data.message === "Signup Success!"){
        setMessage(response.data.message);
      }
      else{
        setMessage("Signup failed");
      }
    }
    catch(err){
      console.log(err);
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
              value={name}
              onChange={(e) => setName(e.target.value)}/>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <div>Password</div>
            <input 
              type="password" 
              id="signup-password" 
              pattern='[a-z]{4}[0-9]{4}' 
              title='' 
              placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <div>House number</div>
            <input 
              type="text" 
              id="signup-housenumber" 
              pattern='^[0-9]{3,10}' 
              placeholder='start with 02' 
              value={housenumber}
              onChange={(e) => setHousenumber(e.target.value)}/>
          </div>
          <div>
            <div>City</div>
            <input 
              type="text" 
              id="signup-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}/>
          </div>
          <div>
            <div>zip code</div>
            <input 
              type="text" 
              id="signup-zipcode" 
              pattern='[0-9]{4}' 
              title='' 
              placeholder='ตัวเลข 4 ตัว' 
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}/>
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
              value={surname}
              onChange={(e) => setSurname(e.target.value)}/>
          </div>
          <div>
            <div>Phone number</div>
            <input 
              type="text" 
              id="signup-phonenumber" 
              pattern='[0-9]{10}' 
              title='' 
              placeholder='ตัวเลข 10 ตัว'
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}/>
          </div>
          <div>
            <div>Confirm password</div>
            <input 
              type="password" 
              id="signup-confirmpassword" 
              placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}/>
          </div>
          <div>
            <div>Province</div>
            <input 
              type="text" 
              id="signup-province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}/>
          </div>
          <div>
            <div>District</div>
            <input 
              type="text" 
              id="signup-district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className={style.btncontainer}>
        <button type='submit'>SignUp</button>
      </div>

      <div className={style.message}>{message}</div>
    </form>
  )
}

export default SignUp