import { HStack, Heading, Spacer, IconButton } from "@chakra-ui/react";
import { BsList, BsX } from "react-icons/bs";
import { style } from "./Navbar.style";
import { Links } from "./Links";

/**
 * TODO - add drawer that transitions [slide] in and fixed on desktop
 */

export const Navbar = ({ onClick, isOpen }) => {
  return (
    <>
      <HStack {...style.navbar}>
        <Heading {...style.title}>.sources</Heading>
        <Spacer />
        <IconButton
          {...style.button}
          icon={isOpen ? <BsX /> : <BsList />}
          onClick={onClick}
        />
      </HStack>
      <Links isOpen={isOpen} />
    </>
  );
};
