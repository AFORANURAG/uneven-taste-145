import React from 'react';
import documents from "../../assets/images/icons8-archive-list-of-parts-32.png";

import cash from "../../assets/images/icons8-cash-40.png";

import consultation from "../../assets/images/icons8-consultation-20.png";

import creditcards  from "../../assets/images/icons8-credit-cards-40.png";

import injection from "../../assets/images/icons8-injection-30.png";

import user from "../../assets/images/icons8-users-48.png";



export default function Lowerbody() {
  return (
    <div className='lowerbody' style={{textAlign:"center"}}>
    <div >
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



    </div>
  
    )
}
