import React from 'react'
import Navbar from '../section/Navbar'
import '../styles/MyRequest.css';

function MyRequest() {
  return (
    <div>
        <div className='navbar-section'>
            <Navbar />
        </div>

        <div className='request-header'>
            <header className="header">
                <a href="#" className="back-arrow">←</a>
                <h1>My Request</h1>
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

            <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Waste</th>
                    <th>Request Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Sturback Coffee</td>
                    <td>Plastic & Paper Cup</td>
                    <td>24 July 2024</td>
                    <td><a href="#" className="status-link pending">Pending</a></td>
                </tr>
                <tr>
                    <td>Sturback Coffee</td>
                    <td>Plastic & Paper Cup</td>
                    <td>24 July 2024</td>
                    <td><a href="#" className="status-link in-progress">In Progress</a></td>
                </tr>
                <tr>
                    <td>Sturback Coffee</td>
                    <td>Plastic & Paper Cup</td>
                    <td>24 July 2024</td>
                    <td><a href="#" className="status-link accepted">Accepted</a></td>
                </tr>
                <tr>
                    <td>Sturback Coffee</td>
                    <td>Plastic & Paper Cup</td>
                    <td>24 July 2024</td>
                    <td><a href="#" className="status-link rejected">Rejected</a></td>
                </tr>
                </tbody>
            </table>
            <div className="footer-date">24 July 2024</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyRequest
