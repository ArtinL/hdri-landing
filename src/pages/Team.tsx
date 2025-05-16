import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

export default function Team() {
    return (
        <VStack spacing={4} align="stretch" p={8} bg="lightgray" minH="100vh">
            <Box bg="#303030" p={6} borderRadius="sm" color="white">
                <Heading size="xl" mb={4}>The Team</Heading>
                <Text>Meet the Oregon State University Senior Software Engineering Capstone 2024-2025 Architectural Lighting Design: Image Processing and Analysis Software team.</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Emmitt Carter</Heading>
                <Text>carteemm@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Colin Cone</Heading>
                <Text>coneco@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Samuel Croll</Heading>
                <Text>crolls@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Artin Lahni</Heading>
                <Text>lahnia@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Lou Pfluke</Heading>
                <Text>pflukeh@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Maddie Thompson</Heading>
                <Text>thompma8@oregonstate.edu</Text>
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Dr. Clotilde Pierson </Heading>
                <Text>clotilde.pierson@oregonstate.edu</Text>
                <Text>Assistant Professor of Architectural Engineering in the School of Civil/Construction Engineering</Text>
                <Button mt={2} bg="#D73F09" color="white" _hover={{ bg: 'darkgray' }} onClick={() => window.open('https://www.clotildepierson.com/', '_blank')}>
                    Website
                </Button>
                
            </Box>
            <Box bg="lightgray" p={2} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Alexander Ubrich</Heading>
                <Text>alexander.ulbrich@oregonstate.edu</Text>
                <Text>Instructor in the School Electrical Engineering/Computer Science</Text>
                <Button mt={2} bg="#D73F09" color="white" _hover={{ bg: 'darkgray' }} onClick={() => window.open('https://www.alexulbrich.com/', '_blank')}>
                    Website
                </Button>
            </Box>
            <Box bg="lightgray" p={2} pt={8} borderRadius="sm" color="black">
                <Heading size="md" mb={2}>Previous Contributors</Heading>
                <Heading size="sm" mt={2}>2022-2023 Development Team</Heading>
                <Text>Xiangyu &quot;Joey&quot; Li</Text>
                <Text>Liam Zimmermann</Text>
                <Text>Nathaniel Klump</Text>
                <Heading size="sm" mt={2}>2023-2024 Development Team</Heading>
                <Text>Jacob Springer</Text>
                <Text>Liam Zimmermann</Text>
                <Text>Shanti Morrell</Text>
            </Box>
        </VStack>
    );
}
