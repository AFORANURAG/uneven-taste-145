import React from 'react';
import logo from '../logo/Medical Care.png';
import '../css/nav.css';
import {Link} from "react-router-dom"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function Navbar() {
let [doctordetails,setDoctorDetail]=useState(()=>{
return JSON.parse(localStorage.getItem("doctordetails"))
})

function logout(){
    localStorage.removeItem('doctordetails');
    setDoctorDetail("")
    window.location.reload();
  }
  return (
    <div className='nav'>
      <div className="navbar-brand">
        <img src={logo} className="navbar-logo" alt="Logo" />
        <h1 href="/" className="navbar-name">Ayuva</h1>
      </div>
      <div className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        
        {doctordetails?<>
          <button  onClick={logout} className="nav-link">Logout</button>
          <li className="nav-item"><Link to="/doctorprofile" className="nav-link">doctorprofile</Link></li>

          <li className="nav-item"><Link to="/allappointments" className="nav-link">allappointments</Link></li>
          </>:<>
          <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
          
          </>}
        <li className="nav-item">
        
        
        </li>
      </div>
    </div>
  );
}

export default Navbar;
