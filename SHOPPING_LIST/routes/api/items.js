const express = require('express');
const { getdb, createdb, deletedb, updatedb } = require('../../mongo_database');
const routes = express.Router();



routes.get('/', (req, res) => {
    console.log("Get request")
    getdb(req.body).then(result => {
        res.send(result)
    })
})

routes.post('/', (req, res) => {
    console.log("POST REQUEST")
    createdb(req.body).then(result => {
        if (result === true) {
            res.send(`${req.body.product} already exist in the Database`)
        }
        else {
            res.send(`${req.body.product} added to the Database`)
        }
    })
})

routes.delete('/', (req, res) => {
    console.log(req.body)
    deletedb(req.body).then(result => {
        if (result === true) {
            res.send("Item deleted from database")
        }
        else {
            res.send("Item does not exist in the database.")
        }
    })

})

routes.put('/', (req, res) => {
    updatedb(req.body).then(result => {
        if (result === true) {
            res.send("Item Updated")
        }
        else {
            res.send("Item does not exist in the database.")
        }
    })
})

module.exports = routes