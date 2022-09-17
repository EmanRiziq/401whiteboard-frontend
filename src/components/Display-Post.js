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
            haveComments: false
        }
    }

    getPostComments = async () => {
        const id = this.props.id
        const postComments = await axios.get(`http://localhost:3000/getPostComment/${id}`)
        // console.log(postComments.data.comments)

        this.setState({
            data: postComments.data.comments,
            haveComments: true,
        })


    }

    componentDidMount() {
        this.getPostComments();
    }


    render() {
        return (
            <>
                {
                    this.state.haveComments &&
                    this.state.data.map((item, idx) => {
                        return this.state.data.content
                    }
                    )
                }

                

            </>
        );
    }
}

export default DisplayPost;


