const express = require('express');
const { getList, addToList, removeFromList } = require('../../list_mongodb');
const routes = express.Router();

//Get list request - get
routes.get('/', (req, res) => {
    getList().then(result => {
        res.send(result)
    })
})

//Add to List request - post
routes.post('/', (req, res) => {
    addToList(req.body).then(result => {
        res.send("Movie added to the list")
    })
})

//Remove From list reqeust - put
routes.put('/', (req, res) => {
    removeFromList(req.body).then(result => {
        res.send("Movie removed from the list")
    })
})

module.exports = routes