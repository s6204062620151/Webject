import React from 'react'
import style from './style.module.css'

const SignUp = () => {
  const submit = (e) => {
    e.preventDefault();
    try{
      var email = document.getElementById("signup-email").value
      var name = document.getElementById("signup-name").value
      var surname = document.getElementById("signup-surname").value
      var password = document.getElementById("signup-password").value
      var confirmpassword = document.getElementById("signup-confirmpassword").value
      var phonenumber = document.getElementById("signup-phonenumber").value
      var housenumber = document.getElementById("signup-housenumber").value
      var province = document.getElementById("signup-province").value
      var city = document.getElementById("signup-city").value
      var district = document.getElementById("signup-district").value
      var zipcode = document.getElementById("signup-zipcode").value

      var data = {
        "email": email,
        "name": name,
        "surname": surname,
        
      }
      var data = {"email" : email}
      var name ={"name" : name}
      var surname = {"surname" : surname}
      var password = {"password" : password}
      var confirmpassword = {"confirmpassword" : confirmpassword}
      var phonenumber = {"phonenumber" : phonenumber}
      var housenumber = {"housenumber" : housenumber}
      var province = {"province" : province}
      var city = {"city" : city}
      var district = {"district" : district}
      var zipcode = {"zipcode" : zipcode}
    
      console.log(data)
      console.log(name)
      console.log(surname)
      console.log(password)
      console.log(confirmpassword)
      console.log(phonenumber)
      console.log(housenumber)
      console.log(province)
      console.log(city)
      console.log(district)
      console.log(zipcode)
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
          <div className={style.signupcomponent}>
            <div>Name</div>
            <input className={style.signupinput} type="text" id="signup-name" pattern='[A-Z]{1}[a-z]+' title='' placeholder='ขึ้นต้นด้วยตัวพิมพ์ใหญ่'/>
          </div>
          <div className={style.signupcomponent}>
            <div>Email</div>
            <input className={style.signupinput} type="email" id="signup-email" pattern='[0-9a-z_]+@(gmail|hotmail|outlook)(\.com|\.co.th)' required title='' placeholder='@gmail.com' />
          </div>
          <div className={style.signupcomponent}>
            <div>Password</div>
            <input className={style.signupinput} type="password" id="signup-password" pattern='[a-z]{4}[0-9]{4}' title='' placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'/>
          </div>
          <div className={style.signupcomponent}>
            <div>House number</div>
            <input className={style.signupinput} type="text" id="signup-housenumber" pattern='^[02][0-9]{8}' placeholder='start with 02' />
          </div>
          <div className={style.signupcomponent}>
            <div>City</div>
            <input className={style.signupinput} type="text" id="signup-city"/>
          </div>
          <div className={style.signupcomponent}>
            <div>zip code</div>
            <input className={style.signupinput} type="text" id="signup-zipcode" pattern='[0-9]{4}' title='' placeholder='ตัวเลข 4 ตัว' />
          </div> 
        </div>
        <div className={style.signupcontainer}>
          <div className={style.signupcomponent}>
            <div>Surname</div>
            <input className={style.signupinput} type="text" id="signup-surname" pattern='^[A-Z]{1}[a-z]+' title='' placeholder='ขึ้นต้นด้วยตัวพิมพ์ใหญ่' />
          </div>
          <div className={style.signupcomponent}>
            <div>Phone number</div>
            <input className={style.signupinput} type="text" id="signup-phonenumber" pattern='[0-9]{10}' title='' placeholder='ตัวเลข 10 ตัว'/>
          </div>
          <div className={style.signupcomponent}>
            <div>Confirm password</div>
            <input className={style.signupinput} type="password" id="signup-confirmpassword" placeholder='a-z จำนวน 4 ตัว และตัวเลข 4 ตัว'/>
          </div>
          <div className={style.signupcomponent}>
            <div>Province</div>
            <input className={style.signupinput} type="text" id="signup-province"/>
          </div>
          <div className={style.signupcomponent}>
            <div>District</div>
            <input className={style.signupinput} type="text" id="signup-district"/>
          </div>
        </div>
      </div>
      <div className={style.btncontainer}>
        <button>SignUp</button>
      </div>
    </form>
  )
}


export default SignUp