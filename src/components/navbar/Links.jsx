import React from "react";
import { Link } from "./Link";
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
        <Link>
          <s.Icon />
          <Text>{s.name}</Text>
        </Link>
      ))}
    </VStack>
  );
};
