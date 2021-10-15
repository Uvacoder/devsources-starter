import { VStack } from "@chakra-ui/layout";

export const Layout = ({ style, children }) => {
  return (
    <VStack w="100%" justify="center" minH="100vh" p="5rem" overflow="hidden">
      <VStack style={style} w="100%" maxW="6xl" transition={".3s"}>
        {children}
      </VStack>
    </VStack>
  );
};
