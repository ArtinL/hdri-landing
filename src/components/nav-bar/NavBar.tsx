import { Box, Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon.png';

export default function NavBar() {
  return (
    <Box bg="#303030" p={4} color="white">
      <Flex as="nav" align="center" justify="space-between" paddingX={8}>
        <Flex align="center" gap={4}>
          <Image src={logo} alt="HDRI Logo" boxSize="40px" />
          <Text fontWeight="bold" fontSize="1.5rem" color="white">
            HDRI Calibration Interface
          </Text>
        </Flex>
        <Flex gap={16} fontSize="1.2rem">
          <ChakraLink as={Link} to="/" fontWeight="bold" color="white" _hover={{ color: 'lightgray' }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/technical" fontWeight="bold" color="white" _hover={{ color: 'lightgray' }}>
            Technical
          </ChakraLink>
          <ChakraLink as={Link} to="/team" fontWeight="bold" color="white" _hover={{ color: 'lightgray' }}>
            Team
          </ChakraLink>
          <ChakraLink as={Link} to="/quickstart" fontWeight="bold" color="white" _hover={{ color: 'lightgray' }}>
            Quick Start
          </ChakraLink>
          <ChakraLink as={Link} to="/visualelements" fontWeight="bold" color="white" _hover={{ color: 'lightgray' }}>
            Visual Elements
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
