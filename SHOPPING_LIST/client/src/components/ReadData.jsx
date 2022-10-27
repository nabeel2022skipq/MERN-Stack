import React, { useState, useEffect } from 'react';
import '../components/stylesheetscss/readdata.css'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import DelData from './DelData';
import UpdateData from './UpdateData';

const api = axios.create({
    baseURL: "http://localhost:5000/api/items",
    header: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

function ReadData() {
    const [itemdata, setItemdata] = useState([])
    async function getItems() {
        try {
            let res = await api.get('/');
            console.log(res.data)
            setItemdata(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getItems();
    }, []);
    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {itemdata.map((item, index) => (
                        <CSSTransition key={index} timeout={500} classNames="fade">
                            <ListGroupItem key={index}>
                                <DelData prod={item.product}></DelData>
                                {item.product}
                                <UpdateData oldprod={item.product}></UpdateData>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}

                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ReadData;