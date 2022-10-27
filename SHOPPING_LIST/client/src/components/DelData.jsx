import React from 'react';
import '../components/stylesheetscss/readdata.css'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const api = axios.create({
    baseURL: "http://localhost:5000/api/items",
    header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

function DelData(props) {
    async function deleteItem() {
        let config = {
            headers: {
                Authorization: "authToken",
            },
            data: { "product": props.prod },
        };
        try {
            let res = await api.delete('/', config);
            alert(res.data + ". Refresh page to see new content")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Button className='remove-item' color='danger' size='sm' onClick={deleteItem}>&times;</Button>
    );
}

export default DelData;