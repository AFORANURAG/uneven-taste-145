import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import DoctorCard from './components/doctoreprofilecomp';
import AppointmentCard from './components/appointmentshowforDoctor';
import Navbar from './components/nav';
// import Dashboard from './components/apointmentDashborde';

import './css/nav.css';
import Allapointment from './components/allapointment';
function App() {



  return (
    <div className="app">
      <Navbar />
      <DoctorCard
        name="Dr. Ramesh Gupta"
        specialization="Cardiologist"
        availability="Available Monday to Friday"
        qualifications="MBBS, MD"
        experience={10}
        image="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=740&t=st=1677208704~exp=1677209304~hmac=5391f7bc5581ec231a299dac1e381ed4a508f93b382bdebc05a211fff38941d1"
        rating={4.5}
      />

      <Allapointment id={1} token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYW5la2lzaG9yMDYxMkBnbWFpbC5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTY3NzQyMjA1MSwiZXhwIjoxNjc3NTA4NDUxfQ.c4ErvD0cI7UIbI3_78uRTz58pyVlHrREHTM-bFb3S9A"} />
      <div className='AppointmentCard-container'>

      </div>
    </div>


  );

}

export default App;





