import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditPost from './EditPost';
import { useAuth } from '../Context/AuthContext';
import { usePost } from '../Context/PostContext'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'


function Post() {
    const { user, canDo } = useAuth();
    const { posts, getPosts, deletePost, setEditMode, editMode, setSelectedPost } = usePost()

    useEffect(() => {
        getPosts();
        // console.log(posts)
    }, []
    );

    return (
        <div>
            <AddPostForm posts={posts} getPosts={getPosts} />

            <Accordion allowToggle>
                {posts && posts.map((item, idx) => {
                    <p> {item.title}</p>
                    // <AccordionItem>
                    //     <h2>
                    //         <AccordionButton>
                    //             <Box flex='1' textAlign='left'>
                    //                 {item.title}
                    //             </Box>
                    //             <AccordionIcon />
                    //         </AccordionButton>
                    //     </h2>
                    //     <AccordionPanel pb={4}>
                    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    //     </AccordionPanel>
                    // </AccordionItem>
                })}
                <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    item.title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </AccordionPanel>
                    </AccordionItem>
            </Accordion>
        </div>
    );
}
export default Post;

            // <Row xs={1} md={3} className="g-4">
            //     <Col>
            //         {posts &&
            //             <>
            //                 {
            //                     posts.map((item, idx) => (
            //                         <Card key={idx} border="secondary" >
            //                             <Card.Img variant="top" src={item.img} />
            //                             <Card.Body>
            //                                 <Card.Title>{item.title}</Card.Title>
            //                                 <Card.Text>
            //                                     {item.content}
            //                                     <DisplayPost id={item.id} />
            //                                 </Card.Text>
            //                             </Card.Body>

            //                             <>

            //                                 {canDo('update',  item.userID ) === true ?
            //                                     <Button onClick={() => {
            //                                         setEditMode(true);
            //                                         setSelectedPost(item)
            //                                     }}>Edit post</Button>
            //                                     : null}
            //                                 {canDo('delete', item.userID) === true ?
            //                                     <Button onClick={() => {
            //                                         deletePost(item.id);
            //                                     }}>delete post</Button>
            //                                 :null}
            //                             </>



            //                             {editMode &&
            //                                 <EditPost selectedPost={item.id} />}
            //                         </Card>
            //                     ))
            //                 }
            //             </>}


            //     </Col>
            // </Row>