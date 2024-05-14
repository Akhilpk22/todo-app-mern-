// assign the mongoose to a varialbe
const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todoTitle:{
        type:String,
        require:true
    },
    todoDescription:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }


})
const Todos = mongoose.model("Todos",TodoSchema)

module.exports = Todos