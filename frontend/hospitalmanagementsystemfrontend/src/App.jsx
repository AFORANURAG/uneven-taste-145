
import React from "react";
import {Box} from "@chakra-ui/react";
import {Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPasswordForm from "./components/ForgotPassword";
import {Usercontextprovider} from "./contexts/Usercontext";
import "./styles/homepage.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "./components/Homepagecomponent/Navbar"
import Doctor from "./components/Doctor"
import {Modalcontextprovider} from "./contexts/modalcontext";
import Userdashboard from "./components/Userdashboard";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react'

const theme = createTheme();
// Pass="mL5rTrVzs7"
// JWT_SECRET=AYKProject
// JWT_REFRESH_SECRET=AYKProject
function App() {
  return (
    <Box>
    <ThemeProvider theme={theme}>
    <ChakraProvider>
    <Usercontextprovider>
    <Modalcontextprovider>
    <Navbar/>  
    <Routes>
    
    <Route path="/userdashboard" element={<Userdashboard/>}/>
    <Route path="/doctordashboard" element={<Doctor/>}/>
<Route path="/" element={<Homepage/>}/>  
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/forgotpassword" element={<ForgotPasswordForm/>}/>

</Routes>
</Modalcontextprovider>
</Usercontextprovider> 
</ChakraProvider>
</ThemeProvider> 
</Box>
  )
}


export default App
