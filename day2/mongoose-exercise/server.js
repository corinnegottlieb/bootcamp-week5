// Server setup
const express = require('express')
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})