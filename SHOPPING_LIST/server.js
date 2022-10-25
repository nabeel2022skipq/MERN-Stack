const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { getdb, createdb, deletedb, updatedb } = require('./mongo_database');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Server started")
})

app.get('/', (req, res) => {
    console.log("Get request")
    getdb(req.body).then(result => {
        res.send(result)
    })
})

app.post('/', (req, res) => {
    console.log("POST REQUEST")
    createdb(req.body).then(result => {
        if (result === true) {
            res.send("Item already exist in the Database")
        }
        else {
            res.send("New Item added to the Database")
        }
    })
})

app.delete('/', (req, res) => {
    deletedb(req.body).then(result => {
        if (result === true) {
            res.send("Item deleted from database")
        }
        else {
            res.send("Item does not exist in the database.")
        }
    })

})

app.put('/', (req, res) => {
    updatedb(req.body).then(result => {
        if (result === true) {
            res.send("Item Updated")
        }
        else {
            res.send("Item does not exist in the database.")
        }
    })
})



