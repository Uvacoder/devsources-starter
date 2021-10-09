import { VStack } from "@chakra-ui/layout";

export const Layout = ({ children }) => {
  return (
    <VStack w="100%" minH="100vh" p="5rem">
      {children}
    </VStack>
  );
};
