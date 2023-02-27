import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect ,useState,useContext} from 'react';
import { AppointmentcontextDetail } from '../../contexts/Appointmentdetail.context';  
import {Link as RouterLink,useNavigate } from "react-router-dom" 
  import StarRating from './Rating';
  export default function DoctorCard({email,img,departmentId,doctorId,experience,name,qualifications,rating,specialisation,availability,fees}) {
  const {userinfo,setInfo}=useContext(AppointmentcontextDetail)
 const navigate=useNavigate()



function appointmentPortal(){
console.log("appointment portal is clicked")
setInfo({email,departmentId,doctorId,name,fees,img})
navigatetoappointment()
}

function navigatetoappointment(){
navigate("/appointment")
}


return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                img
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {specialisation}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {experience} in {specialisation}
            </Text>

            <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {qualifications}
          </Text>

          <Stack direction={"row"}
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>

          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/25/null/external-rupee-banking-and-finance-kiranshastry-lineal-kiranshastry.png" alt="rupeephoto" />

          <span>
          {fees}
          </span> 

        </Stack>

          <Stack direction='row'>
          {availability? <Badge colorScheme='green'> Available</Badge>:
          <Badge colorScheme='red'>Not Available</Badge>
        }
         
      <StarRating rating={rating} />  
        
        </Stack>


            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              
              <Button
              onClick={appointmentPortal}
              _hover={{backgroundColor:"green",color:"white"}}
              isDisabled={!availability}
              flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'black',
                }}>
                Book appointment
              </Button>
            
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }



//   <Button
//   flex={1}
//   fontSize={'sm'}
//   rounded={'full'}
//   bg={'blue.400'}
//   color={'white'}
//   boxShadow={
//     '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//   }
//   _hover={{
//     bg: 'blue.500',
//   }}
//   _focus={{
//     bg: 'blue.500',
//   }}>
  
// </Button>