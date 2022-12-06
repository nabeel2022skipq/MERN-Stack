const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 5000



//Will direct the request to the following path
const user = require('./routes/api/users')
const auth = require('./routes/api/auth')

//Creating an express application
const app = express();

//Any request at /api/items will be reffered to the items variable
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

app.use('/api/users', user)
app.use('/api/users/auth', auth)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})