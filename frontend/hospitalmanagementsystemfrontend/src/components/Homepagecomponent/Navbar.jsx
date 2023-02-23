import { Children, ReactNode } from 'react';
import Ayuva from "../../assets/images/Medical-Care.png"
import {Link as Routerlink} from "react-router-dom"
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ["Book Appointment",'Dashboard',"Contact-us at:+917836068460"];

const NavLink = ({ children }) => {
  return( 
    <Routerlink
    px={5}
    py={5}
    // mx={5}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
    >
   {children}
  </Routerlink>
  )
  };

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Routerlink to={"/"}>
          <Box>
          <img style={{width:"25%"}} src={Ayuva} alt="" />
          </Box>
          </Routerlink>
         
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}

            </HStack>
          </HStack>

          <Flex alignItems={'center'}>

          <Routerlink to={"/login"}>
          <Button
          variant={'solid'}
          colorScheme={'teal'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon />}>
          Login
        </Button>
          </Routerlink>  
          

          <Routerlink to={"/signup"}>
          <Button
          variant={'solid'}
          colorScheme={'teal'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon />}>
          Signup
        </Button>
          </Routerlink> 

          <Routerlink to={"/doctordashboard"}>
          <Button
          variant={'solid'}
          colorScheme={'teal'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon />}>
          Doctor dashboard
        </Button>
          </Routerlink> 

         
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
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