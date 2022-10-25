const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

//Will direct the request to the following path
const items = require('./routes/api/items')

//Creating an express application
const app = express();

//Body-parser is the Node. js body parsing middleware.
// It is responsible for parsing the incoming request bodies in a middleware before you handle it. 
app.use(bodyParser.json());
app.use(cors());

//Any request at /api/items will be reffered to the items variable
app.use('/api/items', items)
app.listen(5000, () => {
    console.log("Server started")
})