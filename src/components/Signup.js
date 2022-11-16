import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import cookies from 'react-cookies';
import { useAuth } from '../Context/AuthContext';

import {
    Heading,
    Input,
    Button,
    InputGroup,
    Stack, HStack,
    InputLeftElement,
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    Radio,
    RadioGroup
} from "@chakra-ui/react";

function Signup() {
    // const [roletype, setroletype] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [roletype, setroletype] = useState("user")


    const { handleSignup } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup(name, password, confirmPassword,roletype)
    }



    useEffect(() => {
        console.log("signup")
    }, []);

    const onChangeValue = (event) => {
        console.log(event)
        setroletype(event)
    }

    return (
        <>
            <Box>
                <HStack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form action="" onSubmit={handleSubmit}>
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
                                        // children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="text" placeholder="User Name"
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"
                                                }
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="confirm password"
                                            onChange={e => setConfirmPassword(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"
                                                }
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <RadioGroup onChange={onChangeValue} defaultValue='user' >
                                        <Stack direction='row'>
                                            <Radio value='user' >User</Radio>
                                            <Radio value='admin'>Admin</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Signup
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </HStack>
            </Box>





            {/* <div>
                <h2> new user?</h2>
                <h5>Sign up</h5>
                <form action="" onSubmit={handleSignup}>
                    <input type="text" placeholder='username' name='username' required={true} />
                    <input type="text" placeholder='password' name='password' required={true} />
                    <input type="text" placeholder='confirm password' name='confirmpassword' required={true} />
                    <div >
                        <input type="radio" value="user" name="role"
                            checked
                            onChange={onChangeValue}
                        /> User
                        <input type="radio" value="admin" name="role"
                            onChange={onChangeValue} />
                        Admin
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div> */}
        </>
    );
}

export default Signup;