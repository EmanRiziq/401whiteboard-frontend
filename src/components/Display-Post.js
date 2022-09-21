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
        const URL = process.env.REACT_APP_PORT|| 'https://eman-whiteboard.herokuapp.com'
        // const URL = 'https://eman-whiteboard.herokuapp.com'
        const postComments = await axios.get(`${URL}/getPostComment/${id}`)
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
                        return <p key={idx}>{item.content} created by {item.userID}</p>
                    }
                    )
                }

                {/* <form onSubmit={deletePost} id={post?.id} className='mt-3'>
                    <button className='text-xl'><AiFillDelete className='h-6 w-fit border-2 m-2 rounded-full bg-slate-500 text-white border-white hover:bg-white hover:text-slate-500' /></button>
                </form> */}

            </>
        );
    }
}

export default DisplayPost;


