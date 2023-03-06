import * as React from 'react';
import {useState,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Routerlink} from 'react-router-dom';
import {Input} from "@chakra-ui/react"
import {Usercontext} from "../contexts/Usercontext"
import axios from 'axios';
import {backendurl} from "../backendurl/index"
import {ValidateEmail,CheckPassword} from "../validators/Validators"
import {Modalbox} from './Modal';
import {modalcontext} from  "../contexts/modalcontext"
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
  
    <Link color="inherit" href="https://mui.com/">
  
    </Link>{' '}
 
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function SignUp() {
  const {show,setShow,handleClose,handleShow}=React.useContext(modalcontext);
  const {token,setToken,userinfo,setuserInfo}=React.useContext(Usercontext);
  const [selectedDate, setSelectedDate] =React.useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

console.log(userinfo)


function handlechanges(e){
console.log(selectedDate)
  let {name,value} = e.target 
console.log(name,value);
setuserInfo({...userinfo,[name]:value})
}

// React.useEffect(()=>{
  //   handleSubmit()
  // })
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    let emailofuser=data.get("email");
    let password=data.get("password")
    if(ValidateEmail(emailofuser)&&CheckPassword(password)){
      axios.post(backendurl+'/auth/register', {
        email: data.get('email'),
        password: data.get('password'),
        last_name:userinfo.lastName,
        first_name:userinfo.firstName,
      }).then((res)=>{
        console.log("sign up successfull")
        setIsSubmitted(true);
        navigate('/login');  
      })
      .catch((error)=>{
        console.log(error)
      })

}else{
handleShow()
}
console.log("hello world")
}
function handleclose(){
  console.log("handle close is clicked")
  onClose();
  navigate('/login');
}
function continuewithgoogle(){
  // let token=localStorage.getItem("token");
  console.log(token,"hello rahul gandhi")
  console.log("continue with google is clicked")
  console.log(token,"Adaslkdas;ljdlasj")
  // console.log(!undefined===true)
  
  !token?window.open("http://localhost:8000/oauth/auth/google"):alert("already signed in")

      
  
}

useEffect(() => {
  // Extract the access_token query parameter from the URL
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get('access_token');
  const email = params.get('email');
console.log(email)
console.log(accessToken)
console.log("working")
}, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography  component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={handlechanges}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={handlechanges}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            <Grid item xs={12} sm={6}>
           

            </Grid>
            <Grid item xs={12}>
            {selectedDate}
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <Button
          
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Button
          onClick={continuewithgoogle}
            type="submit"
            fullWidth
            variant="contained"
            color={"success"}
            sx={{ mt: 3, mb: 2 }}
          >
           Continue with google
          </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Routerlink  to={"/login"}>
                  Already have an account? Sign in
                </Routerlink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <Modalbox/>
     <>
     <>
     <Modal isOpen={isOpen && isSubmitted} onClose={onClose}>
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Signedup successfully</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
           Sign up sucessfull!, you will be redirected to login page
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
      </Container>
      </ThemeProvider>
  );
}