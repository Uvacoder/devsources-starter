import { VStack, HStack, Heading, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <HStack w="100%">
      <VStack
        align="left"
        justify="center"
        spacing="2rem"
        minH="50vh"
        borderRadius="1rem"
        w="100%"
      >
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
    </HStack>
  );
};
