import React from 'react'
import '../styles/Authentication.css';
import authenticationImage from '../assets/authentication-image.png';

function Authentication() {
  return (
    <div class="authentication-page">
        <div class="left-panel">
            <img src={authenticationImage} alt="Authentication" className="auth-image" />
        </div>

        <div class="right-panel">
            <h1>Welcome Back!</h1>
            <form class="login-form">
                <label for="company">Name of Company / Community<span className="required">*</span></label>
                <input type="text" id="company" placeholder="Type Here" required />

                <label for="password">Password<span class="required">*</span></label>
                <div className="password-wrapper">
                <input type="password" id="password" placeholder="Password" required />
                <span className="toggle-password">👁️</span>
                </div>

                <p className="register">Not Registered yet? <a href="#">Create an Account</a></p>
                <button type="submit" class="login-button">Log In</button>

                
            </form>
        </div>
    </div>
  )
}

export default Authentication
