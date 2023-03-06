import React,{createContext, useState} from 'react'

 let Usercontext=createContext()

function Usercontextprovider({children}) {
console.log({children})

const [userinfo,setuserInfo]=useState({firstName:"",lastName:"", dob:""})
const [user,setUser]=useState({password:"",email:""})

const [email,setEmail] = useState(()=>{
    const params = new URLSearchParams(window.location.search);
    const email =params.get("email");
    if(email){
      localStorage.setItem("email",email)
    }
    return localStorage.getItem("email")||"anuragupadhyay172912313@gmail.com"
  })
  
  const [name,setName]  = useState(()=>{
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
  if( name){
    localStorage.setItem("name",name)
  }
  return localStorage.getItem("name")
  })
  
  const [role,setRole] = useState(()=>{
    localStorage.setItem("role","Patient");
  return localStorage.getItem("role");
  })

  const [picture,setPicture] = useState(()=>{
  const params = new URLSearchParams(window.location.search);
  const picture = params.get("picture");
  if(picture){
    localStorage.setItem("picture",picture)
  }
  return localStorage.getItem("picture");
  })
  
const [token,setToken] = useState(()=>{
const params = new URLSearchParams(window.location.search);
let  token = params.get("token");

if(token==null||token==undefined){

}else {
  localStorage.setItem("token",token);
}
  // localStorage.removeItem()
  return localStorage.getItem("token");
  })

const [lastname,setLastName]=useState("")
return (
    <Usercontext.Provider value={{token,setToken,userinfo,setuserInfo,user,picture,setPicture,setUser,role,setRole,name,setName,email,setEmail,lastname,setLastName}}>
    {children} 
    </Usercontext.Provider>
)
}
export {Usercontext,Usercontextprovider}