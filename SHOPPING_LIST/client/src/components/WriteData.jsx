import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { insertItem } from '../actions/ItemsActions';
import { UncontrolledAlert, Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function WriteData(props) {
    const [item, setItem] = useState("")

    function handleChange(e) {
        setItem(e.target.value)
    }
    function addItem() {
        let currentdate = new Date();
        let newItem = { "product": item, "date": currentdate }
        props.insertItem(newItem)

    }
    // useEffect(() => {
    //dispath loadUser in order to check if the user login/signup -> authenticated
    //     store.dispatch(loadUser());
    //     if (props.error.id === 'AUTH_FAIL') {
    //         setmsgValue(props.error.msg.ERROR)
    //     }
    //     else {
    //         setmsgValue(null)
    //     }
    // })
    return (
        <Container>
            {!props.isAuthenticated ? <UncontrolledAlert color='info'>Login or Signup to perform CRUD operation </UncontrolledAlert> :
                <form>
                    <div className="form-group mx-sm-3 m-2">
                        <label htmlFor="addItem" className='mt-3'>Item</label>
                        <input type="text" className="form-control" placeholder="Enter Item Name" onChange={handleChange} value={item} />
                        <small id="emailHelp" className="form-text text-muted">Enter the name of the item perfom CRUD on Mongodb</small>
                    </div>
                    <center>
                        <button type='button' onClick={addItem} className="btn btn-secondary m-3 shadow shadow" style={{ width: "20rem" }}>Add New Item</button>
                        <hr></hr>
                    </center>
                </form>
            }
            {!props.isAuthenticated ? <p style={{ fontSize: "3rem", marginBottom: "10px" }} className="forgot-password text-center">
                LOGIN or SIGNUP <Link to="/sign-up">sign up?</Link>
            </p> : null}
        </Container>
    );
}

WriteData.propTypes = {
    insertItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapDispatchToProps = {
    insertItem
}
function mapStateToProps(state) {
    return {
        item: state.item,
        error: state.error,
        isAuthenticated: state.auth.isAuthenticated

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteData);