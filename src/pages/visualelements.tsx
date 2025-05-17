import { Box, Heading, Text, VStack, Button, Image } from '@chakra-ui/react';
import logo from "../assets/icon.png";
import main1 from "../assets/main1.png";
import main2 from "../assets/main2.png";
import real from "../assets/real.gif";

export default function VisualElements() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      {/* Header */}
      <VStack bg="#303030" p={6} borderRadius="md" color="white" textAlign="center">
        <Heading>Visual Elements</Heading>
        <Text fontSize="lg">Visual representations and examples</Text>
      </VStack>
    <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Example Run</Heading>
        <Image src={real} alt="Example Run" />
    </Box>
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Main Page</Heading>
        <Image src={main1} alt="Main Visual 1" />
      </Box>

      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Settings Page</Heading>
        <Image src={main2} alt="Main Visual 2" />
      </Box>
    </VStack>
  );
}