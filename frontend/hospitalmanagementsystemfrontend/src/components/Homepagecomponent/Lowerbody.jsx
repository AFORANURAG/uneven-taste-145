import React, { useEffect, useState } from 'react';

import documents from "../../assets/images/icons8-archive-list-of-parts-32.png";

import { v4 as uuidv4 } from 'uuid';


import cash from "../../assets/images/icons8-cash-40.png";

import consultation from "../../assets/images/icons8-consultation-20.png";

import creditcards  from "../../assets/images/icons8-credit-cards-40.png";

import injection from "../../assets/images/icons8-injection-30.png";

import user from "../../assets/images/icons8-users-48.png";

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import MediaCard from "./Doctorcards"

import Review from "./Reviews"

import {Button as Chakrabutton} from "@chakra-ui/react"
import BasicCard from "./Reviews"
import { Divider } from '@mui/material';

const newsimages=[
{
  imageurl:"https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/website/times_of_india.png"
},
{
  imageurl:"https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/website/bw_healthcare.png"
},
{
  imageurl:"https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/website/fe_healthcare.png"
},
{
  imageurl:"https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/website/dharnik_bhasker.png"
},
{
  imageurl:"https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/website/health_shots.png"
}
]



const reviewsectionarray = [
  {
  name:"anurag",
  verified:"customer verified",
  description:"ayuva has been very instrumental . I have referred many and will continue to refer people to use this app if they're in need to organize their appt scheduling."
  }
  ,
  {
  name:"tanya",
  verified:"customer verified",
  description:"I highly recommend 10to8, it's so easy to use for me and my clients. Thank you."
  },
  {
  name:"anonymous",
  verified:"customer verified",
  description:"Have the scheduler on my site. But only two customers have used it so far in the past month. So the jury is still out..."
  },
  {
  name:"priyanshu",
  verified:"customer verified",
  description:"Been with you all 4 years and still happy and satisfied. I love the new features. Thank you all for all that you do! "
  },
  
  {
  name:"Pratap",
  verified:"customer verified",
  description:"Amazing. This tool is priced affordably and The multi-calendar scheduling and ."
  }
  ,
  
  {
  name:"Kishore mane",
  verified:"customer verified",
  description:"I tested four booking systems and am sure made the right choice. It has very good features for my one-person practice and lots more I could grow into. Excellent support."
  }
  ]
  



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


export default function Lowerbody() {
  const [width,setWidth]=useState(window.innerWidth)
  console.log(width)
useEffect(()=>{
   window.addEventListener("resize",()=>setWidth(window.innerWidth))

return ()=>{
  window.removeEventListener("resize",()=>setWidth(window.innerWidth))
}
},[])

  return (
    <div className='lowerbody' style={{textAlign:"center"}}>
    <div >
    <>{width}</>
    <h1 style={{ fontFamily: "Noto Serif", fontSize: "35px", color: "black" }}>
    Ayu Health Mobile App
    </h1>
    <p style={{ fontFamily: "Noto Serif", fontSize: "25px", color: "grey" }}>Your One Stop Healthcare Solution</p>
    </div>
    
    <div className='appdiv'>
    <div className="appinfo">
    <img src={cash} alt="" />
    <p style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}>
    Earn and redeem Ayuva Cash</p>
    <img src={user} alt="" />
    <p 
    style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}
    >
    Interact with your Community</p>
    
    <img src={documents} alt="" />
    <p
    style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}
    >
    Access Digital Health records</p>
    </div>

    <div className="appinfo">
    <img src="https://res.cloudinary.com/dhuxn9owd/image/upload/f_auto,c_limit,w_1920,q_auto/ayu-images/V3/images/mobileApp_D.png" alt="" />
    </div>


    <div className="appinfo">
    <img src={consultation} alt="" />
    <p
    style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}
    
    >
    Book Online Consultation</p>
    
    <img src={injection} alt="" />
    <p
    style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}
    
    >
    Book Home Sample pick-up
    </p>
    <img src={creditcards} alt="" />
    <p     style={{fontFamily:"cursive",fontSize:"25px",position:"relative",bottom:"33px",marginLeft:"10%"}}
    > 
    Purchase your Privilege Cards</p>
    </div>
    
    </div>

<Divider sx={{fontSize:"25px",marginBottom:"50px"}}>Review Section</Divider>
<div className='reviewssection'>



{width>=900?<>
<Splide  options={{
  perPage:3,
  rewind: true,
  pagination: true,
  arrows: true,
  autoplay: true,
  interval: 3000
}}>

{reviewsectionarray.map((el)=>{
  return (
      <SplideSlide key={uuidv4()} >
      <Review {...el} />
      </SplideSlide>
)
})}
</Splide> 
<Chakrabutton ml={"50%"} mr={"50%"} mt={"50px"} mb={"50px"} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"} >
View all
</Chakrabutton>  


</>:
<>
{console.log(width)
}
<Splide  options={{
  perPage:2,
  rewind: true,
  pagination: true,
  arrows: true,
  autoplay: true,
  interval: 3000
}}>

{reviewsectionarray.map((el)=>{
  return (
      <SplideSlide key={uuidv4()} >
      <Review {...el} />
      </SplideSlide>
)
})}
</Splide> 
<Chakrabutton ml={"50%"} mr={"50%"} mt={"50px"} mb={"50px"} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"} >
View all
</Chakrabutton>  

</>}

</div>


<div className='reviewssection'>
<Splide  options={{
  perPage: 3,
  rewind: true,
  pagination: true,
  arrows: true,
  autoplay: true,
  interval: 3000
}}>

{newsimages.map((el)=>{
  return (
      <SplideSlide key={uuidv4()}  >
<div style={{marginLeft:"20px",width:"80%",boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
<img src={el.imageurl} alt="hello world"/>
</div>
</SplideSlide>
)
})}
</Splide>
<Chakrabutton ml={"50%"} mr={"50%"} mt={"100px"} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"} >
View all
</Chakrabutton>  
</div>
</div>
  
)
}
