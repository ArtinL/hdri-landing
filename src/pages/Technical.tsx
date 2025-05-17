import { Box, Heading, Text, VStack, Button, Image, Center } from '@chakra-ui/react';
import main from "../assets/Main.jpeg";
import settings from "../assets/Settings.jpeg";
import viewer from "../assets/Viewer.jpeg"

export default function Technical() {
  return (
    <VStack spacing={8} align="stretch" p={8} bg="lightgray" minH="100vh">
      {/* Header */}
      <Box bg="#303030" p={6} borderRadius="md" color="white" textAlign="center" boxShadow="md">
        <Heading size="xl" mb={4}>Technical Overview</Heading>
        <Text>Explore the architecture and design of the HDRI Calibration Interface.</Text>
      </Box>
      
      {/* GitHub Repository Link */}
      <Box bg="white" p={8} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>Source Code Available on GitHub</Heading>
        <Text mb={4}>
          The complete source code for the HDRI Calibration Tool is available on GitHub. 
        </Text>
        <Button
          bg="#D73F09"
          color="white"
          _hover={{ bg: "darkgray" }}
          onClick={() => window.open('https://github.com/radiantlab/HDRICalibrationTool', '_blank')}
        >
          View Repository
        </Button>
      </Box>
      
      {/* Frontend */}
      <Box bg="white" p={8} borderRadius="lg" boxShadow="xl" mx="auto">
        <Heading size="lg" mb={6} textAlign="left">
          Frontend
        </Heading>
        <Text mb={6} lineHeight="tall">
          Built with React and Next.js, the frontend offers a modular, intuitive interface. The frontend currently has two main pages, or components, with a third page being added shortly.
          The first page is the configuration page, where the bulk of the user's interaction with the app takes place: here, users select their LDR images, input their calibration settings,
          and load the relevant calibration files for the HDR pipeline.
        </Text>
        <Center mb={8}>
          <Image
            src={main}
            alt="Main page"
            maxW="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
          />
        </Center>
        <Text mb={6} lineHeight="tall">
          The second page is the settings page, where users input the file paths for the application's dependencies; this page also allows users to toggle "advanced mode," allowing them to
          customize the shell commands used in each stage of the pipeline.
        </Text>
        <Center mb={8}>
          <Image
            src={settings}
            alt="Settings page"
            maxW="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
          />
        </Center>
        <Text mb={6} lineHeight="tall">
          The third page, which is still undergoing final styling, allows the user to view the output images, namely the penultimate HDR image and an accompanying luminance map, once they are generated.
          Behind the scenes, each page uses a shared Zustand store to keep track of a global application state. Once the pipeline process is initiated, the stores provide the values to be passed to the backend.
        </Text>
        <Center>
          <Image
            src={viewer}
            alt="Image viewer page"
            maxW="100%"
            height="auto"
            borderRadius="md"
            boxShadow="md"
            mb={6}
          />
        </Center>
        {/* Backend */}
        <Heading size="lg" mb={4}>Backend</Heading>
        <Text mb={6} lineHeight="tall">
          Powered by Tauri, and thus written in Rust, the backend handles the HDRI generation efficiently. The backend implements the generation of the HDR image as a pipeline with 11 stages; this includes an optional
          stage. In order, the LDR image exposures are merged into one image, then certain exposure value(s) are nullified, and the image is cropped to fit a fisheye view; next, the image is resized according to the user input
          before the calibration stages begin. The calibration stages use the user supplied function files for projection adjustment, vignetting correction, neutral density filtering, and photometric adjustment. Finally, the
          header, or meta data, of the image is changed to match the correct format for an HDR image. By this point in the pipeline, the output HDR image is ready; before the pipeline finishes, though, a glare quantification value
          is calculated and, if given the requisite optional user input, an accompanying luminance map is created as well. Each file is then written to the user supplied output directory and the pipeline is finished.
        </Text>
        <Text mb={6} lineHeight="tall">
          To actually execute each stage in the pipeline, Tauri's "Command" API is used. Put simply, the "Command" API allows Tauri to spawn a child process for each pipeline stage, which uses the respective dependency binary, along
          with preset command line options, to execute the stage and receive an output file. Each output file is piped into the subsequent stages until the HDRI is generated. It's these commands that are overwritten if the user has
          toggled "advanced" mode and supplied their own commands.
        </Text>
        {/* Integration */}
        <Heading size="lg" mb={4}>Integration</Heading>
        <Text>
          Tauri’s invoke API connects the frontend and backend for real-time interaction. The API allows the backend pipeline to be "invoked" by the frontend UI. More generally, it allows the backend to integrate with any part of the
          frontend simply by creating a new Tauri "Command."
        </Text>
        <Button
          mt={4}
          bg="#D73F09"
          color="white"
          _hover={{ bg: 'darkgray' }}
          onClick={() => window.open('https://v2.tauri.app/start/', '_blank')}
        >
          Learn More
        </Button>
      </Box>
    </VStack>
  );
}