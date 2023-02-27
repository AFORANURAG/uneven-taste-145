import React, { useState,useContext,useEffect } from "react";
import { Appointmentcontext } from "../../contexts/Appointment.context";
import { AppointmentcontextDetail } from "../../contexts/Appointmentdetail.context";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import CustomDatePicker from "./Datepicker";
const Appointment = () => {
  const [newNote, setNewNote] = useState();
  const {selectedDate,setSelectedDate}=useContext(Appointmentcontext);
  const {userinfo,setInfo}=useContext(AppointmentcontextDetail);
  const [appointmentdetail,setAppointmentDetail]=useState([]);
  const [name,setName]=useState(()=>{
    let name=localStorage.getItem("name")
    if(name){
      return name
    }
    return "anurag"
  })
  const [email,setemail]=useState(()=>{
    let email=localStorage.getItem("email")
    if(email){
      return email
    }
    return "anurag"
  })
  console.log(userinfo)
  const [paid,setPaid]=useState("paid")
  const [patientId,setPatientId]=useState(()=>{
    let patientid=localStorage.getItem("patientId")
    if(patientid){
      return patientid
    }
    return 12
  })
  

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
};

function sendtopaymentgateway(){
//send the appointments to appointment with certain details
//{ dateTime, patientName, doctorId,PaymentStatus,doctorName, patientId, note }
console.log(patientId)
axios.post("http://localhost:8080/Appointment",{
 data:{
  dateTime:selectedDate,
  patientName:name,
  doctorId:userinfo.doctorId,
  PaymentStatus:paid,
  doctorName:userinfo.name,
  patientId:patientId,
  note:newNote
 },
 headers:{
  "Content-Type":"application/json"
 }

},).then((response)=>{
  console.log(response);
  if(response){
    setAppointmentDetail(response.data.appointment)
    console.log(response.data.appointment)
    alert("appointment successfull")
    sendmail()
  }
}).catch((err)=>{
  console.log(err)
})
}
// let sent an email to the emailid
function sendmail(){
console.log(email)
axios.post("http://localhost:8080/sendemail",{
data:{
  ...appointmentdetail,
  email:email
},  
headers:{
  "Content-Type":"application/json"
}
},
).then((res)=>{
  console.log(res)
  paymentGateway()
}).catch((err)=>{
  console.log(err)
})
}

function paymentGateway(){
  console.log(email)
  axios.post("http://localhost:8080/payments",{
  data:{
    ...appointmentdetail,
    email:email,
    ...userinfo
  },  
  headers:{
    "Content-Type":"application/json"
  }
  },
  ).then((res)=>{
    console.log(res)
    window.location.href=`${res.data.link}`

  }).catch((err)=>{
    console.log(err)
  })
  }


  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Appointment Date and Time</FormLabel>
          <CustomDatePicker/>
      
        </FormControl>
        <FormControl>
          <FormLabel>Patient Name</FormLabel>
          <Input type="text" value={name} isReadOnly />
        </FormControl>
        <FormControl>
          <FormLabel>Payment Status</FormLabel>
          <Select value={paid} >
            
        <option value="Paid">Paid</option>
      

          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Doctor Name</FormLabel>
          <Input type="text" value={userinfo.name} isReadOnly />
        </FormControl>
        <FormControl>
          <FormLabel>Notes</FormLabel>
          <Textarea
            value={newNote}
            onChange={handleNoteChange}
            placeholder="Enter notes here"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={sendtopaymentgateway} isDisabled={!selectedDate}>
          Confirm Booking
        </Button>
      </Stack>
    </Box>
  );
};

export default Appointment;
