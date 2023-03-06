// import { Chat } from '@mui/icons-material'
import React from 'react'
import ChatWindow from "../Chatbot"
import { Carousel } from 'react-responsive-carousel';
import Ayuva from "../../assets/images/Medical-Care.png"
import appointment from "../../assets/images/bookingappointment.png"
import maledoctor from "../../assets/images/doctor-male.jpg"
import femaledoctor from "../../assets/images/woman-doctor.jpg"
import { Button } from '@mui/material';



export default function Upperbody() {
  return (

    <div className="upperbody">
    <div className="top-carousel animate__animated animate__zoomIn">
    <Carousel autoPlay={true} interval={1500} infiniteLoop={true}>
<div>
    <img src={appointment} style={{borderRadius:"10%"}} />
    <p className="legend">Book appointment instantly</p>
</div>
<div>
    <img src={maledoctor} />
    <p className="legend">We have India's best doctors</p>
</div>
<div>
    <img src={femaledoctor} />
    <p className="legend"> 
    Wide range of support with
    </p>
</div>
</Carousel>
  </div>
<div id="upperbodyimg" className='animate__animated animate__backInRight'>

<img style={{marginTop:"15%",marginRight:"20%"}}  src="https://10to8.com/hs-fs/hubfs/Hero%20Image%20WOMAN_1600%20(2).jpg?width=1600&height=1067&name=Hero%20Image%20WOMAN_1600%20(2).jpg" alt="" />
<h1 class="h1" >Every appointment <span>matters</span></h1>

<Button id="appointmentbdy" variant={"contained"} sx={{mt:"100px"}} color={"success"}>Book An Appointment now</Button>
<Button id="callnow" variant={"contained"} color={"info"} sx={{ml:"20%",mr:"10%",mt:"100px"}}>
Call now
</Button>
</div>

    </div>
  )
}

// <ChatWindow/>