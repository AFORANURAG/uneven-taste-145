import React,{useEffect,useState} from 'react'
import axios from 'axios';
import DoctorCard from "./Doctorcard"
export default function Doctors() {
// get all the doctors here
const [doctors,setdoctors]=useState()
console.log(doctors)
const [token,setToken]=useState()
const [id,setid]=useState()
console.log(id)

useEffect(()=>{
let departmentId=localStorage.getItem("departmentid");
let tokenfromlocalstorage=localStorage.getItem("token")
setToken(tokenfromlocalstorage)
setid(departmentId)

},[])

useEffect(()=>{
    if(id){
        getalldoctors(id)
    }
    
},[id])


async function getalldoctors(id){
console.log(token,id)
if(id){
    axios.get(`http://localhost:8080/doctor/Department/${id}`,{
        headers:{
          "authorization":`Bearer ${token}`
  }
  }).then((res)=>{
      console.log(res);
      setdoctors(res)
  }).catch((err)=>{
      console.log(err)
  })
}
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


}

return (
<div>
{doctors?.data.map((el)=>{
    return (
       <DoctorCard {...el}/> 
    )
})}
</div>

)
}
