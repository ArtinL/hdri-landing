import { Box, Heading, Text, VStack, Image, Center } from '@chakra-ui/react';
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
        <Center>
          <Image
            src={real}
            alt="Example run"
            maxW="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
          />
        </Center>
    </Box>
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Main Page</Heading>
        <Center>
          <Image
            src={main1}
            alt="Main visual 1"
            maxW="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
          />
        </Center>
      </Box>
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Settings Page</Heading>
        <Image
          src={main2}
          alt="Main visual 2"
          maxW="100%"
          height="auto"
          borderRadius="md"
          boxShadow="md"
        />
      </Box>
    </VStack>
  );
}