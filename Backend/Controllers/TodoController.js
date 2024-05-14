const Todos = require('../models/TodoSchema')

// addtodo 

exports.addTodo = async(req,res)=>{

    console.log("inside add Toso  function");
    const userId =req.payload
    
    const {todoTitle,todoDescription}= req.body
    

    try{
        const existingTodo = await Todos.findOne({todoDescription})

        if (existingTodo){
            res.status(406).json("todo already exist!! please login")
        }else{
            const newtodo = new Todos({
                todoTitle,todoDescription,userId
            })
            await newtodo.save()
            res.status(200).json(newtodo)

        }
        

    }catch(err){
        res.status(401).json(`request faild error:${err}`)
    }

    
}

// getusertodo -token required
exports.allUsertodo = async (req,res)=>{
    const userId=req.payload
    try{
        const newtodo = await Todos.find({userId})
        res.status(200).json(newtodo)

    }catch(err){
        res.status(401).json(err)
    }
}

exports.editTodoController = async (req,res)=>{
    // get edit todo details 
    const {id}= req.params
    
    const userId =req.payload

    const {todoTitle,todoDescription}= req.body
    try{
        // this code  is update method is findByIdAndUpdate  passing _id
        const updateTodo= await Todos.findByIdAndUpdate({_id:id},{
            todoTitle,todoDescription,userId
        },{new:true})
        await updateTodo.save()
        res.status(200).json(updateTodo)

    }catch(err){
        res.status(401).json(err)
    }

}

// delete
exports.deleteTodoController = async(req,res)=>{
    // get all todo
    const {id}= req.params
    try{
        // response 
        const removeTodo = await Todos.findByIdAndDelete({_id:id})
        res.status(200).json(removeTodo)
    }catch(err){
        res.status(401).json(err)
    }
}