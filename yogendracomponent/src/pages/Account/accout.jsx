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
const Account = () => {
    const [userProfile, setUserProfile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
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
        name="Yogendra Singh"
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
          Yogendra Singh
        </Heading>
        <Text color="grey" fontSize="18px" fontWeight="bold" margin="20">
          Bhilwara, Rajasthan
        </Text>
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
        <Input focusBorderColor="brand.blue" type="text" placeholder="Yogendra" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Singh" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="6374422034"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="admin@gmail.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city">
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
        <Select focusBorderColor="brand.blue" placeholder="Select country">
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
    <button className="update-profile">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
