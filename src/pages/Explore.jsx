import React from 'react'
import Navbar from '../section/Navbar'
import '../styles/Explore.css'
import { useNavigate } from 'react-router-dom';

function Explore() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  };

  return (
    <div className='explore-container'>
        <div className='navbar-section'>
            <Navbar />
        </div>

        <header>
              <div className='title-container'>
                <h1 className='title-explore'>Explore Waste</h1>
                <button class="request-btn">My Request</button>
              </div>

              <h3 className='sub-title-explore'>Lorem ipsum dolor sit amet</h3>
              <div class="top-bar">
                <input type="text" placeholder="Search Waste" class="search-box"></input>
                <button class="filter-btn">Filter</button>
              </div>
            </header>

            <main class="card-grid">
               {/* Card (bisa kamu duplikat sebanyak yang kamu mau) */}
              <div class="waste-card">
                <h3>Name of Waste</h3>
                <p>Name of Company</p>
                <p><strong>Location</strong> <span>(distance m)</span></p>
                <p><strong>Quantity</strong></p>
                <button class="detail-btn"  onClick={handleClick} >View Detail</button>
              </div>

              <div class="waste-card">
                <h3>Name of Waste</h3>
                <p>Name of Company</p>
                <p><strong>Location</strong> <span>(distance m)</span></p>
                <p><strong>Quantity</strong></p>
                <button class="detail-btn">View Detail</button>
              </div>

              <div class="waste-card">
                <h3>Name of Waste</h3>
                <p>Name of Company</p>
                <p><strong>Location</strong> <span>(distance m)</span></p>
                <p><strong>Quantity</strong></p>
                <button class="detail-btn" >View Detail</button>
              </div>
            </main>

    </div>
  )
}

export default Explore
