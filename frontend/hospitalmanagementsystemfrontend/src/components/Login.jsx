
import { useContext } from 'react';
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Select,
    
  } from '@chakra-ui/react';
  import { useNavigate ,Link as Routerlink} from 'react-router-dom';
  import ForgotPasswordForm from './ForgotPassword';
  import backendurl from "../backendurl/index"
  import {ValidateEmail,CheckPassword} from "../validators/Validators"
  import {Usercontext} from "../contexts/Usercontext";
  import {Modalbox} from './Modal';
  import {modalcontext} from  "../contexts/modalcontext"
import axios from 'axios';


export default function Login() {
// main kaam yaha shuru hoga

const navigate = useNavigate();
const { isOpen, onOpen, onClose } = useDisclosure()
const {show,setShow,handleClose,handleShow}=React.useContext(modalcontext);

const {token,setToken,user,setUser,role,setRole,name,setName}=useContext(Usercontext)
// console.log(user,token);
console.log(role)
function login(){
  // axios.post()
  if(ValidateEmail(user.email)&&CheckPassword(user.password)){
    axios.post(backendurl+'/auth/login/',{
      email:user.email,
      password:user.password,
    })
    .then(function (response) {
    console.log(response.data)
    localStorage.setItem("token",response.data.token)
    localStorage.setItem("role",role)
    localStorage.setItem("name",response.data.name)
    //email:user.email,last_name:user.last_name 
    localStorage.setItem("lastname",response.data.last_name)
    localStorage.setItem("email",response.data.email)
  setToken(response.data.token)
      onOpen()
    }).then((data)=>console.log(data))
    .catch(function (error) {
      handleShow()
      console.log(error);
    });
  }else{
    
    handleShow()
  }
 
}


function handleOnChange(e){
 const {name,value}=e.target
 setUser({...user,[name]:value})
}

function handleclose(){
  console.log("handle close is clicked")
  onClose();
  navigate('/');
}


// login krne kai baad token set krunga
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={user.email} onChange={handleOnChange} name='email' type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={user.password} onChange={handleOnChange} name="password" type="password" />
            </FormControl>

            <FormControl id="">
            <FormLabel>role</FormLabel>
            <Select  value={role}  onChange={(e)=>{setRole(e.target.value)}}  type="text">
            <option value='Patient'>Patient</option>
            <option value='Doctor'>Doctor</option>
            <option value='Admin'>Admin</option>
            </Select>
          </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Routerlink to={"/forgotpassword"}>
                Forgot password?
                </Routerlink>
                </Stack>
              <Button onClick={login} colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://c8.alamy.com/comp/2H5933B/hospital-building-for-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-2H5933B.jpg'
            }
          />
        </Flex>
        <>
        <Modalbox/>
        </>
        <>
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             Login successfull
            </ModalBody>
   
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleclose}>
                Close
              </Button>
           
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
        </> 
      </Stack>
    );
}
