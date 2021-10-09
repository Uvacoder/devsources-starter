import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { Hero } from "./components/Hero";

export const Home = () => {
  return (
    <HStack w="100%">
      <Hero />
    </HStack>
  );
};
