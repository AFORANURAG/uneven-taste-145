import { createContext,useEffect,useState } from "react";
import axios  from "axios";
import React from "react";
import { backendurl } from "../components/backendurl";
const UserContext = createContext()


function UserContextProvider({children}){
    const [token,settoken]=useState(()=>{
        const queryParams = new URLSearchParams(window.location.search);
          const paramValue = queryParams.get('token');
          if (paramValue) {
            localStorage.setItem('token', paramValue);
          }
          return localStorage.getItem('token') || '';
      }) 

const [patientid,setPatientId] = useState(()=>{
    let patientid=localStorage.getItem("patient")
    if(patientid){
        return patientid;
    }
   return null; 
})


const [email,setemail]=useState(()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get('email');
          if (paramValue) {
            localStorage.setItem('email', paramValue);
          }
          return localStorage.getItem('email') || '';
})


return (
<UserContext.Provider value={{patientid,setPatientId,email,setemail,token,settoken}} > {children} </UserContext.Provider>
)
}

export {UserContextProvider,UserContext}