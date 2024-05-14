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