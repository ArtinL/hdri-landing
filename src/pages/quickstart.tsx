import { Box, Heading, Text, VStack, List, ListItem, Button, Image } from '@chakra-ui/react';
import logo from "../assets/icon.png";

export default function Home() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      {/* Header */}
      <VStack bg="#303030" p={6} borderRadius="md" color="white" textAlign="center">
        <Heading>Quick Start Guide</Heading>
        <Text fontSize="lg">Streamlined HDR image generation with Radiance tools</Text>
      </VStack>

            {/* Repository Button */}
      <Box textAlign="center">
        <Button
          size="lg"
          bg="#D73F09"
          color="white"
          _hover={{ bg: "darkgray" }}
          onClick={() => window.open('https://github.com/radiantlab/HDRICalibrationTool', '_blank')}
        >
          View Repository
        </Button>
      </Box>

      {/* Install Dependencies */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Install Dependencies</Heading>
        <List spacing={2} pl={4}>
          <ListItem>Install <Text as="span" fontWeight="bold">Radiance</Text>, <Text as="span" fontWeight="bold">hdrgen</Text>, and <Text as="span" fontWeight="bold">dcraw_emu</Text>.</ListItem>
          <ListItem>Ensure you record each tool’s install path.</ListItem>
        </List>
      </Box>

      {/* Install Application */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Install Application</Heading>
        <Text>Run the HDRI Calibration Interface installer for your platform.</Text>
      </Box>

      {/* Configure Settings */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Configure Settings</Heading>
        <List spacing={2} pl={4}>
          <ListItem>Open the app and navigate to <Text as="span" fontWeight="bold">Settings</Text>.</ListItem>
          <ListItem>Set <Text as="span" fontWeight="bold">Radiance path</Text> (e.g. <Text as="code">/usr/local/radiance/bin</Text>).</ListItem>
          <ListItem>Set <Text as="span" fontWeight="bold">hdrgen</Text> and <Text as="span" fontWeight="bold">dcraw_emu</Text> paths (e.g. <Text as="code">/usr/local/bin</Text>).</ListItem>
          <ListItem>Choose your desired <Text as="span" fontWeight="bold">output folder</Text>.</ListItem>
        </List>
      </Box>

      {/* Upload Images */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Upload Images</Heading>
        <List spacing={2} pl={4}>
          <ListItem>Click <Text as="span" fontWeight="bold">Select</Text> in the Image Selection panel.</ListItem>
          <ListItem>Choose individual files or an entire folder (<Text as="code">.jpg</Text>, <Text as="code">.tif</Text>, RAW).</ListItem>
          <ListItem>Confirm the image list and count.</ListItem>
        </List>
      </Box>

      {/* Upload Response & Calibration Files */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Upload Response &amp; Calibration Files</Heading>
        <List spacing={2} pl={4}>
          <ListItem>Response file: <Text as="code">.rsp</Text></ListItem>
          <ListItem>Calibration files: <Text as="code">.cal</Text></ListItem>
          <ListItem>Refer to the <Text as="span" fontWeight="bold">example/</Text> directory for samples.</ListItem>
        </List>
      </Box>

      {/* Generate HDR Image */}
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={4}>Generate HDR Image</Heading>
        <List spacing={2} pl={4}>
          <ListItem>Close <Text as="span" fontWeight="bold">Settings</Text>.</ListItem>
          <ListItem>Click <Text as="span" fontWeight="bold">Generate HDR Image</Text> in the sidebar.</ListItem>
          <ListItem>Monitor progress or resolve any error messages.</ListItem>
        </List>
      </Box>


    </VStack>
  );
}
