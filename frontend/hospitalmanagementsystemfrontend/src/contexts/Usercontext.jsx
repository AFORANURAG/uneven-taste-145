import React,{createContext, useState} from 'react'

 let Usercontext=createContext()

function Usercontextprovider({children}) {
console.log({children})

const [userinfo,setuserInfo]=useState({firstName:"",lastName:"", dob:""})
const [user,setUser]=useState({password:"",email:""})
const [role,setRole]=useState()
const [token,setToken]=useState("kldjlasjdlkasjkjldkaj");

return (
    <Usercontext.Provider value={{token,setToken,userinfo,setuserInfo,user,setUser,role,setRole}}>
    {children} 
    </Usercontext.Provider>
)
}

export {Usercontext,Usercontextprovider}