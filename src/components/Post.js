import React, { Component } from 'react';
import axios from 'axios';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    getPosts = async () => {
        const postsData = await axios.get('http://localhost:3000/post ');
        // console.log(postsData.data)
        // console.log(postsData.data.posts)
        // console.log("-------------------")

        this.setState
            ({
                data: postsData.data.posts
            })
    }

    componentDidMount() {
        // console.log("inside the componentDidMount");
        this.getPosts();
        // console.log("data= " + this.state.data.posts)
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
                            </Card>
                        </Col>
                    ))}
                </Row>



            </div>
        );
    }
}

export default Post;