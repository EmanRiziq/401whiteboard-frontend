import axios from 'axios';
import React, { Component, useState } from 'react';
import cookies from 'react-cookies';
import {
    Input,
    Button,
    InputGroup,
    Stack, VStack,
    InputLeftElement,
    Box,
    FormControl
} from "@chakra-ui/react";

function AddPostForm(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');



  const  addNewPost = async (e) => {
        e.preventDefault()
        const data = {
            'title': title,
            'content': content,
            'img': img|| "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU",
            'userID': parseInt(cookies.load("userID"))
        }
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        await axios.post(`${URL}/post`, data, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        });
        alert('new Post created');
        props.getPosts()

        setTitle ('')
        setContent('')
        setImg('')
     
    }

    return (
        <Box>
            <VStack
                marginTop={10}
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form
                        action="" onSubmit={addNewPost}
                    >
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
                                    />
                                    <label>post Title</label>
                                    <Input name='title' type="text" placeholder="post Title" required={true}
                                        onChange={e => setTitle(e.target.value)}

                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <label>post Content</label>
                                    <Input name='title' type="text" placeholder="Content" required={true}
                                        onChange={e => setContent(e.target.value)}

                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <label>Image</label>
                                    <Input name='img' type="text" placeholder="Img"
                                        onChange={e => setImg(e.target.value)}

                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Add post
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </VStack>
        </Box>
    );
}

export default AddPostForm;


            // <div >
            //     <form onSubmit={this.addNewPost}>
            //         <label>post Title</label>
            //         <input type="text" name='title' required={true} />
            //         <label>post Content</label>
            //         <input type="text" name='content' required={true} />
            //         <label>Image</label>
            //         <input type="text" name='img' />
            //         <div className='flex justify-center gap-16 '>
            //             <button >Add post</button>
            //         </div>
            //     </form>
            // </div>