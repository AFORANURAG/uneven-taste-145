import { Flex, Box, Text, Link, Stack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('white', 'white');

  return (
    <Flex
      as="footer"
      bg={bg}
      color={color}
      py="8"
      px={{ base: '4', md: '8' }}
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      justifyContent="space-between"
      alignItems={{ base: 'center', lg: 'flex-start' }}
      fontSize="sm"
      backgroundImage={"linear-gradient(to right bottom, rgb(61, 194, 218), rgb(250, 172, 64))"}
    >
      <Box flex="1">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Ayuva
        </Text>
        <Text lineHeight="tall">
          Address: 123 Main St, Anytown, USA
          <br />
          Phone: 555-123-4567
          <br />
          Email: info@ayuva.com
          <br />
          Locations: Delhi, Bangalore, Pune, Gurugram
        </Text>
        <Stack mt="4" direction="row" spacing="4">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              size="md"
              variant="ghost"
              colorScheme="facebook"
            />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="md"
              variant="ghost"
              colorScheme="twitter"
            />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="md"
              variant="ghost"
              colorScheme="pink"
            />
          </Link>
        </Stack>
      </Box>
      <Box mt={{ base: '8', lg: '0' }}>
        <Text fontSize="md" mb="2" fontWeight="semibold">
          Links
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '2', md: '8' }}>
          <Link href="#">Home</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
        </Stack>
      </Box>
      <IconButton
        aria-label="Toggle Color Mode"
        icon={colorMode === 'dark' ? 'sun' : 'moon'}
        size="md"
        fontSize="2xl"
        variant="ghost"
        onClick={toggleColorMode}
        ml="4"
      />
    </Flex>
  );
}

export {Footer};
