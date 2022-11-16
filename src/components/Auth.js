import React from 'react';
import Signin from './Signin';
import Post from './Post';
import { useAuth } from '../Context/AuthContext';
import { When } from 'react-if';
import { useEffect } from 'react';
import cookies from 'react-cookies';
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    Button,
    Spacer,
    Heading,
    HStack,
    Text
} from "@chakra-ui/react";

function Auth() {
    const {  autherized, isAutherized, handelSignOut } = useAuth();
    useEffect(() => {
        if (cookies.load("token")) {
            isAutherized(true);
        }
    }, []);
    let otherPath = useNavigate();
    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                backgroundColor="authColor.100"
                justifyContent="center"
                alignItems="center"
            >
                <When condition={!autherized}>
                    <Signin />
                    <Box>
                        <HStack>
                        <Text> New to us?{" "}</Text>
                        {<Text onClick={() => otherPath('/Signup')} /* style={{cursor: "pointer"} {variant:'ghost'} {colorScheme:'blue'}} */
                        >Signup</Text>}
                        </HStack>
                    </Box>
                </When>
                <When condition={autherized}>
                    <Flex  >
                        <Box>
                            <Heading size='md'>Hello {cookies.load("userName")}</Heading>
                        </Box>

                        <Spacer />
                        <Box>
                            <Button
                                onClick={handelSignOut}
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                // colorScheme="teal"
                                width="full"
                            >
                                Sign Out
                            </Button>
                        </Box>
                    </Flex>
                    {/* </HStack> */}
                    {/* <button onClick={handelSignOut}> Sign Out </button> */}
                    <Post />

                </When>

            </Flex>
            {/* <Post /> */}
        </>

    );
}

export default Auth;