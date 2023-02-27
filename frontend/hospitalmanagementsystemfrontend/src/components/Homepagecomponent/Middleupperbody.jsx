import React, { useEffect, useState } from "react";
import { TextField, Button,Container } from "@mui/material";
import { Center } from "@chakra-ui/react";
import { Divider } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import {Button as Chakrabutton} from "@chakra-ui/react"
import '@splidejs/splide/dist/css/splide.min.css';

import Typography from '@mui/material/Typography';
import MediaCard from "./Doctorcards"
import { fontFamily } from "@mui/system";
import { v4 as uuidv4 } from 'uuid';

const informationdropperstyles = {
  textAlign: "center",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  width: "50%",
  margin: "25%",
  marginTop: "50px",
  height: "100px",
  marginBottom: "0px",
};

const benefits = {
  textAlign: "center",
  width: "50%",
  margin: "25%",
  marginTop: "50px",
  marginBottom: "50px",
};
const specialists = {
  textAlign: "center",
  width: "50%",
  margin: "25%",
  marginTop: "50px",
  marginBottom: "50px",
};
const benefitsdata = [
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/clinicalCare.svg",
    description: "Clinical Care",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/infectionControl.svg",
    description: "Infection control",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/patientSatisfaction.svg",
    description: "patientSatisfaction",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/legalCompliant.svg",
    description: "Legal complaint",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/doctorsCoverage.svg",
    description: "Doctors Coverage",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/audit/clinicalCare.svg",
    description: "Staffing Pattern",
  },
];

const workflowarray = [
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/howItWork/bookAppointment.svg",
    description: "Book an appointment",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/howItWork/meetYourayumitra.svg",
    description: "Meet your booked doctor at the hospital",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/howItWork/consultDoctor.svg",
    description: "Consult the doctor and undergo the treatment.",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/howItWork/beInTouch.svg",
    description: "Be in touch with your doctor. ",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/howItWork/downloadM_App.svg",
    description: "download our app",
  },
];

const doctorsarray = [
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/image/jpeg/1613985751207.jpg",
    specialisation: "MBBS ,DNB - Orthopedics/Orthopedics Surgery",
    experience: "8+ years of experience",
    name: "Dr.Bharath Raj",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/image/jpeg/1646172665807.jpg",
    specialisation: "MBBS ,lungs - Surgen",
    experience: "18+ years of experience",
    name: "Dr.kosala reddy",
  },
 
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/image/jpeg/1613985804963.jpg",
    specialisation: "MBBS,DGO,MS,DNB",
    experience: "13+ years of experience",
    name: "Dr. sandhya",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/image/jpeg/1613985709763.jpg",
    specialisation: "MBBS,MD(General Medicine)",
    experience: "10+ years of experience",
    name: "Dr. Debasish Barik",
  },
  {
    img: "https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/image/jpeg/1629551668648.jpg",
    specialisation: "MBBS,MS(General surgrey)",
    experience: "15+ years of experience",
    name: "Dr.Vijaya Raghava Reddy",
  },

];

const procedures=[
{procedure:"Bilateral Total knee Replacement"},
{procedure:"Prostate removal"},
{procedure:"Coronary Angioplastly"},
{procedure:"Gall stones"},
{procedure:"Piles(Hemorrids)"}
]

export default function Middleupperbody() {
  const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
window.addEventListener("resize",()=>setWidth(window.innerWidth))
return ()=>{
  window.removeEventListener("resize",()=>setWidth(window.innerWidth))
}
  },[])
  return (
    <div className="middleupperbody">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "Noto Serif", fontSize: "30px" }}>
          Require a surgery
        </h1>
      </div>

      <div className="servicescontainer">
        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/neuroSciences.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            Neurology
          </p>
        </div>
        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/criticalCare.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            CriticalCare
          </p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/orthopedics.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            Orthopedics
          </p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/urology.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>Urology</p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/pediatrics.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            Pediatrics
          </p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/gynaecology.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            Gynaecology
          </p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/opthalmology.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            Opthalmology
          </p>
        </div>

        <div className="service">
          <img
            src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/icons/specialities/aestheticSurgery.svg"
            alt=""
          />
          <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
            AestheticSurgery
          </p>
        </div>
      </div>

      <div className="informationdropper" style={{ marginTop: "-100px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "Noto Serif", fontSize: "30px" }}>
            Drop your information for more details
          </h1>
        </div>

        <div style={{ ...informationdropperstyles }}>
          <TextField
            sx={{ ml: "10%", mt: "3%" }}
            id="filled-basic"
            label="+91"
          />
          <Button
            variant={"contained"}
            sx={{ ml: "10%", mt: "4%" }}
            color={"success"}
          >
            Get a call back
          </Button>
        </div>
      </div>

      <Divider sx={{ mt: "30px", fontFamily: "Noto Serif", fontSize: "30px" }}>
        Benefits
      </Divider>

      <div style={{ ...benefits }}>
        <h1
          style={{ fontFamily: "Noto Serif", fontSize: "20px", color: "grey" }}
        >
          Most affordable price for your treatment,nearest to you
        </h1>
      </div>

      <div className="benefitscontainer">
        {benefitsdata.map((el, index) => {
          return (
            <div key={uuidv4()} className="benefit">
              <img src={el.img} alt="" />
              <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
                {el.description}
              </p>
            </div>
          );
        })}
      </div>

      <Divider sx={{ fontFamily: "Noto Serif", fontSize: "30px" }}>
        How it works?
      </Divider>

      <div className="workflowcontainer">
        {workflowarray.map((el, index) => {
          return (
            <div key={uuidv4()} className="benefit">
              <img src={el.img} alt="" />
              <p style={{ fontFamily: "Noto Serif", fontSize: "20px" }}>
                {el.description}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ ...specialists }}>
        <h1
          style={{ fontFamily: "Noto Serif", fontSize: "25px", color: "black" }}
        >
          View All Specialists
        </h1>
        <p
          style={{ fontFamily: "sans-serif", fontSize: "17px", color: "grey" }}
        >
          We have 1000+ specialists with avg 15+ years of experience.
        </p>
      </div>

      <div className="doctorcarousel">
      {width>=800?<>
        <Splide  options={{
          rewind: true,
          perPage:3,
          arrows: true,
          autoplay: true,
          interval: 3000,
          breakpoints: {
            580: {
              perPage: 1,
            },
            1000: {
              perPage: 2,
            },
            1500:{
  perPage:3
            },
          },
        }}>
        
        {doctorsarray.map((el)=>{
          return (
              <SplideSlide>
             
              <MediaCard key={uuidv4()} {...el} />
  
              </SplideSlide>
          )
        })}
  
        </Splide> 
        <Chakrabutton ml={"50%"} mr={"50%"} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"} >
        View all
        </Chakrabutton>      
        
        </>:<>
        <Splide  options={{
          rewind: true,
          perPage:2,
          arrows: true,
          autoplay: true,
          interval: 3000,
          breakpoints: {
            580: {
              perPage: 1,
            },
            1000: {
              perPage: 2,
            },
            1500:{
  perPage:3
            },
          },
        }}>
        
        {doctorsarray.map((el)=>{
          return (
              <SplideSlide>
             
              <MediaCard key={uuidv4()} {...el} />
  
              </SplideSlide>
          )
        })}
  
        </Splide> 
        <Chakrabutton ml={"50%"} mr={"50%"} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"} >
        View all
        </Chakrabutton>      
        </>}
      
     
      </div>

<div>
<div style={{textAlign:"center" ,fontFamily:"Arial",marginTop:"50px"}}>
<h1>
Looking for a procedure
</h1>
</div>

<div className="proceduresbutton">
{procedures.map((el)=>{
    return (
    <Button key={uuidv4()} variant={"outlined"} color={"success"}  sx={{ml:"5%",mt:"20px",fontSize:"20px",borderRadius:"20px"}}>{el.procedure}</Button>
    )
})}
</div>

</div>

</div>
  );
}
