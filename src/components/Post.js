import React, { Component } from 'react';
import axios from 'axios';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cookies from 'react-cookies';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getPosts();
    }
    // const URL = 'http://localhost:3000'
    // const URL = 'https://eman-whiteboard.herokuapp.com'
    getPosts = async () => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const postsData = await axios.get(`${URL}/post`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        });

        this.setState
            ({
                data: postsData.data.posts
            })
    }

    deletePost = async (id) => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'

        const deletedData = await axios.delete(`${URL}/post/${id}`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        })
        this.getPosts()
    }

    updatePost = async (id) => {
       
        this.getPosts()
    }

    render() {
        return (
            <div>
                <AddPostForm data={this.data} />

                <Row xs={1} md={3} className="g-4">
                    <Col>
                        {this.state.data.map((item, idx) => (

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
                                            this.deletePost(item.id);
                                        }}>delete post</Button>
                                        <Button onClick={() => {
                                            this.updatePost(item.id);
                                        }}>Update post</Button>
                                    </>
                                }


                            </Card>

                        ))}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Post;