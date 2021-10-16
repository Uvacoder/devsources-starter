import { IconButton } from "@chakra-ui/button";
import { Heading, HStack } from "@chakra-ui/layout";

export const Nav = ({ children }) => (
  <HStack
    w="100%"
    maxW="6xl"
    pos="fixed"
    top="0"
    py="1rem"
    px="2rem"
    spacing="2rem"
    zIndex="10"
    borderBottom="1px solid black"
    bg="white"
  >
    {children}
  </HStack>
);

export const Title = ({ children }) => (
  <Heading fontSize="2xl" color="#0a2540">
    {children}
  </Heading>
);

export const MenuButton = ({ children, ...rest }) => (
  <IconButton fontSize="24px" bg="none" color="#0a2540" {...rest} />
);
