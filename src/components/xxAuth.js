import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Post from './Post';
import { useAuth } from '../Context/AuthContext';
import { When } from 'react-if';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies';


import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,HStack, VStack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);





function Auth(props) {
    const { user, autherized, isAutherized, handelSignOut } = useAuth();
    // console.log("user", user)
    useEffect(() => {
        if (cookies.load("token")) {
            isAutherized(true);
        }
    }, []);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);


    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="pink.200"
            justifyContent="center"
            alignItems="center"
        >
            <HStack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </HStack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
    // return (
    //         <div>
    //             <When condition={!autherized}>
    //                 <Signin />
    //                 <Signup />
    //             </When>

    //             <When condition={autherized}>
    //                 <h3> Hello {cookies.load("userName")}</h3>
    //                 <button onClick={handelSignOut}> Sign Out </button>
    //                 <Post />
    //             </When>
    //         </div>
    // );
}

export default Auth;