import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const api = axios.create({
    baseURL: "http://localhost:5000/api/items",
    header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

function ItemsForm() {
    const [item, setItem] = useState("")
    const [variantstyle, setVariantStyle] = useState("")
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
        let variants = ["primary", "secondary", "light", "dark", "info", "danger", "warning"]
        let st = variants[Math.floor(Math.random() * variants.length)]
        setVariantStyle(st)
        try {
            let res = await api.get('/');
            console.log(res.data)
            setItemdata(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function delupd(itemname) {
        let variants = ["primary", "secondary", "light", "dark", "info", "danger", "warning"]
        let st = variants[Math.floor(Math.random() * variants.length)]
        setVariantStyle(st)
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
        <React.Fragment>
            <form>
                <div class="form-group mx-sm-3 m-2">
                    <label for="addItem" className='mt-3'>Item</label>
                    <input type="text" class="form-control" placeholder="Enter Item Name" onChange={handleChange} value={item} />
                    <small id="emailHelp" class="form-text text-muted">Enter the name of the item perfom CRUD on Mongodb</small>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="updateItem" className='mt-3'>Update Item</label>
                    <input type="text" class="form-control" placeholder="Update Item Name" onChange={handleUpdate} value={updateproduct} />
                </div>
                <button type='button' onClick={addItem} className="btn btn-primary m-3">Add</button>
                <button type='button' onClick={deleteItem} className="btn btn-danger m-3">Delete</button>
                <button type='button' onClick={updateItem} className="btn btn-secondary m-3">Update</button>
                <button type='button' onClick={getItems} className="btn btn-success m-3">Get Items</button>
            </form>
            <p>{response}</p>
            <ListGroup as="ol" numbered>
                {itemdata.map((item, index) => (
                    <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-center" variant={variantstyle}>
                        <div className="ms-2">
                            <div className="fw-bold">{item.product}</div>
                        </div>
                        <button type='button' onClick={() => { delupd(item) }} className="btn btn-outline-danger">❌</button>
                    </ListGroup.Item>))}
            </ListGroup>
        </React.Fragment >
    );
}

export default ItemsForm;
