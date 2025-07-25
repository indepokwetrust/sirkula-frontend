import React from 'react'
import '../styles/Detail.css';
import Navbar from '../section/Navbar'

function Detail() {
  return (
    <div className='detail-page'>
        <div className='navbar-section'>
            <Navbar />
        </div>

        <div className="detail-header">
            <a href="#" className="back-arrow">&larr;</a>
            <h1 className="title">View Detail</h1>
        </div>

        <div className="detail-content">
        <div className="detail-card">
            <div className="left-column">
                <h2 className="waste-type">Plastic & Paper Cup</h2>
                <div className="image-slider">
                <button class="arrow left">&lt;</button>
                <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2" alt="Waste" />
                <button className="arrow right">&gt;</button>
                </div>
                <button className="send-request">Send Request</button>
            </div>

            <div class="right-column">
                <h2 className="company-name">Sturback Coffee</h2>
                <div className="location-info">
                    <p>📍 Summarecon Mall Serpong 2, No. 245 Gading Serpong, Boulevard Street, West Pakulonan, Klapa Dua District, Tangerang Regency, Banten, Indonesia.</p>
                    <p>• 500 m</p>
                </div>

                <p className='berat-info'>🛒 1500 gram </p>

                <div className="detail-info">
                <p><strong>Disposal Date</strong>   : 23 July 2025</p>
                <p><strong>Material Composition</strong>    : Mixed plastic (PP, PET) and coated paper</p>
                <p><strong>Waste Condition</strong> : Used, some cups still contain liquid residues</p>
                <p><strong>Recyclability</strong>   : Partially recyclable (plastic cups); paper cups with coating not recyclable</p>
                </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Detail
