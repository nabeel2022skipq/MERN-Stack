import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function CreateData(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function createItem(e) {
        setShow(false)
    }
    return (
        <>
            <button className='btn btn-outline-info btn-lg m-5' onClick={handleShow}  >
                Post
            </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header style={{ background: "#28282B" }}>
                    <Modal.Title style={{ color: "#03e9f4" }}>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "#28282B" }}>
                    <Form>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Add Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add title"
                                autoFocus
                                style={{ backgroundColor: "#28282B" }} />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Type Something to Post</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type something..."
                                autoFocus

                                style={{ backgroundColor: "#28282B" }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <button type="button" className='btn btn-outline-info mt-4' onClick={createItem}>Post</button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default CreateData;