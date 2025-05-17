import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

export default function Technical() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      {/* Header */}
      <Box bg="#303030" p={6} borderRadius="md" color="white" textAlign="center" boxShadow="md">
        <Heading size="xl" mb={4}>Technical Overview</Heading>
        <Text>Explore the architecture and design of the HDRI Calibration Interface.</Text>
      </Box>
      
      {/* Frontend */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Frontend</Heading>
        <Text>
          Built with React and Next.js, the frontend offers a modular, intuitive interface.
        </Text>
      </Box>
      
      {/* Backend */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Backend</Heading>
        <Text>
          Powered by Rust, the backend handles HDRI processing with precision and efficiency.
        </Text>
      </Box>
      
      {/* Integration */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Integration</Heading>
        <Text>
          Tauri’s invoke API connects the frontend and backend for real-time interaction.
        </Text>
        <Button
          mt={4}
          bg="#D73F09"
          color="white"
          _hover={{ bg: 'darkgray' }}
          onClick={() => {
            // add any action if needed
          }}
        >
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}