const express = require('express');
const { getdb, createdb, deletedb, updatedb } = require('../../mongo_database');
const routes = express.Router();



routes.get('/', (req, res) => {
    console.log("Get request")
    getdb(req.body).then(result => {
        res.json(result)
    })
})

routes.post('/', (req, res) => {
    console.log("POST REQUEST")
    console.log(req.body.product)
    console.log(req.body.date)
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
            res.send(`${req.body.product} deleted from database`)
        }
        else {
            res.send(`${req.body.product} does not exist in the database.`)
        }
    })

})

routes.put('/', (req, res) => {
    console.log(req.body)
    updatedb(req.body).then(result => {
        if (result === true) {
            res.send(`Item updated from ${req.body.product} to ${req.body.updateproduct}.`)
        }
        else {
            res.send(`${req.body.product} does not exist in the database.`)
        }
    })
})

module.exports = routes