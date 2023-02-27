import React,{createContext, useState} from 'react'

 let Usercontext=createContext()

function Usercontextprovider({children}) {
console.log({children})

const [userinfo,setuserInfo]=useState({firstName:"",lastName:"", dob:""})
const [user,setUser]=useState({password:"",email:""})
const [role,setRole]=useState()
const [token,setToken]=useState("kldjlasjdlkasjkjldkaj");
const [lastname,setLastName]=useState("")
const [name,setName]=useState("")
const [email,setEmail]=useState("")
return (
    <Usercontext.Provider value={{token,setToken,userinfo,setuserInfo,user,setUser,role,setRole,name,setName,email,setEmail,lastname,setLastName}}>
    {children} 
    </Usercontext.Provider>
)
}

export {Usercontext,Usercontextprovider}