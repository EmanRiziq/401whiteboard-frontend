import axios from 'axios';

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class DisplayPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    getPostComments = async () => {
        const id = this.props.id
        const postComments = await axios.get(`http://localhost:3000/getPostComment/${id}`)
        console.log(postComments.data.comments)

        this.setState({
            data: postComments.data,
        })

    }

    componentDidMount() {
        this.getPostComments();
    }


    render() {
        return (
            <div>
                {/* <Row xs={1} md={2} className="g-4">
                    {this.state.data.comments.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{idx}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> */}
                {/* <p> title {this.data.title}</p> */}

            </div>
        );
    }
}

export default DisplayPost;