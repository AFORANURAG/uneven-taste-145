import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import DoctorCard from './components/doctoreprofilecomp';
import AppointmentCard from './components/appointmentshowforDoctor';
import Navbar from './components/nav';
// import Dashboard from './components/apointmentDashborde';

import './css/nav.css';
import Allapointment from './components/allapointment';
function App() {
  const [email,setEmail]=React.usestate("")
  const [data,setData]=React.useState([])
  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:8080/Appointment/doctor/${email}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem(token)}`
        }
      });
      const newActualData = await res.json();
      setData(newActualData);
      console.log(newActualData)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [email]);



  return (
    <div className="app">
      <Navbar />
      <DoctorCard
        name="Dr. John Doe"
        specialization="Cardiologist"
        availability="Available Monday to Friday"
        qualifications="MBBS, MD"
        experience={10}
        image="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=740&t=st=1677208704~exp=1677209304~hmac=5391f7bc5581ec231a299dac1e381ed4a508f93b382bdebc05a211fff38941d1"
        rating={4.5}
      />

      <Allapointment id={1} token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYW5la2lzaG9yMDYxMkBnbWFpbC5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTY3NzIzMzg1OSwiZXhwIjoxNjc3MzIwMjU5fQ.FuSqZwJKPlkhVQekcbQJhE9dPvS7N-bQAgv62w-hYuY"} />
      <div className='AppointmentCard-container'>

      </div>
    </div>


  );

}

export default App;





