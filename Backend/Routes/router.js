// create express 
const express = require('express')

const router = new  express.Router()
const UserController =require('../Controllers/UserController')
const jwtmiddleware = require('../middlewares/jwtmiddlewares')
const TodoContoller = require('../Controllers/TodoController')



// register api
router.post('/user/register',UserController.register)

// login
router.post('/user/login',UserController.login)

// add-projects
router.post('/todo/add',jwtmiddleware,TodoContoller.addTodo)

// getalluser-todo
router.get('/user/all-projects',jwtmiddleware,TodoContoller.allUsertodo)





// export part to export to connection to  index.js to use server appliction
module.exports = router