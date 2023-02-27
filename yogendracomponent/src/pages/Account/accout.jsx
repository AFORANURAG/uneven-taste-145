import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import "../styles.css";
import { useState, useRef } from 'react'
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useEffect } from "react";
import axios from "axios";
const Account = () => {
const [userProfile, setUserProfile] = useState(null)
const { isOpen, onOpen, onClose } = useDisclosure()

const [patientId,setPatientId]=useState()

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
const [lastName,setlastname]=useState(()=>{
  let lastName=localStorage.getItem("lastname")
  if(lastName){
    return lastName
  }
});

const [token,setToken]=useState(()=>{
  let token=localStorage.getItem("token")
  if(token){
    return token
  }
});


const [city,setCity]=useState();
const [country,setCountry]=useState();
const [phoneNumber,setPhonenumber]=useState();
console.log(token)
function createpatient(){
console.log("create patient is clicked")
//     const { name, email, phone, dob , city, country } = req.body;
console.log(token)
axios.post("http://localhost:8080/patient",{
  body:{
name,
email,
phone:phoneNumber,
city,
country
  },
  headers:{
    "Content-Type":"application/json",
  "Authorization":"Bearer "+token
}
}).then((res)=>{
 alert("successfully registered as patient")
  console.log(res)
  setPatientId(res.data.patientId)
  localStorage.setItem("patient", res.data.patientId)
}).catch((err)=>{
  console.log(err)
})
}
const profileImage = useRef(null)
  const openChooseImage = () => {
    profileImage.current.click()
  }

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }

    onOpen()
  }
  return (
    <div class="dashboard-content">
      <DashboardHeader btnText="Book Appointment" />
      <div className="container-profile">
        <div className="profile-card">
          <h2>User's Profile</h2>
          <hr />
        <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name={name}
        cursor="pointer"
        onClick={openChooseImage}
        src={userProfile ? userProfile : '/img/tim-cook.jpg'}
      >
        <AvatarBadge bg="brand.blue" boxSize="1em">
          <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
      <input
        hidden
        type="file"
        ref={profileImage}
        onChange={changeProfileImage}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          
        </Heading>
      


        {/* <Text color="gray" fontSize="16px" fontWeight="bold">
          Mobile:- 6375422034
        </Text> */}
      </VStack>
    </VStack>
  
        </div>
        <div className="profile-setting">
          <h2>Account Setting</h2>
          <hr />
        <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" value={name} placeholder="" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="" value={lastName} />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+91xxxxxxxxxx"
          value={phoneNumber}
          onChange={e => setPhonenumber(e.target.value)}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          value={email}
          placeholder="admin@gmail.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city" value={city} onChange={(e)=>{setCity(e.target.value)}}>
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
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" value={country} onChange={(e)=>{setCountry(e.target.value)}} placeholder="Select country">
          <option value="america" selected>
            India
          </option>
          <option value="england">England</option>
          <option value="poland">America</option>
        </Select>
      </FormControl>
    </Grid>
    <hr className="bottom-hr"
    />
    <button className="update-profile" onClick={createpatient}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Account;


// <Text color="grey" fontSize="18px" fontWeight="bold" margin="20">
// Bhilwara, Rajasthan
// </Text>