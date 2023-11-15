import React from 'react'
import './Styles/LoginSignup.scss'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By checking this box, you are agreeing to our terms of service</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup