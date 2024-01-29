import { Box, Container, Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"1px solid blue"}>
          Feedpost
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"} border={"1px solid red"}>
          Suggested User
        </Box>
      </Flex>
    </Container>
  );
};
