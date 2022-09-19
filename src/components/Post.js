import React, { Component } from 'react';
import axios from 'axios';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

    getPosts = async () => {
        const postsData = await axios.get(`${process.env.REACT_APP_PORT}/post`);
        this.setState
            ({
                data: postsData.data.posts
            })
    }

    deletePost = async (id) => {
        const deletedData = await axios.delete(`https://eman-whiteboard.herokuapp.com/post/${id}`)
        this.getPosts()
    }

    render() {
        return (
            <div>
                <AddPostForm data={this.data} />

                <Row xs={1} md={2} className="g-4">
                    {this.state.data.map((item, idx) => (
                        <Col>
                            <Card key={idx} >
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.content}
                                        <DisplayPost id={item.id} />
                                    </Card.Text>
                                </Card.Body>
                                <Button onClick={() => {
                                    this.deletePost(item.id);
                                }}>delete post</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
export default Post;