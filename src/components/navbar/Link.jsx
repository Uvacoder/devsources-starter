import { HStack } from "@chakra-ui/layout";
import React from "react";

export const Link = ({ children }) => (
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
    {children}
  </HStack>
);
