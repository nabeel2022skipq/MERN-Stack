const express = require('express');
const { getList } = require('../../list_mongodb');
const routes = express.Router();

//Get list request - get
routes.get('/', (req, res) => {
    getList().then(result => {
        res.send(result)
    })
})

//Add to List request - post


//Remove From list reqeust - put

module.exports = routes