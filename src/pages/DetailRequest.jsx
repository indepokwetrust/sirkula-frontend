import React from 'react'
import Navbar from '../section/Navbar'
import '../styles/DetailRequest.css';

function DetailRequest() {
  return (
    <div>
      <div className='navbar-section'>
            <Navbar />
        </div>

        <div className='request-header'>
            <header className="header">
                <a href="#" className="back-arrow">←</a>
                <h1> Detail Request </h1>
            </header>
        </div>

        <div className="request-content">
        <div className="request-box">
            <div className="search-sort-filter">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="sort-filter">
                <button>Sort</button>
                <button>Filter</button>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default DetailRequest;
