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

// add-todo
router.post('/todo/add',jwtmiddleware,TodoContoller.addTodo)

// getalluser-todo
router.get('/user/all-todo',jwtmiddleware,TodoContoller.allUsertodo)

// update
router.put('/todo/edit/:id',jwtmiddleware,TodoContoller.editTodoController)

// delete
router.delete('/todo/remove/:id',jwtmiddleware,TodoContoller.deleteTodoController)




// export part to export to connection to  index.js to use server appliction
module.exports = router