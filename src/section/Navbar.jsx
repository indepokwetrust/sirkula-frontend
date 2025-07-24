import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
        <nav>
            <div className="simbol-container">
                <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
            </div>


            {/* Checkbox for toggling mobile menu visibility */}
            <input type="checkbox" id="check" />

            {/* Mobile menu toggle button */}
            <label htmlFor="check" className="checkbtn">
                {/* Hamburger menu icon from Font boxicons */}
                <i className="bx bx-menu menu-icon"></i>
            </label>

            {/* Site logo */}
            {/* <label className="logo">Sagara</label> */}
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            {/* Main navigation links */}
            <ul>
                <li>
                    <Link className={isActive('/') ? 'active' : ''} to="/">Home</Link>
                </li>
                <li>
                    <Link className={isActive('/explore') ? 'active' : ''} to="/explore">Explore</Link>
                </li>
                <li>
                    <Link className={isActive('/donate') ? 'active' : ''} to="/donate">Donate</Link>
                </li>
                <li>
                    <Link className={isActive('/profile') ? 'active' : ''} to="/profile">Profile</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar
