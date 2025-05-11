import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      <Box bg="#303030" p={6} borderRadius="md" color="white">
        <Heading mb={4}>Welcome to the HDRI Calibration Interface, your tool for simplifying glare analysis.</Heading>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Why Daylight Matters</Heading>
        <Text>Daylight enhances health, comfort, and productivity while reducing energy use.</Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>The Problem with Glare</Heading>
        <Text>Measuring glare traditionally required expensive equipment. Advances in HDRI now make it accessible.</Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Our Solution</Heading>
        <Text>We’ve enhanced an open-source app to simplify HDRI-based glare analysis.</Text>
        <Button mt={4} bg="#D73F09" color="white" _hover={{ bg: 'darkgray' }}>
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}
