import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const api = axios.create({
    baseURL: "http://localhost:5000/api/items",
    header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

function ItemsForm() {
    const [item, setItem] = useState("")
    const [itemdata, setItemdata] = useState([])
    const [updateproduct, setUpdateproduct] = useState("")
    const [response, setResponse] = useState("")
    function handleChange(e) {
        setItem(e.target.value)
    }
    function handleUpdate(e) {
        setUpdateproduct(e.target.value)
    }

    async function addItem() {
        let currentdate = new Date();
        try {
            let res = await api.post('/', { "product": item, "date": currentdate })
            setResponse(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    async function deleteItem() {
        let config = {
            headers: {
                Authorization: "authToken",
            },
            data: { "product": item },
        };
        try {
            let res = await api.delete('/', config);
            setResponse(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function updateItem() {
        try {
            let res = await api.put('/', { "product": item, "updateproduct": updateproduct });
            setResponse(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function getItems() {
        try {
            let res = await api.get('/');
            console.log(res.data)
            setItemdata(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function delupd(itemname) {
        console.log(itemname)

        let config = {
            headers: {
                Authorization: "authToken",
            },
            data: { "product": itemname.product },
        };
        try {
            let res = await api.delete('/', config)
            let resultdata = await api.get('/');
            setResponse(res.data)
            setItemdata(resultdata.data)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <Container>
            <form>
                <div className="form-group mx-sm-3 m-2">
                    <label htmlFor="addItem" className='mt-3'>Item</label>
                    <input type="text" className="form-control" placeholder="Enter Item Name" onChange={handleChange} value={item} />
                    <small id="emailHelp" className="form-text text-muted">Enter the name of the item perfom CRUD on Mongodb</small>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="updateItem" className='mt-3'>Update Item</label>
                    <input type="text" className="form-control" placeholder="Update Item Name" onChange={handleUpdate} value={updateproduct} />
                </div>
                <button type='button' onClick={addItem} className="btn btn-primary m-3">Add</button>
                <button type='button' onClick={deleteItem} className="btn btn-danger m-3">Delete</button>
                <button type='button' onClick={updateItem} className="btn btn-secondary m-3">Update</button>
                <button type='button' onClick={getItems} className="btn btn-success m-3">Get Items</button>
            </form>
            <p className='response' style={{ color: "black", fontFamily: "Source Sans Pro", fontSize: "18px" }}>{response}</p>
            {/* //React Bootstrap */}
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {itemdata.map((item, index) => (
                        <CSSTransition key={index} timeout={500} classNames="fade">
                            <ListGroupItem key={index}>
                                <Button className='remove-item' color='danger' size='sm' onClick={() => { delupd(item) }}>&times;</Button>
                                {item.product}
                                {/* <button type='button' onClick={() => { delupd(item) }} className="btn btn-outline-danger">❌</button> */}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}

                </TransitionGroup>
            </ListGroup>
        </Container >
    );
}

export default ItemsForm;
