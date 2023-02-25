import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import {theme} from "./helper"
import './App.css';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard/dashboard';
import Account from './pages/Account/accout';

function App () {
  return(
    <ChakraProvider theme={theme}>
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<Dashboard/>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/profile" element={<Account/>} />
              </Routes>
          </div>
      </div>
    </Router>
    </ChakraProvider>
  )
}

export default App;