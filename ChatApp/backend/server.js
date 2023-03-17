const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db');

const user = require('./routes/api/users')
const auth = require('./routes/api/auth')

const app = express();
app.use(express.json());
app.use(cors())

connectDB();

app.use('/api/users', user)
app.use('/api/users/auth', auth)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})