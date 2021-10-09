import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { Subjects } from "./components/Subjects";

export const Home = () => {
  return (
    <VStack w="100%" justify="left" spacing="4rem">
      <Hero />
      <Subjects />
    </VStack>
  );
};
