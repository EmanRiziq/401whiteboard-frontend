import React, { Component } from 'react';
import axios from 'axios';
import AddPostForm from './Add-post-form';
import DisplayPost from './Display-Post';

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

                {this.state.data.map((item, idx) => {
                    return (
                        <DisplayPost key={idx} id={item.id} />
                    )
                })}
            </div>
        );
    }
}

export default Post;