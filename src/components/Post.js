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

function Post() {
    const { user,canDo } = useAuth();
    const { posts, getPosts, deletePost, setEditMode, editMode, setSelectedPost } = usePost()

    useEffect(() => {
        getPosts();
        console.log(posts)
    }, []
    );

    return (
        <div>
            <AddPostForm posts={posts} getPosts={getPosts} />
            <Row xs={1} md={3} className="g-4">
                <Col>
                    {posts &&
                        <>
                            {
                                posts.map((item, idx) => (
                                    <Card key={idx} border="secondary" >
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.content}
                                                <DisplayPost id={item.id} />
                                            </Card.Text>
                                        </Card.Body>

                                        <>

                                            {canDo('update',  item.userID ) === true ?
                                                <Button onClick={() => {
                                                    setEditMode(true);
                                                    setSelectedPost(item)
                                                }}>Edit post</Button>
                                                : null}
                                            {canDo('delete', item.userID) === true ?
                                                <Button onClick={() => {
                                                    deletePost(item.id);
                                                }}>delete post</Button>
                                            :null}
                                        </>



                                        {editMode &&
                                            <EditPost selectedPost={item.id} />}
                                    </Card>
                                ))
                            }
                        </>}


                </Col>
            </Row>
        </div>
    );
}
export default Post;















// { canDo( 'update', {item.user_id}) === true ?
// <Button onClick={() => {
//     setEditMode(true);
//     setSelectedPost(item)
// }}>Edit post</Button>}
// {canDo('delete', item.user_id) === true ?
//     <Button onClick={() => {
//         deletePost(item.id);
//     }}>delete post</Button>}
