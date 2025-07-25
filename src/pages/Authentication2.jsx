import React from 'react'
import '../styles/Authentication2.css';
import authenticationImage from '../assets/authentication-image.png';
import { useState } from 'react';
import UMKM from '../assets/Vector.svg';
import Company from '../assets/mdi_company.svg';
import PeopleIcon from '../assets/people.svg';

function Authentication2() {
    const [selectedRole, setSelectedRole] = useState('');

    const roles = [
        { value: 'company', label: 'Company', icon: Company },
        { value: 'umkm', label: 'UMKM', icon:UMKM},
        { value: 'community', label: 'Community', icon: PeopleIcon }
    ];


  return (
    <div className="authentication2-page">
            <div className="left-panel">
                <img src={authenticationImage} alt="Authentication" className="auth-image" />
            </div>
    
            <div className="right-panel">
                <div className="stepper">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '50%' }}></div>
                    </div>
                    <div className="steps">
                        <div className={`step ${true ? 'active' : ''}`}>Choose your Role</div>
                        <div className={`step ${false ? 'active' : ''}`}>Fill Out the Identity</div>
                    </div>
                </div>

                <h1>Welcome !</h1>
    
                <div className="login-box">
                    <form className="login-form">
                        <label htmlFor="company">What's your role? </label>
                        
                        <div className="role-selector">
                            {roles.map((role) => (
                                <label
                                key={role.value}
                                className={`role-card ${selectedRole === role.value ? 'selected' : ''}`}
                                >
                                <input
                                    type="radio"
                                    name="role"
                                    value={role.value}
                                    checked={selectedRole === role.value}
                                    onChange={() => setSelectedRole(role.value)}
                                />
                                <img src={role.icon} alt={role.label} className="role-icon" />
                                <span>{role.label}</span>
                                </label>
                            ))}
                        </div>

                        <p className="register">Already have account? <a href="/authentication2" className='create-account'>Log in</a></p>
                        <button type="submit" className="login-button" >Next </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Authentication2
