import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Hero } from "./components/Hero";
import { Subjects } from "./components/Subjects";

export const Home = () => {
  return (
    <VStack w="100%" justify="left" spacing="4rem">
      <Hero />
      <Subjects />
      <Helmet>
        <meta
          property="og:image"
          content="hhttps://miro.medium.com/max/1200/1*2szLZ_RoEzNdA7kWAtKO8g.png"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </Helmet>
    </VStack>
  );
};
