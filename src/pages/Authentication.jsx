import React from 'react'
import '../styles/Authentication.css';
import authenticationImage from '../assets/authentication-image.png';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function Authentication() {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/authentication2');
    };

    const [show, setShow] = useState(false);

    const togglePassword = () => {
    setShow((prev) => !prev);
    };


  return (
    <div className="authentication-page">
        <div className="left-panel">
            <img src={authenticationImage} alt="Authentication" className="auth-image" />
        </div>

        <div className="right-panel">
            <h1>Welcome Back!</h1>

            <div className="login-box">
                <form className="login-form">
                    <label htmlFor="company">Name of Company / Community<span className="required">*</span></label>
                    <input type="text" id="company" placeholder="Type Here" className="fill" required/>

                    <label htmlFor="password">Password<span className="required">*</span></label>
                    <div className="password-wrapper">
                        <input type="password" id="password" placeholder="Password" className="fill" required />
                        <span className="toggle-password" onClick={togglePassword}>
                        {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <p className="register">Not Registered yet? <a href="/authentication2" className='create-account'>Create an Account</a></p>
                    <button type="submit" className="login-button" >Log In</button>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Authentication
