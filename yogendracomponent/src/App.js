import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import {theme} from "./helper"
import './App.css';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard/dashboard';
import Account from './pages/Account/accout';
import Departments from './components/Departments/Departments';
import Doctors from "./components/Doctors/Doctors"
import Appointment from "./components/Appointment/Appointment"
import { AppointmentContextProvider } from './contexts/Appointment.context';
import { AppointmentDetailContextProvider } from './contexts/Appointmentdetail.context';
import { useState } from 'react';
function App () {

 const [name,setname]=useState(()=>{
  const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get('name');
    if (paramValue) {
      localStorage.setItem('name', paramValue);
    }
    return localStorage.getItem('name') || '';
}) 

const [token,settoken]=useState(()=>{
  const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get('token');
    if (paramValue) {
      localStorage.setItem('token', paramValue);
    }
    return localStorage.getItem('token') || '';
}) 

const [lastname,setlastname]=useState(()=>{
const queryParams = new URLSearchParams(window.location.search);
const paramValue = queryParams.get('lastName');
    if (paramValue) {
      localStorage.setItem('lastname', paramValue);
    }
    return localStorage.getItem('lastname') || '';
}) 

const [email,setemail]=useState(()=>{
const queryParams = new URLSearchParams(window.location.search);
const paramValue = queryParams.get('email');
      if (paramValue) {
        localStorage.setItem('email', paramValue);
      }
      return localStorage.getItem('email') || '';
  }) 


  
  return(
    <ChakraProvider theme={theme}>
    <AppointmentDetailContextProvider>
    <AppointmentContextProvider>
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<Dashboard/>} />
                  <Route exact path="/appointment" element={<Appointment />} />
                  <Route exact path="/doctors" element={<Doctors/>} />
                  <Route exact path="/departments" element={<Departments />} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/profile" element={<Account/>} />
              </Routes>
          </div>
      </div>
    </Router>
    </AppointmentContextProvider>
    </AppointmentDetailContextProvider>
    </ChakraProvider>
  )
}

export default App;