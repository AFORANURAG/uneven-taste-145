import { Children, ReactNode, useEffect } from "react";
import Ayuva from "../../assets/images/Medical-Care.png";
import { Link as Routerlink } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "../../contexts/Usercontext";
import { userdashboardurl } from "../../backendurl/index";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Book Appointment", "Contact-us at:+917836068460"];

const NavLink = ({ children, path }) => {
  return (
    <Link
      marginLeft={[300]}
      px={3}
      py={3}
      fontFamily={"Noto-serif"}
      mx={5}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "grey",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={path}
    >
      {children}
    </Link>
  );
};

const NavLink1 = ({ children, path }) => {
  return (
    <Link
      marginLeft={["-300px", "-200px"]}
      px={3}
      py={3}
      fontFamily={"Noto-serif"}
      mx={5}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "grey",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={path}
    >
      {children}
    </Link>
  );
};

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    token,
    setToken,
    user,
    setUser,
    setPicture,
    picture,
    role,
    setRole,
    name,
    setName,
    email,
    setEmail,
    lastname,
    setLastName,
  } = useContext(Usercontext);
  console.log(token, role, name, lastname, email);

  function reloadonce() {
    window.location.reload();
  }


useEffect(()=>{
// localStorage.removeItem("token")
localStorage.removeItem("role");

},[token])

  function logout() {
    setToken("");
    setRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("picture");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    // reloadonce();
  }
  useEffect(() => {
    let role = localStorage.getItem("role");
    let name = localStorage.getItem("name");
    let lastname = localStorage.getItem("lastname");
    let email = localStorage.getItem("email");
    let picture = localStorage.getItem("picture");

    setEmail(email);
    setLastName(lastname);
    setName(name);
    console.log(email, lastname);
    setPicture(picture);
  }, [name]);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Routerlink to={"/"}>
              <Box>
                <img style={{ width: "20%" }} src={Ayuva} alt="" />
              </Box>
            </Routerlink>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink1
                key={"45353"}
                path={`${userdashboardurl}?name=${name}&&token=${token}&&lastName=${lastname}&&${email}`}
              >
                Book Appointment
              </NavLink1>

           

              <NavLink
                key={"789798"}
                path={`${userdashboardurl}?name=${name}&&token=${token}&&lastName=${lastname}&&${email}`}
              >
                Contact-us at:+917836068460
              </NavLink>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            {token? (
              <>
                
              </>
              )
:<>
<Routerlink to={"/login"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    leftIcon={<AddIcon />}
                  >
                    Login
                  </Button>


                </Routerlink>


                
                <Routerlink to={"/signup"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    leftIcon={<AddIcon />}
                  >
                    Signup
                  </Button>
                </Routerlink>

                <Routerlink to={"https://kishor-react-app.vercel.app/"}>
                <Button
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}
                  leftIcon={<AddIcon />}
                >
                 doctor Panel
                </Button>
              </Routerlink>      

</>
            }

            {token ? (
              <>
                <NavLink key={"90890"} path={""}>
                  {name}
                </NavLink>
                <img
                  style={{ width: "7%", marginRight: "10%" }}
                  src={picture}
                  alt=""
                />
                <Button
                  variant={"outline"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}
                  
                  onClick={logout}
                 width={"150px"}
                >
                  Logout
                </Button>
              </>
            ) : (
              <></>
            )}

            {token && role == "Doctor" && (
              <>
                <Routerlink to={"/doctordashboard"}>
                  <Button
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    leftIcon={<AddIcon />}
                  >
                    Doctor dashboard
                  </Button>
                </Routerlink>
              </>
            )}
            {token ? (
              <>
                <Link
                  href={`${userdashboardurl}?name=${name}&&token=${token}&&lastName=${lastname}&&email=${email}`}
                >
                  <Button
                  variant={"outline"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    leftIcon={<AddIcon />}
                  >
                    User Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink
                key={"45353"}
                path={`${userdashboardurl}?name=${name}&&token=${token}&&lastName=${lastname}&&${email}`}
              >
                Book Appointment
              </NavLink>
              <NavLink
                key={"789798"}
                path={`${userdashboardurl}?name=${name}&&token=${token}&&lastName=${lastname}&&${email}`}
              >
                Contact-us at:+917836068460
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem></MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
