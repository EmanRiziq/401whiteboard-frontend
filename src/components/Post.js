import React, {  useEffect } from 'react';
import AddPostForm from './Add-post-form';
import DisplayComments from './DisplayComments';
import EditPost from './EditPost';
import { useAuth } from '../Context/AuthContext';
import { usePost } from '../Context/PostContext'


import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    ButtonGroup,
    Button,
    Divider
} from '@chakra-ui/react'


function Post() {
    const {  canDo } = useAuth();
    const { posts, getPosts, deletePost, setEditMode, editMode, setSelectedPost } = usePost()

    useEffect(() => {
        getPosts();
    }, []
    );
    return (
        <div>
            <AddPostForm posts={posts} getPosts={getPosts} />
            {posts &&
                <>
                    {
                        posts.map((item, idx) => (
                            <Card key={idx} maxW='sm' bg="authColor.100">
                                <CardBody bg="authColor.100">
                                    <Image
                                        src={item.img}
                                        // alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3' bg="authColor.200">>
                                        <Heading size='md'>{item.title}</Heading>
                                        <Text>
                                            {item.content}
                                            <DisplayComments id={item.id} />
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        {canDo('update', item.userID) === true ?
                                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                                setEditMode(true);
                                                setSelectedPost(item)
                                            }} >
                                                Edit Post
                                            </Button>
                                            : null}
                                        {canDo('delete', item.userID) === true ?

                                            <Button variant='ghost' colorScheme='blue' onClick={() => {
                                                deletePost(item.id);
                                            }}>
                                                Delete Post
                                            </Button>
                                            : null}

                                    </ButtonGroup>
                                </CardFooter>
                                {editMode &&
                                            <EditPost selectedPost={item.id} />}
                            </Card>
                        ))
                    }
                </>
            }
        </div>
    )
}
export default Post;

