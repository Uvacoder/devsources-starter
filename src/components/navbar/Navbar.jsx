import { HStack, Heading, Spacer, IconButton } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { style } from "./Navbar.style";

/**
 * TODO - add drawer that transitions [slide] in and fixed on desktop
 */

export const Navbar = () => {
  return (
    <HStack {...style.navbar}>
      <Heading {...style.title}>.sources</Heading>
      <Spacer />
      <IconButton {...style.button} icon={<BsList />} />
    </HStack>
  );
};
