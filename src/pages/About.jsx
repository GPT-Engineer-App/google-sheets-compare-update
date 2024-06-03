import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">This is the About page of our website.</Text>
    </Box>
  );
}

export default About;
