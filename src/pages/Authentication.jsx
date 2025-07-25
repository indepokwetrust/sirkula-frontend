import React from 'react'
import '../styles/Authentication.css';
import authenticationImage from '../assets/authentication-image.png';

function Authentication() {
  return (
    <div className="authentication-page">
        <div className="left-panel">
            <img src={authenticationImage} alt="Authentication" className="auth-image" />
        </div>

        <div className="right-panel">
            <h1>Welcome Back!</h1>

            <div className="login-box">
                <form className="login-form">
                    <label for="company">Name of Company / Community<span className="required">*</span></label>
                    <input type="text" id="company" placeholder="Type Here" className="fill" required/>

                    <label for="password">Password<span className="required">*</span></label>
                    <div className="password-wrapper">
                        <input type="password" id="password" placeholder="Password" className="fill" required />
                        <span className="toggle-password">👁️</span>
                    </div>

                    <p className="register">Not Registered yet? <a href="#">Create an Account</a></p>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
</div>
    
  )
}

export default Authentication
