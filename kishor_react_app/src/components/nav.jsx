import React from 'react';
import logo from '../logo/Medical Care.png';
import '../css/nav.css';

function Navbar() {
  return (
    <div className='nav'>
      <div className="navbar-brand">
        <img src={logo} className="navbar-logo" alt="Logo" />
        <h1 href="/" className="navbar-name">Ayuva</h1>
      </div>
      <div className="navbar-nav">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
      </div>
    </div>
  );
}

export default Navbar;
