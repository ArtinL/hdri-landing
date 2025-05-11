import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav-bar/NavBar';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '../assets/icon.png';

export default function DefaultPage() {
  return (
    <Box fontFamily="Arial, sans-serif" bg="lightgray" minH="100vh">
      <NavBar />
      <Box maxW="1200px" mx="auto" p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}
