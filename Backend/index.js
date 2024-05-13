require('dotenv').config()
const express = require("express")
const cors = require('cors')

// import router
const router = require('./Routes/router')

// import db connections
require('./DB/connection')

// create an express application
const Todo = express()
Todo.use(express.json())


Todo.use(cors())
Todo.use(router)

// port creatation  steps 
const PORT = 5000 || process.env.PORT


Todo.listen(PORT, () => {
    console.log(`todo app server started at prot${PORT}and waiting for client requset!!!`);
})

// browser only chooies the get method 
// http get requests resolving to =http://localhost:4000/ this https 
Todo.get('/', (req, res) => {
    res.send(`<h1> get methord project hub server and waiting for the request !!!</h1>`)
})