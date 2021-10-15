import React from "react";
import { VStack } from "@chakra-ui/react";

export const Links = ({ isOpen }) => {
  return (
    <VStack
      w="300px"
      h="100vh"
      pos="fixed"
      left={0}
      transform={`translateX(${isOpen ? "0" : "-500px"})`}
      borderRight="1px solid black"
      transition="all .3s ease"
    >
      {/* code */}
    </VStack>
  );
};
