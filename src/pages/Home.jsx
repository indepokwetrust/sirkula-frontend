import React from 'react'
import Navbar from '../section/Navbar'
import '../styles/Home.css'
import laptop from '../assets/laptop.png';

function Home() {
  return (
    <div className='main-container'>
      <Navbar />

      <div className="background">
        <div className="blur-ellipse ellipse-1"></div>
        <div className="blur-ellipse ellipse-2"></div>
      
        {/* Content goes here */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '200px' }}>
          <h1>Hello, World!</h1>
          <p>This is a blurred ellipse background.</p>
        </div>

        <div className='img-laptop'>
          <img src={laptop} alt="gambar-laptop" />
        </div>
      </div>

      <div className="background2">
        <div className="blur-ellipse ellipse-1"></div>
        <div className="blur-ellipse ellipse-2"></div>
      
        {/* Content goes here */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '200px' }}>
          <h1>Hello, World!</h1>
          <p>This is a blurred ellipse background.</p>
        </div>
    </div>
      
    </div>
  )
}

export default Home