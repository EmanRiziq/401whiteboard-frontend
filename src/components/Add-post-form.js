import axios from 'axios';
import React, { Component } from 'react';

class AddPostForm extends Component {
    constructor(props) {
        super(props);
    }

    addNewPost = async (e) => {
        e.preventDefault()
        const data = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'img': e.target.img.value||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU"
        }
        const URL = process.env.REACT_APP_PORT|| 'https://eman-whiteboard.herokuapp.com'
        const res = await axios.post(`${URL}/post`, data);
        e.target.content.value = ''
        e.target.title.value = ''
        // this.props.data()

    }

    render() {
        return (
            <div >
                <form onSubmit={this.addNewPost}>
                    <label>post Title</label>
                    <input type="text" name='title' required={true} />
                    <label>post Content</label>
                    <input type="text" name='content' required={true} />
                    <label>Image</label>
                    <input type="text" name='img' />
                    <div className='flex justify-center gap-16 '>
                        <button >post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPostForm;