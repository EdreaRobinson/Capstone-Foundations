require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getPuppies} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('seed', seed)

app.get('/puppies', getPuppies)



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

// app.listen(4444, () => console.log(`Server running on 4444`))