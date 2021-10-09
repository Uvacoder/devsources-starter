import {
  HStack,
  Heading,
  Spacer,
  IconButton,
  Link as CLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";

const Links = [{ path: "/", name: "Home", icon: <BsHouse /> }];

export const Navbar = () => {
  return (
    <HStack w="100%" maxW="6xl" pos="fixed" top="0" p="1rem 0" spacing="2rem">
      <Heading fontSize="2xl" color="#0a2540">
        Dev Sources
      </Heading>
      <Spacer />

      <HStack spacing="1rem">
        {Links.map((link, i) => (
          <CLink key={i} _hover={{ opacity: 0.6 }}>
            <Link style={{ display: "flex", alignItems: "center" }}>
              {link.icon} {link.name}
            </Link>
          </CLink>
        ))}
      </HStack>
      <HStack spacing="1rem">
        <IconButton icon={<p>❤️</p>} />
        <IconButton icon={<p>🌜</p>} />
      </HStack>
    </HStack>
  );
};
