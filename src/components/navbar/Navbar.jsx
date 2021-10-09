import { HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Links = [{ path: "/", name: "🏠 Home" }];

export const Navbar = () => {
  return (
    <HStack w="100%" pos="fixed" top="0" p="1rem 5rem">
      <Heading fontSize="2xl" color="#0a2540">
        Dev Sources
      </Heading>
      <Spacer />

      <HStack>
        {Links.map((link, i) => (
          <Link key={i}>{link.name}</Link>
        ))}
      </HStack>
    </HStack>
  );
};
