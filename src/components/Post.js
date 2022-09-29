import React, { Component } from 'react';
import axios from 'axios';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cookies from 'react-cookies';
import Editpost from './Edit-post-form';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showModal: false,
            selectedPost: null
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
        alert('Post deleted');

        this.getPosts()
    }


    handleClose = () => {
        this.setState({ showModal: false })
    }



    editPost = (id) => {
        this.setState({
            selectedPost: id,
            showModal: true

        })
        this.getPosts()
    }
    handleEdit = async (e) => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        const id = this.state.selectedPost
        // console.log('title ', e.target.title.value)
        // console.log('content ', e.target.content.value)
        // console.log('img ', e.target.img.value)
        const data = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'img': e.target.img.value || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU"
        }
        const updatedData = await axios.put(`${URL}/post/${id}`, data, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        })
        this.getPosts()
    }

    render() {
        return (
            <div>
                <AddPostForm data={this.data} getPosts={this.getPosts}
                />

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
                                            this.editPost(item.id);
                                        }}>Edit post</Button>
                                        <Editpost show={this.state.showModal} handleClose={this.handleClose} handleEdit={this.handleEdit} selectedPost={this.state.selectedPost} />
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