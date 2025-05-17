import { Box, Heading, Text, VStack, Button, Image, Center } from '@chakra-ui/react';
import bruh from "../assets/bruh.jpeg";

export default function Home() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      {/* Header */}
      <VStack bg="#303030" p={6} borderRadius="md" color="white" textAlign="center">
        <Heading>HDRI Calibration Interface</Heading>
        <Text fontSize="lg">Streamlined HDR image generation with Radiance tools</Text>
      </VStack>

      {/* Get Started Button */}
      <Box bg="white" p={8} borderRadius="md" boxShadow="md">
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center">
          <Box flex="1" pr={{ base: 0, md: 6 }} mb={{ base: 6, md: 0 }}>
            <Image src={bruh} alt="HDRI Logo" maxW="100%" height="auto" />
          </Box>
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading size="lg" mb={4}>HDRI Calibration Tool</Heading>
            <Text fontSize="md" mb={6}>
              A desktop application that simplifies the process of creating High Dynamic Range Images
              for architectural analysis. Automatically generate HDR images and luminance maps with
              an intuitive, user-friendly interface.
            </Text>
            <Button
              size="lg"
              bg="#D73F09"
              color="white"
              _hover={{ bg: "darkgray" }}
              onClick={() => window.location.href = '/quickstart'}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>

      {/* The Problem Section */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>The Problem</Heading>
        <Text>
          Finding ways to include sources of natural light in any indoor space can have a multitude of benefits,
          such as elevating the productivity, energy, and overall mood of its inhabitants. However, it can also
          run the risk of introducing visual discomfort, specifically glare, at certain times of day.
        </Text>
        <Text mt={4}>
          In order to identify and quantify sources of glare in indoor settings, architectural lighting designers and
          researchers have been fairly limited in their options. They could purchase a specialty piece of equipment called
          a luminance camera, in which the price range for even a used one makes it practically impossible to attain for most people.
          Or they could employ the technique known as High Dynamic Range Imaging, in which a series of images with varying exposures
          (low dynamic range images) are combined to more closely match what the human eye would see. This process, while far more
          affordable, requires the use of multiple commandline tools and extensive programming knowledge, proving to be both time
          consuming and frustrating.
        </Text>
      </Box>

      {/* Our Solution Section */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Our Solution</Heading>
        <Text>
          The HDRI Calibration Tool is a desktop application that automates the High Dynamic Range Imaging technique.
          We've built upon the work of previous development teams to expand upon existing capabilities as well as introduce new ones.
          This includes: interactively deriving lens measurements in pixels from an image, generating the corresponding luminance map of the resulting
          HDR image, displaying the HDR image immediately upon generation, and a complete overhaul of the application's UI for improved navigability and ease of use.
        </Text>
        <Button
          mt={4}
          bg="#D73F09"
          color="white"
          _hover={{ bg: 'darkgray' }}
          onClick={() => window.location.href = '/technical'}
        >
          Explore the Code
        </Button>
      </Box>
    </VStack>
  );
}