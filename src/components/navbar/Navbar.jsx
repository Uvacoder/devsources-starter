import { HStack, Heading, Spacer, IconButton } from "@chakra-ui/react";
import { BsList, BsX } from "react-icons/bs";
import { Nav, Title, MenuButton } from "./Navbar.style";
import { Links } from "./Links";

/**
 * TODO - add drawer that transitions [slide] in and fixed on desktop
 */

export const Navbar = ({ onClick, isOpen }) => {
  return (
    <>
      <Nav>
        <Title>.sources</Title>
        <Spacer />
        <MenuButton icon={isOpen ? <BsX /> : <BsList />} onClick={onClick} />
      </Nav>
      <Links isOpen={isOpen} />
    </>
  );
};
