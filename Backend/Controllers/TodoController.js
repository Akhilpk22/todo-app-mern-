const Todos = require('../models/TodoSchema')

// addprojects 

exports.addTodo = async(req,res)=>{

    console.log("inside add Toso  function");
    const userId =req.payload
    // const projectImage = req.file.filename
    const {todoTitle,todoDescription}= req.body
    // console.log(`${title},${languages},${overview},${github},${website},${projectImage},${userId}`);

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

// getuserprojects -token required
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
    // get edit projects details 
    const {id}= req.params
    
    const userId =req.payload

    const {todoTitle,todoDescription}= req.body

    // const uploadprojectImage= req.file?req.file.filename:projectImage


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
    // get all projects
    const {id}= req.params
    try{
        // response 
        const removeTodo = await Todos.findByIdAndDelete({_id:id})
        res.status(200).json(removeTodo)
    }catch(err){
        res.status(401).json(err)
    }
}