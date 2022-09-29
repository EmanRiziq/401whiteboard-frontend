import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
class Editpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }


    // handleClose = () => {
    //     this.setState({
    //         show: false
    //     })
    // }
    // handleShow = () => {
    //     this.setState({
    //         show: true
    //     })
    // }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>new Title</Form.Label>
                                <Form.Control
                                    type="Text"
                                    name='title'
                                    placeholder={this.props.selectedPost}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>new content</Form.Label>
                                <Form.Control as="textarea" rows={3}  name='content'/>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControImg">
                                <Form.Label>Img URL</Form.Label>
                                <Form.Control as="Text" name='img' />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.handleEdit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default Editpost;