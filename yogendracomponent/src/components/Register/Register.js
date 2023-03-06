import React,{useEffect,useContext,useState,useRef} from 'react'
import { backendurl } from "../backendurl";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/Usercontext.context';
import axios from "axios";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Container,
    Input,
    Box,
    Heading,
    Select,
    Button
  } from '@chakra-ui/react'
export default function Register() {
const [Visible,isSetVisible]=useState(false)
const navigator = useNavigate();
const [city,setCity]=useState();
const [country,setCountry]=useState();
const [phoneNumber,setPhonenumber]=useState();
const {patientid,setPatientId}=useContext(UserContext);

const [name,setName]=useState(()=>{
  let name=localStorage.getItem("name")
  if(name){
    return name
  }
});

const [email,setEmail]=useState(()=>{
  let email=localStorage.getItem("email")
  if(email){
    return email
  }
});

const ref=useRef(null);
useEffect(()=>{
const observer=new IntersectionObserver(([entry])=>{
isSetVisible(entry.isIntersecting)
})
if(ref.current){
    observer.observe(ref.current)
}
return ()=>{
    if(ref.current){
        observer.unobserve(ref.current);
    }
}
},[])

function createpatient(){
  console.log("create patient is clicked")
  //     const { name, email, phone, dob , city, country } = req.body;
  axios.post(`${backendurl}/patient`,{
    body:{
  name,
  email,
  phone:phoneNumber,
  city,
  country
    },
    headers:{
      "Content-Type":"application/json"
  
  }
  }).then((res)=>{
   alert("successfully registered as patient")
    console.log(res)
    navigator("/")
    setPatientId(res.data.patientId)
    localStorage.setItem("patient", res.data.patientId)
  }).catch((err)=>{
    console.log(err)
  })
  }



  return (
    <Container ref={ref} className={Visible?"animate__animated animate__flipInY":""} pt={100}>
    <Heading fontFamily={"cursive"} ml={100}>Register as  A patient</Heading>
    <Container mt={100} >
    <FormControl isRequired>
    <FormLabel>
    Name
    </FormLabel>
    <Input border={"2px"} value={name}   placeholder='Name'/>
    </FormControl>
    <FormControl isRequired>
    <FormLabel>
    Email
    </FormLabel>
    <Input border={"2px"} value={email}  placeholder='email'/>
    </FormControl>
    


    <FormControl id="country" isRequired>
    <FormLabel>Country</FormLabel>
    <Select defaultValue={"India"} focusBorderColor="brand.blue" value={country} onChange={(e)=>{setCountry(e.target.value)}} placeholder="Select country">
      <option value="america" selected>
        India
      </option>
      <option value="england">England</option>
      <option value="poland">America</option>
    </Select>
  </FormControl>


    
    <FormControl id="city" isRequired> 
    <FormLabel>City</FormLabel>
    <Select defaultValue={"Delhi"} focusBorderColor="brand.blue" placeholder="Select city" value={city} onChange={(e)=>{setCity(e.target.value)}}>
      <option value="Mumbai">Mumbai</option>
      <option value="Dehli">Delhi</option>
      <option value="Banglore">Banglore</option>
      <option value="Kolkata" selected>
        Kolkata
      </option>
      <option value="Jaipur">Jaipur</option>
      <option value="Hydrabad">Hydrabad</option>
      <option value="Pune">Pune</option>
    </Select>
  </FormControl>

    <FormControl isRequired>
    <FormLabel>
    Phone Number
    </FormLabel>
    <Input maxLength={"10"} value={phoneNumber} onChange={(e)=>{setPhonenumber(e.target.value)}} border={"2px"} type={"number"} placeholder='Phone number'/>
    </FormControl>
<Button onClick={createpatient} variant={"ghost"} backgroundColor={"green.400"} mt={10} color={"black"}>Register</Button>
    </Container>
    </Container>
  )
}
