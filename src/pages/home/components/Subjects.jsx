import { Stack, HStack, Spacer, Heading, Box, Text } from "@chakra-ui/layout";

const subjects = [
  { title: "Development", icon: "💻", color: "blue" },
  { title: "Design", icon: "🖌️", color: "orange" },
];

const Card = ({ title, icon, color }) => {
  return (
    <Box
      w="100%"
      p="4rem"
      borderRadius="1rem"
      bg={`${color}.100`}
      border={`1px solid ${color}.100`}
      cursor="pointer"
      opacity=".8"
      transition=".3s"
      _hover={{ bg: `${color}.200`, transform: "translateY(-2px)" }}
    >
      <HStack>
        <Heading color={`${color}.600`}>{title}</Heading>
        <Spacer />
        <Heading>{icon}</Heading>
      </HStack>
    </Box>
  );
};

export const Subjects = () => {
  return (
    <Stack direction={["column", "column", "row"]} w="100%" spacing="4rem">
      {subjects.map((subject) => (
        <Card title={subject.title} icon={subject.icon} color={subject.color} />
      ))}
    </Stack>
  );
};
