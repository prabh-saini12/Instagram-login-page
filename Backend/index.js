const express = require('express')
const app = express()
const connectToMongo = require('./db')
require('dotenv').config();
const port = process.env.PORT
const cors = require('cors');
app.use(express.json())
// call connectToMongo function
connectToMongo();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Available Routes
app.use('/api/auth', require('./routes/auth'))

// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})