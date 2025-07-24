import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.svg';

function Navbar() {
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
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="add-new-location">Donate</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
    </nav>
  )
}

export default Navbar
