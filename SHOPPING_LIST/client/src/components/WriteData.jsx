import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { insertItem } from '../actions/ItemsActions';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

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
    return (
        <Container>
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
        </Container>
    );
}

WriteData.propTypes = {
    insertItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapDispatchToProps = {
    insertItem
}
function mapStateToProps(state) {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteData);