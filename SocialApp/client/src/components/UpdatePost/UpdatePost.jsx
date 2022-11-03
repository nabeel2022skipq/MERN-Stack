import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'
import { updatePost } from '../../actions/postActions'
import PropTypes from 'prop-types'
import * as MdIcons from 'react-icons/md'
function UpdatePost(props) {
    const [updatetitle, setUpdateTitle] = useState("")
    const [updatedesc, setUpdateDesc] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updPost() {
        setShow(false)
        let postId = props.postupdate.id;
        let postTitle = props.postupdate.title;
        let postDescription = props.postupdate.description;
        let postUpdating = {
            "id": postId,
            "title": postTitle,
            "description": postDescription,
            "updateTitle": updatetitle,
            "updateDescription": updatedesc
        }
        props.updatePost(postUpdating)

    }
    return (
        <>
            <button className='btn btn-outline-info m-3' onClick={handleShow}><MdIcons.MdTipsAndUpdates></MdIcons.MdTipsAndUpdates>&nbsp; Update Post</button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header className="border border-info " style={{ background: "#28282B" }}>
                    <Modal.Title style={{ color: "#03e9f4" }}>Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border border-info " style={{ background: "#28282B" }}>
                    <Form>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Update Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add title"
                                autoFocus
                                onChange={e => setUpdateTitle(e.target.value)}
                                style={{ backgroundColor: "#28282B", color: "White" }} />

                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Update Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type something..."
                                autoFocus
                                onChange={e => setUpdateDesc(e.target.value)}
                                style={{ backgroundColor: "#28282B", color: "White" }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <button type="button" className='btn btn-outline-info mt-4' onClick={updPost}>Update</button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
UpdatePost.propTypes = {
    updatePost: PropTypes.func.isRequired
}
const mapDispatchToProps = {
    updatePost
}
export default connect(null, mapDispatchToProps)(UpdatePost);
