import { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input placeholder="Email" fontSize={14} type="email" />
          <Input placeholder="Password" fontSize={14} type="password" />
          {isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
            />
          ) : null}
          <Button w={"full"} colorScheme="blue" size={"sm"}>
            {isLogin ? "Sign up" : "Log in"}
          </Button>
          {/* ------------ OR ----------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex>
            <Image src="/google.png" w={5} alt="google" />
            <Text mx="2" color={"blue.500"} cursor={"pointer"}>Log in with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign up" : "Log in"}
            </Box>
      </Flex>

      </Box>
    </>
  );
};

export default AuthForm;
