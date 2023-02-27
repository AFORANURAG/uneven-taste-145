import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Container,Grid,GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import {Departmentcard} from "./departmentcard"

const departmentsicon=[{
imgurl:"https://img.icons8.com/ios/50/null/lungs.png"
},
{
imgurl:"https://img.icons8.com/emoji/48/null/red-heart.png"
},
{
imgurl:"https://img.icons8.com/external-creatype-outline-colourcreatype/50/null/external-eyes-basic-creatype-outline-colourcreatype.png"
},
{
imgurl:"https://img.icons8.com/ios/50/null/lungs.png"
},
{
imgurl:"https://img.icons8.com/ios/50/null/lungs.png"
},
           



]

export default function Departments() {
const [department,setDepartments]=useState([])
const [width,setWidth]=useState(window.innerWidth);
console.log(width)

useEffect(()=>{
window.addEventListener("resize",()=>{setWidth(window.innerWidth)})
return ()=>{
    window.removeEventListener("resize",()=>{setWidth(window.innerWidth)})
}
},[])


console.log(department)
useEffect(()=>{
getdepartments()
},[])

function getdepartments(){
    axios.get("http://localhost:8080/Department")
  .then(res=>{
    setDepartments(res.data)    
    console.log(res.data)
    }).catch((err)=>{console.log(err)})
}  
    return (
    <div style={{textAlign:"center",paddingLeft:"100px",paddingRight:"100px"}}>
    <Heading fontFamily={"Noto-serif"}>Select a Department</Heading> 
  
{width>1170?<Grid templateColumns={['repeat(2, 1fr)']} templateRows={["2 repeat"]} gap={15}>
    
{
    department.map((el)=>{
       return (
        <GridItem >
        <Departmentcard {...el} />
        </GridItem>
        
        
       )
    })

    }

</Grid>:
<Grid templateColumns={['repeat(1, 1fr)']} templateRows={["4 repeat"]} gap={15}>
    
    {
        department.map((el)=>{
           return (
<GridItem >
<Departmentcard {...el} />
</GridItem>

           )
        })
 }

</Grid>

}

    </div>
  )
}
