const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')

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

//Serve static assets if in production state
if (process.env.NODE_ENV === 'production') {
    //set static assets
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server started")
})