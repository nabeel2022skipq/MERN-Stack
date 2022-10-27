import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
const api = axios.create({
    baseURL: "http://localhost:5000/api/items",
    header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});
function WriteData() {
    const [item, setItem] = useState("")
    const [response, setResponse] = useState("")

    function handleChange(e) {
        setItem(e.target.value)
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
    return (
        <Container>
            <form>
                <div className="form-group mx-sm-3 m-2">
                    <label htmlFor="addItem" className='mt-3'>Item</label>
                    <input type="text" className="form-control" placeholder="Enter Item Name" onChange={handleChange} value={item} />
                    <small id="emailHelp" className="form-text text-muted">Enter the name of the item perfom CRUD on Mongodb</small>
                </div>
                <button type='button' onClick={addItem} className="btn btn-primary m-3">Add</button>
            </form>
            <p className='response' style={{ color: "black", fontFamily: "Source Sans Pro", fontSize: "18px" }}>{response}</p>
        </Container>
    );
}

export default WriteData;