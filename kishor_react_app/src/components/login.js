import { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { backendurl } from './backendurl';
import {useNavigate} from "react-router-dom"
import axios from "axios"  
export default function LoginForm() {
const [userinfo,setuserinfo]=useState({email:"",password:"",})
const [doctordetail,setDoctorDetail]=useState([])
const navigate=useNavigate()
function handlechange(e){
console.log(userinfo)
let {name,value}=e.target
setuserinfo({...userinfo,[name]:value})
}
function getdoctordata(){
axios.post(`${backendurl}/doctor/getdocotorwithpassword`,{
 data:{
...userinfo
},
headers:{
    'Content-Type':'application/json'
}
}).then((res)=>{
    console.log(res)
    setDoctorDetail(res.data);
    localStorage.setItem("doctordetails",JSON.stringify(res.data))
window.location.href="https://kishor-react-app-aforanurag.vercel.app";
}).catch((err)=>{
    console.log(err)
})

}


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={userinfo.email} onChange={handlechange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={handlechange} value={userinfo.password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={getdoctordata}  
                bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }