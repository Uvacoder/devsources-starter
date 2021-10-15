import React from "react";
import { VStack, HStack, Text } from "@chakra-ui/react";
import { sources } from "../../data/sources";

export const Links = ({ isOpen }) => {
  return (
    <VStack
      w="300px"
      h="100vh"
      pos="fixed"
      pt="6rem"
      px="2rem"
      spacing="1rem"
      left={0}
      transform={`translateX(${isOpen ? "0" : "-500px"})`}
      borderRight="1px solid black"
      transition="all .3s ease"
    >
      {sources.map((s) => (
        <HStack
          w="100%"
          spacing="1rem"
          py="1rem"
          px="1rem"
          rounded="md"
          cursor="pointer"
          border="1px solid black"
          transition=".2s"
          _hover={{
            shadow: "lg",
            bg: "purple.600",
            color: "white",
            transform: "translateX(5px)",
            fontWeight: "bold",
          }}
        >
          <s.Icon />
          <Text>{s.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};
