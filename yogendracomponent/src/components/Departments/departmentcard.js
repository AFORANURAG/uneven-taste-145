import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Button,Image,Stack,Heading,Text } from '@chakra-ui/react'
import {Link} from "react-router-dom"
function Departmentcard({imgurl,name,description,departmentId}){
 function showdoctors(){
    console.log("doctors is showed")
    localStorage.setItem("departmentid",departmentId)
 }   
// so basically when i am clicking on this it should show me the doctor of that departments    
    return (
    <Card
    mt={100}
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
 width={"100%"}
 boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"

 pb={10}   
 >
    <Image

  h={"70px"}    
  w={"70px"}
      src={imgurl}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody >
        <Heading  size='lg' fontFamily={"Cursive"}>{name}</Heading>
  
        <Text  py='4' fontSize={"18px"} mr={10} mt={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} fontFamily={"Noto-serif"}>
          {description}
        </Text>
      </CardBody>
  
      <CardFooter>
      <Link to={"/doctors"}>
      <Button variant='solid' onClick={showdoctors} color={"blackAlpha.800"} _hover={{backgroundColor:"black",color:"white"}} backgroundColor={"green.300"}>
      proceed to department
    </Button>
</Link>  
      
      </CardFooter>
    </Stack>
  </Card>
    )
}

export {Departmentcard}