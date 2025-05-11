import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

export default function Technical() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      <Box bg="#303030" p={6} borderRadius="md" color="white">
        <Heading size="xl" mb={4}>Technical Overview</Heading>
        <Text>Explore the architecture and design of the HDRI Calibration Interface.</Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Frontend</Heading>
        <Text>Built with React and Next.js, the frontend offers a modular, intuitive interface.</Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Backend</Heading>
        <Text>Powered by Rust, the backend handles HDRI processing with precision and efficiency.</Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Integration</Heading>
        <Text>Tauri’s invoke API connects the frontend and backend for real-time interaction.</Text>
        <Button mt={4} bg="#D73F09" color="white" _hover={{ bg: 'darkgray' }}>
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}
