import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { usePost } from '../Context/PostContext'

function EditPost(props) {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [IMG, setIMG] = useState()
    const { handleEdit, setEditMode, editMode, selectedPost, setObj } = usePost()

    const handleTitleChange = (e) => {
        setTitle({
            title: e.target.value,
        })
    }
    const handleContentChange = (e) => {
        setContent({
            content: e.target.value,
        })
    }
    const handleIMGChange = (e) => {
        setIMG({
            IMG: e.target.value,
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
                        <input onChange={handleTitleChange} type="text" name='title' required={true} defaultValue={selectedPost.title}
                            autoFocus />
                        <br></br>

                        <label>new content</label>
                        <input onChange={handleContentChange} type="text area" rows={3} name='content' defaultValue={selectedPost.content} />
                        <br></br>
                        <label>Img URL</label>
                        <input onChange={handleIMGChange} type="text" name='title' required={true} placeholder={selectedPost.IMG}
                            autoFocus />
                        <br></br>
                        <button variant="primary" onClick={(e) => {
                            setObj({
                                title: title,
                                content: content,
                                IMG: IMG
                            })
                            handleEdit(e);
                        }}>
                            Save Changes
                        </button>
                        {/* <label>{obj}</label> */}
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