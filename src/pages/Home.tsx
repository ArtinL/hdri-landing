import { Box, Heading, Text, VStack, Button, Image } from '@chakra-ui/react';
import bruh from "../assets/bruh.jpeg";

export default function Home() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      <Box bg="#303030" p={6} borderRadius="md" color="white">
        <Heading mb={4}>Welcome to the HDRI Calibration Interface, your tool for simplifying glare analysis.</Heading>
      </Box>
      <Box><Image src={bruh} alt="HDRI Logo" /></Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>The Problem</Heading>
        <Text>
          Finding ways to include sources of natural light in any indoor space can have a multitude of benefits,
          such as elevating the productivity, energy, and overall mood of its inhabitants. However, it can also
          run the risk of introducing visual discomfort, specifically glare, at certain times of day. {'\n'}
        </Text>
        <Text>
          Inorder to identify and quantify sources of glare in indoor settings, architectural lighting designers and
          researchers have thus far have been fairly limited in their options. They could purchase a specailty piece of 
          equipment called a luminance camera, in which the price range for even a used one makes it practically impossible 
          to attain for most people. Or they could imploy the technique known as High Dynamic Range Imaging, in which a series
          of images with varying exposures (low dynamic range images) are combined to closer match what the human eye would see.
          This process, while far more affordable, requires the use of multiple commandline tools and extensive programming knowledge,
          proving to be both time consuming and frustrating.
        </Text>
      </Box>
      <Box bg="lightgray" p={6} borderRadius="md" color="black">
        <Heading size="lg" mb={4}>Our Solution</Heading>
        <Text>
          The HDRI Calibration Tool is a desktop application that automates the High Dynamic Range Imaging technique. We've built upon
          the work of previous development teams to expand upon existing capabilities, as well as introduce some new ones. This includes: a way to 
          interactively derive lens measurements in pixels from an image, generating the corresponding luminance map of the resulting
          HDR image, displaying the resulting HDR image immediately upon its generation, and a total overhaul of the application's UI to 
          further improve its navigability and ease of use. 
        </Text>
        <Button mt={4} bg="#D73F09" color="white" _hover={{ bg: 'darkgray' }}>
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}
