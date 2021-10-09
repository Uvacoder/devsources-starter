import { VStack } from "@chakra-ui/layout";

export const Layout = ({ children }) => {
  return (
    <VStack w="100%" justify="center" minH="100vh" p="5rem">
      <VStack w="100%" maxW="6xl">
        {children}
      </VStack>
    </VStack>
  );
};
