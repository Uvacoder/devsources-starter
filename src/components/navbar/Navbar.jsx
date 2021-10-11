import {
  HStack,
  Heading,
  Spacer,
  IconButton,
  Link as CLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

export const Navbar = () => {
  return (
    <HStack
      w="100%"
      maxW="6xl"
      pos="fixed"
      top="0"
      py="1rem"
      px="2rem"
      spacing="2rem"
    >
      {/* title */}
      <Heading fontSize="2xl" color="#0a2540">
        .sources
      </Heading>
      <Spacer />

      <IconButton bg="none" fontSize="24px" icon={<BsList />} />
    </HStack>
  );
};
