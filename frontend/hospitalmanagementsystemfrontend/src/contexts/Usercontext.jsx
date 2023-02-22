import React,{createContext, useState} from 'react'

 let Usercontext=createContext()

  function Usercontextprovider({children}) {
const [token,setToken]=useState("kldjlasjdlkasjkjldkaj");
return (
    <Usercontext.Provider value={{token,setToken}}>
    {children} 
    </Usercontext.Provider>
)
}

export {Usercontext,Usercontextprovider}