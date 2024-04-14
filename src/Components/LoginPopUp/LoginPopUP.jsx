import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUP = ({setShowLogin}) => {
    const[currstate,setCurrstate] = useState("Login")
  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currstate==="Login"?<></>:<input type="text" placeholder='Enter Your Name' required/>}
            <input type="email" placeholder='Enter Your Email'  required/>
            <input type="password" placeholder='Enter Your Password' required />
            </div>
        <button>{currstate==="Sign-Up"?"Create account":"Login"}</button>
        <div className="login-popup-conditions">
            <input type="checkbox" required />
            <p>By continiuing, i agree to the terms of use & privacy policy</p>

        </div>
        {currstate==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrstate("Sign-Up")}>Click Here</span> </p>
        :<p>Already have an account. <span onClick={()=>setCurrstate('Login')}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUP
