import axios from 'axios';

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cookies from 'react-cookies';


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
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        // const URL = 'https://eman-whiteboard.herokuapp.com'
        const postComments = await axios.get(`${URL}/getPostComment/${id}`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        })

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
                        return <li key={idx}>{item.content} created by {cookies.load('userName')}</li>
                    }
                    )
                }
            </>
        );
    }
}

export default DisplayPost;


