
import React,{useEffect,useState} from "react";
import {Box} from "@chakra-ui/react";
import {Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css"
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
  // const [email,setEmail] = useState(()=>{
  //   const params = new URLSearchParams(window.location.search);
  //   const email =params.get("email");
  //   if(email){
  //     localStorage.setItem("email",email)
  //   }
  //   return localStorage.getItem("email")||"anuragupadhyay172912313@gmail.com"
  // })
  
  // const [name,setName]  = useState(()=>{
  //   const params = new URLSearchParams(window.location.search);
  //   const name = params.get("name");
  // if( name){
  //   localStorage.setItem("name",name)
  // }
  // return localStorage.getItem("name")
  // })
  
  
  // const [picture,setPicture] = useState(()=>{
  // const params = new URLSearchParams(window.location.search);
  // const picture = params.get("picture");
  // if(picture){
  //   localStorage.setItem("picture",picture)
  // }
  // return localStorage.getItem("picture");
  // })
  
  // const [token,setToken] = useState(()=>{
  // const params = new URLSearchParams(window.location.search);
  // let  token = params.get("token");
  // if (token!==null||token!==undefined){
  //   if(token==null){
  //     token = undefined
  //   }
  //   localStorage.setItem("token",token)
  // }
  // // localStorage.removeItem()
  // return localStorage.getItem("token");
  // })



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
