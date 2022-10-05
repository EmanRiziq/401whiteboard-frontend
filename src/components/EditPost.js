import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { usePost } from '../Context/PostContext'

function EditPost(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }
    const [obj, setObj] = useState()
    const { handleEdit, setEditMode, editMode, selectedPost } = usePost()
    const handletitleChange = (e) => {
        console.log(e.target)
        console.log(e)
        setObj({
            title: e.target.title.value,
            // content: e.target.content.value
        })
    }

    return (
        <>
            <Modal show={editMode} onHide={() => {
                setEditMode(false);
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <label>new Title</label>
                        <input onChange={handletitleChange} type="text" name='title' required={true} defaultValue={selectedPost.title}
                            autoFocus />
                                                    <br></br>

                        <label>new content</label>
                        <input type="text area" rows={3} name='content' defaultValue={selectedPost.content} />
                        <br></br>
                        <label>Img URL</label>
                        <input type="text" name='title' required={true} placeholder={selectedPost.IMG}
                            autoFocus />
                        <br></br>

                        <button variant="primary" onClick={(e) => {
                            e.preventDefault()
                            handleEdit(e);
                        }}>
                            Save Changes
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>


                    <button variant="secondary" onClick={() => {
                        setEditMode(false);
                    }}>
                        Cancel
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditPost;