require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const mongoose = require('mongoose')
   mongoose.connect(process.env.MONGODB_URI) //mongodb://localhost/rob-reds-land

const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
})
// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const charactersRouter = require('./routes/characters')
const cardsRouter = require('./routes/cards')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/api/users', usersRouter)
app.use('/api/users/:userId/characters', charactersRouter)
app.use('/api/users/:userId/cards', cardsRouter)

module.exports = app