import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import { insertPost } from '../../actions/postActions';



function CreateData(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function createItem(e) {
        setShow(false)
        let newPost = {
            "title": title,
            "description": desc,
            "email": props.user.email,
            "name": props.user.name
        }
        props.insertPost(newPost);
    }
    return (
        <>
            {props.isAuthenticated ? <button className='btn btn-outline-info btn-lg m-5' onClick={handleShow}  >
                Post
            </button> : null}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border border-info " style={{ background: "#28282B" }}>
                    <Modal.Title style={{ color: "#03e9f4" }}>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border border-info" style={{ background: "#28282B" }}>
                    <Form>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Add Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add title"
                                autoFocus
                                onChange={e => setTitle(e.target.value)}
                                style={{ backgroundColor: "#28282B", color: "White" }} />

                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label style={{ color: "#03e9f4" }}>Add Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type something..."
                                autoFocus
                                onChange={e => setDesc(e.target.value)}
                                style={{ backgroundColor: "#28282B", color: "White" }} />
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

CreateData.propTypes = {
    posts: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.bool

}
const mapDispatchToProps = {
    insertPost
}

function mapStateToProps(state) {
    return {
        posts: state.post.posts,
        error: state.error,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateData);