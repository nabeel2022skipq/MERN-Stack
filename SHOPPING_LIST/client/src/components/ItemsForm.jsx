import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


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
            {/* <form>
                <input type="text" placeholder="Enter new Item" onChange={handleChange} value={item}></input>
                <input type="text" placeholder="Update Item" onChange={handleUpdate} value={updateproduct}></input>
            </form> */}
            <p>{response}</p>
            <table className='table table-hover table-dark table-sm mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {itemdata.map((item, index) => (<tr key={index}><td>{index}</td><td>{item._id}</td><td>{item.product}</td><td>{item.date}</td></tr>))}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default ItemsForm;
