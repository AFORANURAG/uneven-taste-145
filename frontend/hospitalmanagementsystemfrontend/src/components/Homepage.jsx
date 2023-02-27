import React from 'react'
import Middleupperbody from './Homepagecomponent/Middleupperbody';
import Navbar from "./Homepagecomponent/Navbar";
import Upperbody from './Homepagecomponent/Upperbody';
import Lowerbody from './Homepagecomponent/Lowerbody';
import {Footer} from './Homepagecomponent/Footer';
export default function Homepage() {
  return (
    <div> 
<Upperbody/>
<Middleupperbody/>
<Lowerbody/>
<Footer/>
    </div>
  )
}
