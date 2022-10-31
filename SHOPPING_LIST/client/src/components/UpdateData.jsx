import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updItem } from '../actions/ItemsActions';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'



function UpdateData(props) {
    const [show, setShow] = useState(false);
    const [updateproduct, setUpdateproduct] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onchange(e) {
        setUpdateproduct(e.target.value)
    }
    async function updateItem(e) {
        setShow(false)
        let children = props.oldprod
        let newItem = { "product": children, "updateproduct": updateproduct }
        props.updItem(newItem)
    }
    return (
        <>
            <Button variant="success" onClick={handleShow} size="sm" style={{ marginRight: "100px", float: "right" }}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Update Item</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new name for updating item"
                                autoFocus
                                onChange={onchange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Button type="button" variant="secondary" onClick={updateItem}>Update</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

UpdateData.propTypes = {
    children: PropTypes.object,
    updItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapDispatchToProps = {
    updItem
}
function mapStateToProps(state) {
    return {
        item: state.item
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateData);