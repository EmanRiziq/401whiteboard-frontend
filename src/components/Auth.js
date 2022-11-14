import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Post from './Post';
import { useAuth } from '../Context/AuthContext';
import { When } from 'react-if';
import { useEffect } from 'react';
import cookies from 'react-cookies';
import { Link as ReachLink } from "@reach/router"

import {
    Flex,
    Box,
    Link,
    Button,
    HStack,
    Spacer,
    Heading
} from "@chakra-ui/react";

function Auth(props) {
    const { user, autherized, isAutherized, handelSignOut } = useAuth();
    // console.log("user", user)
    useEffect(() => {
        if (cookies.load("token")) {
            isAutherized(true);
        }
    }, []);

    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                // height="100vh"
                backgroundColor="pink.100"
                justifyContent="center"
                alignItems="center"
            >
                <When condition={!autherized}>
                    <Signin />
                    {/* <Signup /> */}
                    <Box>
                        New to us?{" "}
                        <Link color="teal.500" as={ReachLink} to="/Signup">
                            Sign Up
                        </Link>
                    </Box>
                </When>
                <When condition={autherized}>
                    {/* <HStack spacing='50px'> */}
                    <Flex  >

                    <Box>
                        {/* <h3> Hello {cookies.load("userName")}</h3> */}
                        <Heading size='md'>Hello {cookies.load("userName")}</Heading>
                        </Box>

                        <Spacer />
                        <Box>
                        <Button
                            onClick={handelSignOut}
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
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