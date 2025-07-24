import React from 'react'
import Navbar from '../section/Navbar'
import '../styles/Home.css'
import Ellipse8 from '../assets/Ellipse8.svg';
import Ellipse7 from '../assets/Ellipse7.svg';

function Home() {
  return (
    <div className='main-container'>
      <Navbar />

      <div className="white-circle">
        <img src={Ellipse8} alt="Ellipse8" className='white-1' />
      </div>
      
    </div>
  )
}

export default Home