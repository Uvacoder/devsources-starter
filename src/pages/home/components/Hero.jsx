import { VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <VStack align="left" justify="center" spacing="2rem" minH="70vh">
      <VStack align="left" spacing="0">
        <Heading color="#0a2540" fontSize="6xl">
          Web Developer
        </Heading>
        <Heading color="#0a2540" fontSize="6xl">
          Resources
        </Heading>
      </VStack>
      <Text color="#425466">
        A collection of the best web developer resources.
      </Text>
    </VStack>
  );
};
