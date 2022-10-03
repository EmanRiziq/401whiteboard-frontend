import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Editpost from './Edit-post-form';
import { useAuth } from '../Context/AuthContext';

function Post() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         showModal: false,
    //         selectedPost: null
    //     }
    // }
    const [data, setData] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        getPosts();
    }, []
    );

    const getPosts = async () => {

        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const postsData = await axios.get(`${URL}/post`, {
            headers: {
                Authorization: `Bearer ${cookies.load('token')}`,
            },
        });

        setData({
            
            data: postsData.data.posts[0]
        })


        // setData( (arr) => [...arr, postsData.data.posts]);
        console.log(data)
    }

    const deletePost = async (id) => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'

        const deletedData = await axios.delete(`${URL}/post/${id}`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        })
        alert('Post deleted');

        getPosts()
    }


    const handleClose = () => {
        // this.setState({ showModal: false })
    }



    const editPost = (id) => {
        // this.setState({
        //     selectedPost: id,
        //     showModal: true

        // })
        getPosts()
    }
    const handleEdit = async (e) => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        // const id = this.state.selectedPost
        // console.log('title ', e.target.title.value)
        // console.log('content ', e.target.content.value)
        // console.log('img ', e.target.img.value)
        const data = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'img': e.target.img.value || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU"
        }
        // const updatedData = await axios.put(`${URL}/post/${id}`, data, {
        //     headers: {
        //         Authorization: `Bearer ${user.token}`,
        //     },
        // })
        this.getPosts()
    }

    return (
        <div>
            <AddPostForm data={data} getPosts={getPosts} />
            <Row xs={1} md={3} className="g-4">
                <Col>
                    {0 &&
                        <>
                            {
                                data.map((item, idx) => (
                                    <Card key={idx} border="secondary" >
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.content}
                                                <DisplayPost id={item.id} />
                                            </Card.Text>
                                        </Card.Body>
                                        {
                                            (cookies.load('role')) === 'admin' &&
                                            <>
                                                <Button onClick={() => {
                                                    deletePost(item.id);
                                                }}>delete post</Button>
                                                <Button onClick={() => {
                                                    editPost(item.id);
                                                }}>Edit post</Button>
                                                {/* <Editpost show={this.state.showModal} handleClose={this.handleClose} handleEdit={this.handleEdit} selectedPost={this.state.selectedPost} /> */}
                                            </>
                                        }
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